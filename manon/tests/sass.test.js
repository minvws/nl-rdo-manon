import { describe, it } from 'vitest';
import sass from 'sass';
import path from 'path';
import sassTrue from 'sass-true';

describe('Sass Tests', () => {
  const sassTestFiles = [
    'functions/_validators.test.scss',
    'mixins/_theming.test.scss',
    // Add other Sass test files here as you create them
  ];

  sassTestFiles.forEach((file) => {
    const filePath = path.resolve(__dirname, file);
    sassTrue.runSass({ describe, it }, filePath, { sass });
  });
});
