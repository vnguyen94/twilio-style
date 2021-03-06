const base = require('./../../jest.base');
const pkg = require('./package');

module.exports = {
  ...base,
  name: pkg.name,
  displayName: pkg.name,
  rootDir: '../..',
  testMatch: [
    `<rootDir>/packages/${pkg.name}/test/**/*.test.js`
  ],
};
