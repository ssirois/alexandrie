const common = {
  preset: 'ts-jest',
};

module.exports = {
  projects: [
    {
      ...common,
      testEnvironment: 'node',
      testMatch: ['**/src/**/*.test.ts'],
    },
    {
      ...common,
      testEnvironment: 'node',
      testMatch: ['**/src/**/*.test.tsx'],
    },
  ],
};
