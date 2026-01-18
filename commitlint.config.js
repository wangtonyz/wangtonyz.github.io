module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',      // 新功能
        'fix',       // 修复bug
        'docs',      // 文档变化
        'style',     // 代码风格变化（不影响代码意义）
        'refactor',  // 代码重构
        'perf',      // 性能优化
        'test',      // 添加测试
        'chore',     // 构建过程或依赖变化
        'ci',        // CI配置文件和脚本的变化
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
  },
};
