import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/s/(.*)$': '<rootDir>/src/server/$1',
    '^@/a/(.*)$': '<rootDir>/src/app/$1',
    '^@/api/(.*)$': '<rootDir>/src/app/api/$1',
    '^@/c/(.*)$': '<rootDir>/src/components/$1',
    '^@/h/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/l/(.*)$': '<rootDir>/src/lib/$1',
    '^@/u/(.*)$': '<rootDir>/src/lib/util/$1',
    '^#/(.*)$': '<rootDir>/$1',
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
};

export default createJestConfig(customJestConfig);
