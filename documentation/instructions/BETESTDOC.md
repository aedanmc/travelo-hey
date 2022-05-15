# Back-end Testing

`Mocha` and `Chai` are being used to test the server and database. 

The back-end testing can be found at `./server/test`, with the following files:

* `acid.db.js` contains test that check the ACID properties of the database
* `schema.db.js` contains test related to our local database schema
* `endpoint.server.js` contains test for endpoint business logic

Any additional back-end tests should be added to this folder.


## Contents

- [Running the tests](#Running-the-Tests)
- [How to Add New Test Files](#How-to-Add-New-Test-Files)
    - [File Naming Convention](#File-Name-Convention)
    - [New Test File Requirements](#New-Test-File-Requirements)
        - [Component Specific Requirements](#Component-Specific-Requirements)
        - [Adding the Test Description](#Adding-the-Test-Description)
    - [Adding a Test Case](#Adding-a-Test-Case)
    


## Running the Tests

Before submitting, you must pass all tests by running the following command below:

```shell
npm run test:back
```


## How to Add New Test Files

### File Name Convention

For any new file added to the `./server/test` folder, use the following convention:

`<descriptive-name>.<component>.js`

**Descriptive-name**: A concise description of what the test performs. If the descriptive 
name contains more than one word, use `-` to separate them,
eg. `what-my-test-does.test.js`.

**Component**: This should be either `db` or `server` depending on what part of the back-end you are testing.


### New Test File Requirements

Use the following template to set up your test file.
```JavaScript
/**
 * TODO: Describe test(s)
 */
(async function() {
    const expect = require('chai').expect;
    
    // TODO: add component specific require statements, see Component Specific Requirements
    
    // TODO: Insert describe(), see Adding the Test Description
    // TODO: add your test cases to describe(), see Adding a Test Case

    await db.close();
});
```


#### Component Specific Requirements

* DB Component Tests

```JavaScript
const db = await require('../db_connection').getDBConnection();
```

* Server Component Tests

```JavaScript
const db = await require('../db_connection').getTestConnection();
const myApp = require('../server');
```


#### Adding the Test Description

Using Mocha's `describe` function to describe test group:

```Javascript
describe('<Descriptive Group Name>', () => {
    // TODO: add test cases here, see Adding a Test Case
});
```


### Adding a Test Case

Using Mocha's `it` function to describe test cases:

```Javascript
it('<Test case description>', (done) => {
    // TODO: add your test case logic
    done();
});
```
