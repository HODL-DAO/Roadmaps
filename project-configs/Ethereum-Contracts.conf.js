'use strict'

module.exports = {
  // Name of the organization or project this roadmap is generated for
  organization: 'HODL-DAO',

  // Include open and closed milestones where due date is after milestonesStartDate
  milestonesStartDate: '2019-12-01T01:00:00Z', // ISO formatted timestamp

  // Include open and closed milestones where due date is before milestonesEndDate
  milestonesEndDate: '2022-02-01T00:00:00Z', // ISO formatted timestamp

  // Github repository to open open a Pull Request with the generated roadmap
  targetRepo: "HODL-DAO/Roadmaps", // 'owner/repo'

  // List of projects that this roadmap covers
  projects: [
    {
      "name": "Ethereum-Contracts",
      "repos": [
        "HODL-DAO/Ethereum-Contracts"
      ], links: {}
    }
  ]
}
