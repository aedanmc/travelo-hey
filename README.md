# Travelo-Hey! [![Build Status](https://storage.googleapis.com/automatize-ci-badges/builds/cloud-build-badge/branches/master.svg)](https://console.cloud.google.com/cloud-build/builds?project=cse403-sp22-travelo-hey)

**UW Spring 22 CSE 403: Software Engineering**

*Contributors: Aedan McCall, Alex Zuniga, Camila Christensen, Matt Broom, Mike Harris*

## Contents

- [Repository Layout](#Repository-Layout)
- [Documentation](#Documentation)
- [Prerequisites](#Prerequisites)
- [Getting Started](#Getting-Started)
- [Running Locally](#Running-Locally)
- [Versioning Process](#Versioning-Process)
    - [Overview](#Overview)
    - [Responsibilities of Contributor](#Responsibilities-of-Contributor)
    - [Responsibilities of Maintainer](#Responsibilities-of-Maintainer)
    - [Safety Checks after Building Release](#Safety-Checks-after-Building-Release)
- [Deployment](#Deployment)
- [Operational Use Cases](#Operational-Use-Cases)

## About Travelo-Hey!

See our motivation and use cases in our [user guide](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/USERDOC.md).

## Repository Layout

In the structure of this repo we have:

- [data](https://github.com/aedanmc/travelo-hey/tree/main/data) production and test database instances
- [documentation](https://github.com/aedanmc/travelo-hey/tree/main/documentation) miscellaneous instructions and walkthroughs
- [front-end](https://github.com/aedanmc/travelo-hey/tree/main/front-end)  front-end directory for React components
    - [\_test\_](https://github.com/aedanmc/travelo-hey/tree/main/front-end/__test__) front-end tests
- [reports](https://github.com/aedanmc/travelo-hey/tree/main/reports) team member's progress/goals/issues
- [server](https://github.com/aedanmc/travelo-hey/tree/main/server) back-end directory for all node server components
    - [test](https://github.com/aedanmc/travelo-hey/tree/main/server/test) database and server tests

## Documentation
- [API](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/APIDOC.md)
- [Back-end Testing](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/BETESTINGDOC.md)
- [Bug Tracking](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/BUGDOC.md)
- [Database](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/DBDOC.md)
- [Front-end Testing](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/FETESTINGDOC.md)
- [GCP Set Up](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/GCPDOC.md)
- [User Guide](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/USERDOC.md)
- [Writing components](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/COMPONENTDOC.md)

## Prerequisites
- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (v16.15.0+)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (v8.5.5+)

Require the most recent version of Chrome/Firefox

## Getting Started

To clone the repository, run the following command:

```shell
git clone https://github.com/aedanmc/travelo-hey.git
```

In the `travelo-hey` directory, you can build and test all system by running the scripts altogether with:

```shell
npm run all
```

Or, by following the steps below:

### Install

Install all required dependencies with:

```shell
npm install
```

You can review the dependencies being used under `package.json` for back-end dependencies, and
`front-end/package.json` for front-end dependencies.

### Test

Before submitting, you must pass all tests by running the following command:

```shell
npm test
```
* `Jest` unit testing for the React components
  - React tests located in `__test__`
* `Mocha` unit testing for the server and database
  - Server tests located in `server/test`

### Clean

To remove any previous builds:

```shell
npm run clean
```

### Build
To create a fresh build:

```shell
npm run build
```
The build will be placed in `./front-end/build`

## Running Locally

Once you have completed the [Getting Started](#Getting-Started), you can run the project locally on ports 3000 (react) / 8080 (node) with:

```shell
npm run dev
```


## Versioning Process


### Overview
All releases will target main.

- **Major release**: Forward/client facing changes
- **Minor release**: Back-end implementation changes
- **Patch release**: Bug fixes and minor code refactorings without new features

For example, if current package version is `1.0.0`:<br>
**Major release** version would be `2.0.0` <br>
**Minor release** version would be `1.1.0` <br>
**Patch release** version would be `1.0.1`


### Responsibilities of Contributor
- Updating the version number should be expressed by the person creating a pull request (PR).
- Use the following template in the PR to describe the changes necessary.

```text
TODO: Your Note

Type of Version Update: TODO: Major/Minor/Bug
Current Version Number: TODO: v##.##.##
New Version Number: TODO: v##.##.##
Additional Tags: TODO: alpha, beta, pre-release, release
```


### Responsibilities of Maintainer
- Reviewers must make sure PR contributor has indicated version update in PR.
- Maintainer will update the version naming system.


### Safety Checks after Building Release
- Ensuring documentation is up-to-date
- Notify user of changes (for major changes)
- Notify team of changes (for major and minor changes)
- Document any lingering issues to be addressed in the next iteration


## Deployment
**Under Construction**


## Operational Use Cases

While we are not fully implementing any of our use cases as described in our specification,
we are combining the MVP of two use cases:

* Finding advice about places to travel safely
* Research information/data on LGBTQ+ friendliness of countries in Asia

The first use case, we are retrieving business information for the landing page in which the user
could select a business to check its safety information. The second use case, since we are only
using limited mock data, the country that we are providing information on is the United States.


