import { commands, ExtensionContext } from 'vscode';
import { analyzeCodeForVulnerabilities } from '../providers/openaiProvider';
import { fetchCodeQualityMetrics } from '../providers/sonarqubeProvider';

export function registerCommands(context: ExtensionContext) {
    const analyzeCommand = commands.registerCommand('codeSecurityAnalyzer.analyze', async () => {
        const result = await analyzeCodeForVulnerabilities();
        // Handle the result, e.g., display it in a panel
    });

    const qualityCommand = commands.registerCommand('codeSecurityAnalyzer.checkQuality', async () => {
        const metrics = await fetchCodeQualityMetrics();
        // Handle the metrics, e.g., display them in a panel
    });

    context.subscriptions.push(analyzeCommand, qualityCommand);
}