const core = require('./@actions/core');
const github = require('./@actions/github');

try {
  console.log(`Starting. . .`);
  const payload = JSON.stringify(github.context.action_repository, undefined, 2)
  console.log(`Output: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
