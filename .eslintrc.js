module.exports = {
  root: true,
  env: {
    node: true
  },
  // 后面的配置会优于前面的，
  // 在安装prettier时，安装eslint-config-prettier、eslint-plugin-prettier插件来解决与eslint规则的冲突
  extends: [
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // 'plugin:vue/vue3-recommended',
    // '@vue/typescript/recommended',
    // '@vue/prettier',
    // '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: module
  },
  // “off”或者0： 关闭规则 “warn”或者1： 打开规则，作为警告。“error”或者2： 打开规则，作为错误
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    // '@typescript-eslint/no-undef': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-empty-function': 'off'
    'vue/multi-word-component-names': 'off'
  }
};
