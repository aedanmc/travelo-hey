# Travelo-Hey!

**UW Spring 22 CSE 403: Software Engineering**

*Contributors: Aedan McCall, Alex Zuniga, Camila Christensen, Matt Broom, Mike Harris*

## Contents

- [Synopsis](#Synopsis)
- [Repository Layout](#Repository-Layout)
- [Documentation](#Documentation)
- [Prerequisites](#Prerequisites)
- [Build/Test Instruction](#Build/Test-Instruction)
  - [Install](#Install)
  - [Test](#Test)
  - [Clean](#Clean)
  - [Build](#Build)
- [Running Locally](#Running-Locally)
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
- [reports](https://github.com/aedanmc/travelo-hey/tree/main/reports) contains team member's progress/goals/issues
- [server](https://github.com/aedanmc/travelo-hey/tree/main/server) back-end directory for all node server components

## Documentation

- [API](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/APIDOC.md)
- [Database](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/DBDOC.md)
- [GCP Set Up](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/GCPDOC.md)
- [Bug Tracking](https://github.com/aedanmc/travelo-hey/blob/main/documentation/instructions/BUGDOC.md)


## Prerequisites

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (v16.15.0+)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (v8.5.5+)

Require the most recent version of Chrome/Firefox

## Build/Test Instructions

You can run each of the scripts below individually, or run them altogether with:

```shell
npm run all
```

### Install

In order to run Travelo-Hey! you must perform the following:

```shell
npm install
```

You can review the dependencies being used under `package.json`

### Test

Before submitting, you must pass all tests by running the following command below:

```shell
npm test
```
* `Jest` unit testing for the React components
    - React tests located in `__test__`
* `Mocha` unit testing for the server and database
    - Server tests located in `server/test`
* `ESlint` syntax and style of javascript files

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
The build will be placed in `./build`

## Running Locally

Once you have completed the [Build/Test Instructions](#Build/Test-Instructions), you can run the project locally on ports 3000 (react) / 8080 (node) with:

```shell
npm run dev
```

## Operational Use Cases

While we are not fully implementing any of our use cases as described in our specification,
we are combining the MVP of two use cases:

* Finding advice about places to travel safely
* Research information/data on LGBTQ+ friendliness of countries in Asia

The first use case, we are retrieving business information for the landing page in which the user
could select a business to check its safety information. The second use case, since we are only
using limited mock data, the country that we are providing information on is the United States.


