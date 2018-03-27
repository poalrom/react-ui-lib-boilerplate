module.exports = {
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/components/**/?(*.)(spec|test).js?(x)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(css|styl)$': 'jest-css-modules',
  },
  collectCoverageFrom: [
    '**/components/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
};
