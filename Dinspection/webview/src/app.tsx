import React from 'react';
import ReactDOM from 'react-dom';
import VulnerabilityList from './components/VulnerabilityList';
import QualityReport from './components/QualityReport';

const App = () => {
    return (
        <div>
            <h1>Code Security Analyzer</h1>
            <VulnerabilityList />
            <QualityReport />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));