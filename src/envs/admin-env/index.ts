import { AdminEnv } from './admin-env.bit-env';

const eslintConfig = require.resolve('./config/eslintrc.js');
const prettierConfig = require.resolve('./config/prettier.config.js');
const tsconfig = require.resolve('./config/tsconfig.json');

export { AdminEnv, eslintConfig, prettierConfig, tsconfig }
export default AdminEnv
