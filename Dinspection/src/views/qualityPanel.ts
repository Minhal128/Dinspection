import React from 'react';

const QualityPanel: React.FC<{ report: any }> = ({ report }) => {
    return (
        <div>
            <h2>Code Quality Report</h2>
            {report ? (
                <div>
                    <h3>Score: {report.score}</h3>
                    <ul>
                        {report.issues.map((issue: any, index: number) => (
                            <li key={index}>
                                <strong>{issue.title}</strong>: {issue.description}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No report available.</p>
            )}
        </div>
    );
};

export default QualityPanel;