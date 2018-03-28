# Boilerplate for library of React UI components

> Fully compatible with [react-redux-flow-boilerplate](https://github.com/poalrom/react-redux-flow-boilerplate)

## What is this?

This is a prepared flow with convenient utils for building your own component library.
Development, testing, creating docs never been so simple!

## Features

- preconfigured [webpack](https://webpack.js.org/)
- static type checking with [flow](https://flow.org/)
- js and stylus linting using [eslint](https://eslint.org/) and [stylint](https://www.npmjs.com/package/stylint)
- snapshot testing with [jest](https://facebook.github.io/jest/) and [enzyme](http://airbnb.io/enzyme/)
- visual regress testing with [gemini](https://gemini-testing.github.io/)
- preconfigured [react styleguidist](https://react-styleguidist.js.org) for building docs

## Getting Started

Clone this repo to your local machine and install dependencies
```
git clone https://github.com/poalrom/react-ui-lib-boilerplate.git
cd react-ui-lib-boilerplate
npm install
```
That's all. Start write your own components, create tests and docs and do all other cool things!

## How to create new component?

- Add new folder to `components` named in [kebab case](http://wiki.c2.com/?KebabCase).
- Write component markup in `js` file and styles in `styl` file.
Don't forget to import `styl` file to `js`.
- Write docs in `md` file like it's writed in [Button component](https://github.com/poalrom/react-ui-lib-boilerplate/blob/master/src/components/button/Button.md)
- Create tests and spec in `__tests__` directory near your component's `js` file
- Render spec in `src/index.js` for live preview and visual testing

## CLI commands

```
npm run start // Start dev server

npm run lint // Lint styles and js

npm run test // Run jest tests

npm run test:coverage // Run jest tests and collect coverage

npm run styleguide // Start styleguidist on 6060 port

npm run styleguide:build // Build styleguide docs
```
## How to test using Gemini

- Install gemini using [this guide](https://gemini-testing.github.io/#installing)
- Run `selenium-standalone`
- Set up config in `.gemini.js`
- Run `gemini`
- ...
- Profit!
