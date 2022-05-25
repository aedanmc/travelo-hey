# Writing new components for Travelo-Hey!

 Travelo-Hey!'s front-end is based on [React](https://reactjs.org/) and [React Router](https://reactrouterdotcom.fly.dev/). As these libraries are designed for flexibility, it is impossible to provide an exhaustive list of strategies for implementing components for extending or enhancing our system. However, there are a few important guidelines that the front-end team expects contributors to the repository to follow.

 ## Guidelines for contributing component code

 ### Use Airbnb's ESLint rules.
 
 The front end team uses linting to keep our React code in a maintainable state and to avoid anti-patterns as we do not use TypeScript. Contributors to the front-end code base are expected to use the same rules to keep code style consistent.

 ### Routing should be isolated to App.jsx.

 For good separation of concerns, all routing should be handled inside of App.jsx. Not only is this good factoring because all the routing is done in one place, it also fits with how React Router is intended to be used for smaller-scale projects like this one. See React Router's [documentation](https://reactrouterdotcom.fly.dev/docs/en/v6) and [tutorials](https://reactrouterdotcom.fly.dev/docs/en/v6/getting-started/tutorial) for more information.


