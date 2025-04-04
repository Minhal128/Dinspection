import * as ts from 'typescript';

export function parseCode(code: string): ts.SourceFile {
    return ts.createSourceFile('temp.ts', code, ts.ScriptTarget.Latest, true);
}

export function extractFunctionNames(sourceFile: ts.SourceFile): string[] {
    const functionNames: string[] = [];

    function visit(node: ts.Node) {
        if (ts.isFunctionDeclaration(node) && node.name) {
            functionNames.push(node.name.text);
        }
        ts.forEachChild(node, visit);
    }

    visit(sourceFile);
    return functionNames;
}

export function extractVulnerableFunctions(functionNames: string[]): string[] {
    const vulnerableFunctions = ['eval', 'exec', 'setTimeout', 'setInterval'];
    return functionNames.filter(name => vulnerableFunctions.includes(name));
}