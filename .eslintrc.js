module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    // 定义 vue 自动引入的全局变量，防止报错
    // defineProps: true,
    // defineEmits: true,
    // ref: true,
    // reactive: true,
    // onMounted: true
  },
  extends: ['plugin:vue/vue3-recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/first-attribute-linebreak': 0,
    // 交给 TS 处理未命名的变量
    'no-undef': 0,
    'vue/no-multiple-template-root': 0,
    'vue/html-self-closing': 0,
    'space-before-function-paren': 0,
    'no-unused-vars': 1,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: 4
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'never'],
    'no-irregular-whitespace': 2,
    '@typescript-eslint/no-explicit-any': 1
  }
}
