module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['jest --bail --findRelatedTests', 'eslint --fix', 'prettier --write'],
  '**/*.{json,md}': ['prettier --write'],
};
