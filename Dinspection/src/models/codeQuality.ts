export interface CodeQuality {
    score: number;
    issuesFound: number;
    issues: Array<{
        ruleId: string;
        severity: string;
        message: string;
        line: number;
        column: number;
    }>;
}