module.exports = {
  maxWorkers: 99,
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/*.test.js/',
    '/config/',
    '/test-utils/',
  ],
  projects: [
    {
      displayName: 'DOM',
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/client/test-utils/setupSuite.js'],
      // 'extensionsToTreatAsEsm': ['.jsx'],
      testMatch: ['<rootDir>/client/**/*.test.js?(x)'],
      setupFiles: ['dotenv/config'],
      modulePaths: ['/client/src/'],
      moduleDirectories: ['node_modules', 'client/src'],
      moduleFileExtensions: ['js'],
      moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/client/src/__mocks__/styleMock.js',
        '\\.(png|gif|ttf|eot|svg|mp3|jpg)$':
          '<rootDir>/client/src/__mocks__/fileMock.js',
      },
      transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/server/**/*.test.js?(x)'],
      transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
      setupFilesAfterEnv: ['<rootDir>/server/test-utils/suiteSetup.js'],
    },
  ],
};
