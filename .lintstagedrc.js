module.exports = {
  // Type check all TypeScript Files
  '**/*.{ts,tsx}': () => 'tsc --noEmit --skipLibCheck --noErrorTruncation',

  // Lint & Prettify TS and JS files
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix --no-ignore', 'prettier --write'],

  // Prettify only Markdown and JSON files
  '**/*.{json,md}': ['prettier --write'],
};
