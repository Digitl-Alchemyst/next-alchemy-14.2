import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js root dir. to load next.config.js and .env files
  dir: './',
});

// Add any custom configs to be used by Jest below
/** @type {import('jest').Config} */

const customJestConfig = {
  // use this option to enable/disable TypeScript support
  tsConfig: './tsconfig.json',
  // use this option to enable/disable eslint support
  eslint: {
    dirs: [
      'src/app',
      'arc/app/api',
      'src/components',
      'src/hooks',
      'src/lib',
      'src/store',
      'src/lib/util',
      '__test__',
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/.github'],
  moduleNameMapper: {
    // Handle module aliases for Next.js
    '^@/sa/(.*)$': '<rootDir>/src/actions/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/api/(.*)$': '<rootDir>/src/app/api/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/util/(.*)$': '<rootDir>/src/lib/util/$1',
  },
  // testEnvironment: 'jest-enviroment-jsdom',
  preset: 'ts-jest',
  verbose: true,
};

// Ensure next/jest can load the async Next.js config
module.exports = createJestConfig(customJestConfig);
