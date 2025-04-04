import axios from 'axios';
import { config } from '../utils/config';

export class OpenAIProvider {
    private apiKey: string;

    constructor() {
        this.apiKey = config.openaiApiKey;
    }

    public async analyzeCode(codeSnippet: string): Promise<any> {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/davinci-codex/completions',
                {
                    prompt: `Analyze the following code for vulnerabilities:\n${codeSnippet}`,
                    max_tokens: 150,
                    temperature: 0.5,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            return response.data.choices[0].text.trim();
        } catch (error) {
            console.error('Error analyzing code with OpenAI:', error);
            throw new Error('Failed to analyze code');
        }
    }
}