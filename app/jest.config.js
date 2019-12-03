module.exports = {
  moduleDirectories: ['node_modules', 'utils'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/.storybook/',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
