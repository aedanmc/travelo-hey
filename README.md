# Travelo-Hey! [![Build Status](https://storage.googleapis.com/automatize-ci-badges/builds/cloud-build-badge/branches/master.svg)](https://console.cloud.google.com/cloud-build/builds?project=cse403-sp22-travelo-hey)

**UW Spring 22 CSE 403: Software Engineering**

*Contributors: Aedan McCall, Alex Zuniga, Camila Christensen, Matt Broom, Mike Harris*

## Contents

- [Synopsis](#Synopsis)
- [Repository Layout](#Repository-Layout)
- [Documentation](#Documentation)
- [Prerequisites](#Prerequisites)
- [Getting Started](#Getting-Started)
- [Running Locally](#Running-Locally)
- [User Guide](#User-Guide)
- [Operational Use Cases](#Operational-Use-Cases)

## Synopsis

Are you, or do you know a queer person that has traveled? Ever wanted to travel somewhere with your queer friends but not sure if it was safe to do so? According to National Geographic, prior to the COVID pandemic, LGBTQ+ people in the United States traveled on average 7 times each year and they spent $63.1 billion annually on traveling.

Many blogs exist that discuss single perspective information related to destination activities. So, queer travelers have to spend a lot of time researching safe things to do for travel planning.
Also, big competitors like TripAdvisor are too broad and the main focus is quality, not safety. Take for example a trip to Dubai, currently the United Arab Emirates has laws against homosexual activity thus does not represent a safe place for queer travelers.

We recognize the need for a solution where users can receive a good insight into businesses and LGBTQ+ hot spots that will make them feel comfortable and welcomed.

Welcome to Travelo-Hey!! Our solution will consist of a web application with cloud based data storage along with artificial intelligence (AI). Our AI implementation will focus on two tasks: highlighting reviews from your friends, and friend network travel alerts so you can stay in touch.

The information stored within our databases will include user data, business data, and the reviews and ratings. The reviews and ratings will store the text and rating, along with any images and videos published.

This is a really important topic to bring equity into technology. Travelo-Hey! is a unique tool that will revolutionize the way the queer community travels.

## Repository Layout

In the structure of this repo we have:

- [data](https://github.com/aedanmc/travelo-hey/tree/main/data) local database for Beta release
- [documentation](https://github.com/aedanmc/travelo-hey/tree/main/documentation) contains developer and user guides
- [front-end](https://github.com/aedanmc/travelo-hey/tree/main/front-end)  front-end directory for React components
    - [\_test\_](https://github.com/aedanmc/travelo-hey/tree/main/front-end/__test__) contains the front-end tests
- [reports](https://github.com/aedanmc/travelo-hey/tree/main/reports) contains team member's progress/goals/issues
- [server](https://github.com/aedanmc/travelo-hey/tree/main/server) back-end directory for all node server components
    - [test](https://github.com/aedanmc/travelo-hey/tree/main/server/test) contains the database and server tests

## Documentation
- [API](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/APIDOC.md)
- [Back-end Testing](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/BETESTINGDOC.md)
- [Database](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/DBDOC.md)
- [Front-end Testing](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/FETESTINGDOC.md)
- [GCP Set Up](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/GCPDOC.md)

## Prerequisites
- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (v16.15.0+)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (v8.5.5+)

Require the most recent version of Chrome/Firefox

## Getting Started

To download the repository, run the following command:

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

## User Guide
- [Bug Tracking](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/BUGDOC.md)

## Operational Use Cases

While we are not fully implementing any of our use cases as described in our specification,
we are combining the MVP of two use cases:

* Finding advice about places to travel safely
* Research information/data on LGBTQ+ friendliness of countries in Asia

The first use case, we are retrieving business information for the landing page in which the user
could select a business to check its safety information. The second use case, since we are only
using limited mock data, the country that we are providing information on is the United States.


