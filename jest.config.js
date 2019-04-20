const common = {
  preset: 'ts-jest',
};

module.exports = {
  projects: [
    {
      ...common,
      testEnvironment: 'node',
      testMatch: ['**/src/index.test.ts'],
    },
    {
      ...common,
      testEnvironment: '@jest-runner/electron/environment',
      testMatch: ['**/src/**/*.test.tsx'],
    },
  ],
};
