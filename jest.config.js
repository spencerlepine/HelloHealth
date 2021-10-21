module.exports = {
  projects: [
    {
      displayName: 'dom',
      testEnvironment: 'jsdom',
      // "extensionsToTreatAsEsm": [".jsx"],
      testMatch: ['<rootDir>/client/**/*.test.js?(x)'],
      transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
      moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/client/src/__mocks__/styleMock.js',
        '\\.(png|gif|ttf|eot|svg|mp3)$':
          '<rootDir>/client/src/__mocks__/fileMock.js',
      },
      // collectCoverage: true,
      // coverageReporters: [
      //   'json',
      //   'html',
      //   'lcov',
      // ],
      // setupFilesAfterEnv: [
      //   '<rootDir>/server/test-utils/suiteSetup.js',
      //   '<rootDir>/client/test-utils/setupSuite.js',
      // ],
      // coveragePathIgnorePatterns: [
      //   '/node_modules/',
      //   '/*.test.js/',
      // ],
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/server/**/*.test.js?(x)'],
      transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
      // collectCoverage: true,
      // coverageReporters: [
      //   'json',
      //   'html',
      //   'lcov',
      // ],
      // setupFilesAfterEnv: [
      //   '<rootDir>/server/test-utils/suiteSetup.js',
      //   '<rootDir>/client/test-utils/setupSuite.js',
      // ],
      // coveragePathIgnorePatterns: [
      //   '/node_modules/',
      //   '/*.test.js/',
      // ],
    },
  ],
};
