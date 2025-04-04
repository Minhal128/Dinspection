import axios from 'axios';
import { CodeQuality } from '../models/codeQuality';

export class SonarQubeProvider {
    private baseUrl: string;
    private authToken: string;

    constructor(baseUrl: string, authToken: string) {
        this.baseUrl = baseUrl;
        this.authToken = authToken;
    }

    async fetchQualityMetrics(projectKey: string): Promise<CodeQuality | null> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/measures/component`, {
                params: {
                    component: projectKey,
                    metricKeys: 'sqale_index,code_smells,vulnerabilities,bugs'
                },
                headers: {
                    'Authorization': `Basic ${Buffer.from(this.authToken).toString('base64')}`
                }
            });

            const metrics = response.data.component.measures;
            const codeQuality: CodeQuality = {
                projectKey: projectKey,
                issuesFound: metrics.find(m => m.metric === 'code_smells')?.value || '0',
                vulnerabilities: metrics.find(m => m.metric === 'vulnerabilities')?.value || '0',
                bugs: metrics.find(m => m.metric === 'bugs')?.value || '0',
                sqaleIndex: metrics.find(m => m.metric === 'sqale_index')?.value || '0'
            };

            return codeQuality;
        } catch (error) {
            console.error('Error fetching quality metrics from SonarQube:', error);
            return null;
        }
    }
}