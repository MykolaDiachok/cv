module.exports = [
  {
    files: ['*.ts', '*.js'], // Apply to both TypeScript and JavaScript files
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // TypeScript linting
      '@angular-eslint': require('@angular-eslint/eslint-plugin'), // Angular-specific rules
      prettier: require('eslint-plugin-prettier'), // Prettier for formatting
      import: require('eslint-plugin-import'), // Ensure proper import/export syntax
    },
    rules: {
      // Custom rules
      semi: 'error', // Enforce semicolons
      'prefer-const': 'error', // Prefer `const` over `let` where applicable
      'no-unused-vars': 'off', // Disable base rule in favor of TypeScript rule
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // TypeScript unused vars
      '@typescript-eslint/no-explicit-any': 'error', // Allow `any` type (customize as needed)
      'prettier/prettier': 'error', // Enforce Prettier formatting
    },
    ignores: ['node_modules/', 'dist/', 'src/**/*.spec.ts', 'docs/'], // Ignore these directories
  },
  {
    files: ['*.ts'],
    extends: [
      'airbnb-base',
      'airbnb-typescript/base',
      'plugin:@typescript-eslint/recommended',
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
    ], // Use Airbnb and Angular recommendations
    rules: {
      // Airbnb-specific and Angular TypeScript rules
      '@angular-eslint/component-class-suffix': 'error', // Ensure class names follow Angular conventions
      '@angular-eslint/no-empty-lifecycle-method': 'warn', // Warn about empty Angular lifecycle methods
    },
  },
  {
    files: ['*.html'],
    plugins: {
      '@angular-eslint/template': require('@angular-eslint/eslint-plugin-template'), // Template linting
    },
    rules: {
      '@angular-eslint/template/no-any': 'error', // Disallow `any` in templates
      '@angular-eslint/template/banana-in-box': 'warn', // Ensure proper banana-in-a-box syntax
    },
  },
];
