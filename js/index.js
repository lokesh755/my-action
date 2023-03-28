const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(`Starting. . .`);
  const context_action = JSON.stringify(github.context.action, undefined, 2);
  const context_ref = JSON.stringify(github.context.ref, undefined, 2);
  console.log(`Action: ${context_action}`);
  console.log(`Ref: ${context_ref}`);
} catch (error) {
  core.setFailed(error.message);
}
