# Front-end Testing

The testing framework `Jest` is being used to test the React components. The front-end testing can be found at `./front-end/__test__`.

## Contents
- [Running the tests](#Running-the-tests)
- [How to Add New Tests](#How-to-Add-New-Tests)


## Running the tests

Before submitting, you must pass all tests. You can run the test using two different methods:

* Running the tests from the `root` directory:
```shell
npm run test:front
```

* Running the tests from the `front-end` directory:
```shell
npm test
```

## How to Add New Tests

### Where to add new test files
New test files that are specific to front-end can be added to the front-end testing folder (`./front-end/__test__/`). These tests files should be of the format `<test-name>.test.js.`.

### How to write tests
Front-end tests utilize Jest as a test-runner, as well as the React Testing Library.

* Import the react testing library:
`import '@testing-library/react';`

* Import Jest:
`import '@testing-library/jest-dom';`

When writing tests, each test case can be individually specified by wrapping all of the test code in a `test()` function. One test case can include multiple different assertions, each of which is defined inside of an `expect()` function. If any of the `expect()` assertions fail, the entire test case will fail. The console will show which `expect()` assertion failed first.

Travelo-Hey utilizes routing for many of its components and pages. Trying to render these components will result in compiler warnings, and the components will not render properly. To get around this, a custom rendering function using a MemoryRouter as a wrapper is required. Instead of calling `render(<Component>)`, calling `customRender(<Component>)` will properly render the given component without running into problems with routing.

* Import MemoryRouter:
`import { MemoryRouter } from 'react-router-dom';`

* Wrap custom render function with MemoryRouter:
`const customRender = (ui) => {`
`    return render(ui, { wrapper: MemoryRouter });`
`}`

Some components have a debug version allowing for rendering components for testing purposes without fetching data from the back-end server. SearchPage, for example, accepts a prop `debug` which, when given a truthy value, will bypass data fetching entirely when rendering the component. Alternatively, giving a falsey value for `debug` will fetch the data as normal. When writing test cases, utilize the debug version of the component(s) you are testing.

When writing individual tests, aim for component-granularity with the tests you are writing. By separating test cases into individual components, discovering the source of the test failure is much easier and painless than testing multiple components in one test case. Multiple test cases can be included in one test file, which can help with testing plans that involve interactions between different components. It is also recommended to name your tests; the name can be specified as the first argument to `test()`, with the second being the code for the test itself.