import React from 'react';

interface QualityReportProps {
    score: number;
    issues: Array<{ id: string; description: string; severity: string }>;
}

const QualityReport: React.FC<QualityReportProps> = ({ score, issues }) => {
    return (
        <div>
            <h2>Code Quality Report</h2>
            <p>Quality Score: {score}</p>
            <h3>Issues Found:</h3>
            <ul>
                {issues.map(issue => (
                    <li key={issue.id}>
                        <strong>{issue.severity}</strong>: {issue.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QualityReport;