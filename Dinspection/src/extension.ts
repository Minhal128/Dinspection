import * as vscode from 'vscode';
import { registerCommands } from './commands/index';
import { OpenAIProvider } from './providers/openaiProvider';
import { SonarQubeProvider } from './providers/sonarqubeProvider';

export function activate(context: vscode.ExtensionContext) {
    const openAIProvider = new OpenAIProvider();
    const sonarQubeProvider = new SonarQubeProvider();

    registerCommands(context, openAIProvider, sonarQubeProvider);
}

export function deactivate() {
    // Cleanup if necessary
}