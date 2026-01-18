# Git Flow 工作流配置说明

本项目已配置全局 Git Flow 工作流，集成了自动化的提交验证和 Changelog 更新功能。

## 项目结构

```
wangtonyz.github.io/
├── .husky/                      # Git hooks (全局配置)
│   ├── commit-msg              # 提交消息验证
│   ├── post-commit             # 自动更新 CHANGELOG
│   └── pre-push                # Push 前检查
├── .git/
│   └── hooks/                  # Git hooks 符号链接/副本
├── commitlint.config.js        # Commitlint 规则配置（全局）
├── package.json                # 全局依赖管理
├── CHANGELOG.md                # 项目变更日志
│
├── about-me/                   # 静态网站
├── about-me-react/             # React 应用
│   └── package.json            # 仅包含应用依赖
```

## 功能说明

### 1. Commit 消息验证 (commit-msg hook)
- **何时触发**: 执行 `git commit` 时
- **验证规则**: 使用 Conventional Commits 格式
- **效果**: 不符合规范的提交会被拒绝
- **支持**: 可从任何子目录或根目录提交

### 2. Changelog 自动更新 (post-commit hook)
- **何时触发**: 执行 `git commit` 成功后
- **功能**:
  - 自动分析提交的类型（feat, fix, chore 等）
  - 使用 conventional-changelog 更新 CHANGELOG.md
  - 将更新的 CHANGELOG.md 包含在当前提交中（amend）
- **效果**: 每次提交后，CHANGELOG 自动保持最新

### 3. Push 前检查 (pre-push hook)
- **何时触发**: 执行 `git push` 时
- **检查内容**:
  - 验证将要推送的所有 commit 消息格式
- **效果**: 不符合规范的 push 会被拒绝

## 提交消息格式

必须遵循 **Conventional Commits** 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 类型 (type) 选项

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat(auth): add login page` |
| `fix` | 修复 bug | `fix(button): correct hover state` |
| `docs` | 文档变化 | `docs: update README` |
| `style` | 代码风格 (不影响逻辑) | `style: format code` |
| `refactor` | 代码重构 | `refactor(api): simplify request logic` |
| `perf` | 性能优化 | `perf: improve load time` |
| `test` | 添加测试 | `test: add unit tests` |
| `chore` | 构建/依赖变化 | `chore(deps): upgrade packages` |
| `ci` | CI 配置变化 | `ci: update github actions` |

### 提交示例

```bash
# 推荐方式 - 简短消息
git commit -m "feat(user): add user profile page"
git commit -m "fix: resolve memory leak"
git commit -m "docs: update installation guide"

# 详细消息
git commit -m "feat(payment): add PayPal integration

- Add PayPal SDK
- Implement payment flow
- Add error handling

Closes #123"
```

## 工作流程

### 正常流程 ✅

从根目录提交：
```bash
cd /Users/sixwong/Desktop/wangtonyz.github.io

# 1. 做出修改
vim about-me-react/src/App.tsx

# 2. 暂存更改
git add about-me-react/src/App.tsx

# 3. 提交 (会触发 commit-msg hook 验证)
git commit -m "feat(app): add new feature"
# ✅ 通过 commitlint 验证
# ✅ post-commit hook 自动更新 CHANGELOG.md
# ✅ CHANGELOG.md 自动并入本次提交

# 4. 推送 (会触发 pre-push hook)
git push
# ✅ Commit 消息格式验证通过
# ✅ CHANGELOG.md 随之推送
```

从子目录提交：
```bash
cd about-me-react

# 1. 做出修改
vim src/App.tsx

# 2. 暂存更改
git add src/App.tsx

# 3. 提交 (同样的工作流)
git commit -m "feat(app): add new feature"
# ✅ Hooks 自动查找根目录的配置
# ✅ 支持完全相同的工作流

# 4. 推送
git push
```

### 失败情况 ❌

#### 情况 1: 提交消息格式错误

```bash
git commit -m "update some files"
# ❌ Error: type-empty
# ❌ Commit 被拒绝
```

**解决方案**:
```bash
git commit --amend -m "feat: update some files"
```

#### 情况 2: Push 前 commit 消息格式错误

```bash
git push
# ❌ Commit 消息格式不符合规范！
# ❌ Push 被拒绝
```

**解决方案**: 修改上一条 commit 消息
```bash
git commit --amend
# 或
git reset --soft HEAD~1
git commit -m "feat: correct message"
```

## NPM 脚本

```bash
# 安装 husky hooks (npm install 后自动运行)
npm run prepare

# 手动生成/更新 CHANGELOG
npm run changelog
```

## 相关配置文件

全局配置文件（项目根目录）：
- `.husky/commit-msg` - 提交消息验证 hook
- `.husky/post-commit` - 自动更新 CHANGELOG hook
- `.husky/pre-push` - Push 前验证 hook  
- `commitlint.config.js` - commitlint 规则配置
- `package.json` - 全局依赖管理

## 禁用 Hook (不推荐!)

如果需要临时跳过 hooks (紧急情况):

```bash
# 跳过所有 hooks
git commit --no-verify -m "your message"
git push --no-verify

# 或使用环境变量
HUSKY=0 git push
```

## 常见问题

### Q: 如何修改已提交的消息?
```bash
git commit --amend -m "feat: new message"
git push --force-with-lease  # 谨慎使用
```

### Q: 如何手动更新 CHANGELOG?
```bash
npm run changelog
```

### Q: CHANGELOG 为什么没有自动更新?
检查以下几点：
1. 确认提交消息格式符合规范（feat, fix, chore 等开头）
2. 检查 post-commit hook 是否存在且可执行：
   ```bash
   ls -l .husky/post-commit
   chmod +x .husky/post-commit
   ```
3. 确认 conventional-changelog 已安装：
   ```bash
   npx conventional-changelog --version
   ```

### Q: Hook 不工作?
检查以下配置：
```bash
# 1. 检查 core.hooksPath 配置
git config core.hooksPath

# 2. 检查 .husky 目录权限
ls -la .husky/
chmod +x .husky/commit-msg .husky/post-commit .husky/pre-push

# 3. 检查 .git/hooks 目录
ls -la .git/hooks/ | grep -E "commit-msg|post-commit|pre-push"

# 4. 验证 hooks 可执行
chmod +x .git/hooks/commit-msg .git/hooks/post-commit .git/hooks/pre-push
```

### Q: 为什么只在根目录有 husky 配置?
为了简化管理和维护：
- **单一配置源**：所有子项目共享同一套 Git hooks 和 commitlint 规则
- **一致性**：确保整个项目的提交规范保持一致
- **易维护**：Git hooks 更新只需在一个地方修改
- **自动生效**：Git 自动查找根目录的配置，无需在子项目中重复配置

## 参考资源

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [commitlint](https://commitlint.js.org/)
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
