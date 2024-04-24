const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    OPENAI_KEY: 'sk-proj-kB1xiI3KVPHif2FISzx6T3BlbkFJzDTa8nCRMTyiA9E5xCJk'
  }
});
