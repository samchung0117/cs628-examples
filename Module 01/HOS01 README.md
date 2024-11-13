# HOS01: Cloud Development Environment  (CDE)
##  Learning Outcomes
1.	Accessing GitHub Codespaces
2.	Install and Run AI-Powered Web App

## Resource
### Cloud Development Environment
* [GitHub Get Started](https://docs.github.com/en/get-started)
* [GitHub Codespaces](https://docs.github.com/en/codespaces)
* [About billing for GitHub Codespaces](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)
* [Cloud IDE - VSCode for the Web](https://code.visualstudio.com/docs/editor/vscode-web)
* [16 Bash Commands Data Scientists Must Know](https://builtin.com/data-science/bash-commands)
* [Node - Getting Started](https://nodejs.dev/en/learn/)
* [create-react-app - Getting Started](https://create-react-app.dev/docs/getting-started)
* [GitHub Codespaces ♥️ Express](https://github.com/github/codespaces-express)
* [Markdown Guide - Getting Started](https://www.markdownguide.org/getting-started/)
* [W3Schools - JSON](https://www.w3schools.com/js/js_json_intro.asp)
* [Internet Systems Consortium (ISC) License](https://en.wikipedia.org/wiki/ISC_license)

### Source Code Examples
* [CS 628 Repository for Examples](https://github.com/samchung0117/cs628-examples)
* [Codespace running Express!](https://github.com/github/codespaces-express/blob/main/index.js)

**Practices**
* Run Ollama Server
  * Open New Terminal
  * `curl -fsSL https://ollama.com/install.sh | sh`
  * `ollama serve`

* Pull and Chat with a Large Language Model (LLM) Conversational AI
  *  Open New Terminal
  *  `ollama pull gemma2:2b`

* Run ExpressJS Backend Server
  *  Open New Terminal
  *  `cd backend`
  *  `npm install`
  *  `node index.js`
  *  Make the Port Visibility `Public`
  *  Copy the forwarded address ExpressJS

* Run React.js Frontend Server
  *  Copy your ExpressJS Forwarded Address
  *  Create `.env` file and paste it after `REACT_APP_API_URL=` following: (use `example.env` as reference)
  *  Open New Terminal
  *  `cd frontend`
  *  `npm install`
  *  `npm start`

