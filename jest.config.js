module.exports = {
  projects: [
    {
      displayName: 'dom',
      testEnvironment: 'jsdom',
      // "extensionsToTreatAsEsm": [".jsx"],
      testMatch: ['<rootDir>/client/**/*.test.js?(x)'],
      transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
      moduleNameMapper: {
        '\\.(png|gif|ttf|eot|svg)$':
          '<rootDir>/client/src/__mocks__/fileMock.js',
      },
      // transform: {
      //   '^.+\\.svg$': '<rootDir>/svgTransform.js',
      // },
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
