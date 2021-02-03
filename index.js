const { Octokit } = require('@octokit/rest')

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

octokit.pulls.createReview({
  owner: 'mccraveiro',
  repo: 'cheddar',
  pull_number: 12,
  event: 'APPROVE',
})
