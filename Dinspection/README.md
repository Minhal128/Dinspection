# Code Security Analyzer

## Overview
The Code Security Analyzer is a Visual Studio Code extension designed to identify and warn against potentially vulnerable functions in programming syntax. It integrates with OpenAI for vulnerability assessment and SonarQube for code quality analysis, providing developers with insights to improve their code security and quality.

## Features
- **Vulnerability Detection**: Utilizes OpenAI to analyze code snippets and identify potential vulnerabilities.
- **Code Quality Analysis**: Integrates with SonarQube to fetch code quality metrics and reports.
- **User-Friendly Interface**: Provides panels to display detected vulnerabilities and quality reports within the VS Code environment.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd code-security-analyzer
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Open the command palette in VS Code (Ctrl+Shift+P).
2. Run the command `Analyze Code for Vulnerabilities` to analyze the currently open file.
3. View the results in the Vulnerability Panel.
4. For code quality metrics, run the command `Fetch Code Quality Report` and check the Quality Panel.

## Configuration
- Configure your OpenAI API key and SonarQube server details in the `src/utils/config.ts` file.
- Ensure that the necessary permissions are granted for the extension to access the required APIs.

## Development
To contribute to the project:
1. Make sure to follow the coding standards defined in the `.eslintrc.json` file.
2. Run the development server using:
   ```
   npm run watch
   ```
3. Debug the extension using the configuration in the `.vscode/launch.json`.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- OpenAI for providing the API for vulnerability assessment.
- SonarQube for offering tools for code quality analysis.