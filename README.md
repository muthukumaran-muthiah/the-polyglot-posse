# Leo: A Chat Bot

This project houses the codebase for Leo, a user-friendly chatbot.

## Prerequisites
Before diving in, ensure you have the following tools installed on your system:

- Node.js (https://nodejs.org/en)
- npm (Node Package Manager) - Typically comes bundled with Node.js

## Installation
- Clone this repository or download the project files.
- Navigate to the project directory in your terminal.
- Run the following command to install all the project dependencies:

```bash
yarn
# or
npm install
```
## Development
### Starting the development server:

Use the following command to launch the development server with hot-code reloading, error reporting, and other features:

```bash
quasar dev
```

## Linting and formatting:

Maintain code quality by running the linter and formatter:

### Lint:

```bash
yarn lint
# or
npm run lint
```

### Format:

```bash
yarn format
# or
npm run format
```

## Building for Production
To create a production-ready build of the chatbot, execute:

```bash
quasar build
```
For building a mobile app specifically for Android, use:

```bash
quasar build -m android
```

## Configuration
For advanced customizations, refer to the Quasar documentation on configuring 

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
