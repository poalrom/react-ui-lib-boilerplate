module.exports = {
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/components/**/__tests__/*.jest.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(css|styl)$': 'jest-css-modules',
  },
  collectCoverageFrom: [
    '**/components/**/*.js',
    '!**/components/**/__tests__/*.js',
    '!**/node_modules/**',
  ],
};
