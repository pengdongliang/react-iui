import { defineConfig } from 'father';
import { resolve } from 'path';

export default defineConfig({
  cjs: { output: 'lib', ignores: ['src/stories/**'] },
  esm: { output: 'es', ignores: ['src/stories/**'] },
  umd: {
    output: 'dist',
  },
  alias: { '@': resolve(__dirname, './src'), '~': resolve(__dirname, '.') },
});
