module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],// 扩展使用 vue 检查规则和eslint推荐规则
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    /* ESLint Rules */
    /* https://eslint.bootcss.com/docs/rules/ */
    'vue/component-definition-name-casing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-indent': [2, 2], // html 内 缩进
    // 强制所有控制语句使用一致的括号风格
    'curly': [2, 'multi-line'],
    // 强制在点号之前和之后一致的换行
    // 点和属性放在同一行
    'dot-location': [2, 'property'],
    // 要求使用 === 和 !==
    'eqeqeq': 'off',
    /*[2, 'always', {
      // 不对 null 使用此规则
      'null': 'ignore',
    }]',*/
    // 强制使用一致的缩进 2个空格
    'indent': [2, 2, {
      // 强制 switch 语句中的 case 子句的缩进级别
      // 在 swtich 后所以一级
      'SwitchCase': 1,
    }],
    // 禁用 console
    'no-console': 0,
    // 禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    // 禁止出现多行空行
    'no-multiple-empty-lines': [2, {
      // 强制最大连续空行数是1
      'max': 1,
    }],
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': [2, {
      // 要求每个作用域的初始化的变量有多个变量声明
      // 有初始值的单独声明，无初始值的
      'initialized': 'never',
    }],
    // 禁止块语句和类的开始或末尾有空行
    'padded-blocks': [2, 'never'],
    // 要求或禁止函数圆括号之前有一个空格
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],

    /* eslint-plugin-vue Rules */
    /* https://eslint.vuejs.org/rules/ */
    // 标签自闭和规则
    'vue/html-self-closing': [1, {
      html: {
        // 单标签元素必须自闭和
        void: 'always',
      },
    }],
    // 强制第一个属性的位置(属性换行)
    'vue/first-attribute-linebreak': 'off',
    /*[2, {
      // 单行时，第一属性前不允许使用换行符
      singleline: 'beside',
      // 多行时，第一属性前必须使用换行符
      multiline: 'below',
    }],*/
    // 强制每行的最大属性数
    'vue/max-attributes-per-line': 'off',
    /*[2, {
      // 单行时可以接收最大数量
      singleline: 10,
      // 多行时可以接收最大数量
      multiline: {
        max: 1,
      },
    }],*/
    // 在多行元素的内容前后需要换行符
    'vue/multiline-html-element-content-newline': [2, {
      // 允许内容周围出现空行
      allowEmptyLines: true,
    }],
    // 禁止使用 v-html 防止 XSS 攻击
    'vue/no-v-html': 0,
    // 在单行元素的内容前后需要换行符
    'vue/singleline-html-element-content-newline': 0,
  },
};
