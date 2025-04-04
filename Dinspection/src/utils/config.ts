export interface Config {
    openaiApiKey: string;
    sonarqubeUrl: string;
    sonarqubeToken: string;
}

export const config: Config = {
    openaiApiKey: process.env.OPENAI_API_KEY || '',
    sonarqubeUrl: process.env.SONARQUBE_URL || 'http://localhost:9000',
    sonarqubeToken: process.env.SONARQUBE_TOKEN || '',
};