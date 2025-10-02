# Contributing to omznchat

Thank you for your interest in contributing to omznchat! This document provides guidelines and instructions for contributing to this project.

## ⚠️ Project Status: Pre-Alpha Development

**IMPORTANT:** This project is in early active development and is **NOT production-ready**. 

- Features are incomplete and under active development
- APIs may change without notice
- Breaking changes are expected
- Code structure may be refactored significantly
- Not suitable for production use or sensitive data

By contributing, you acknowledge that this is an experimental project and should be treated as such.

## 🤝 How to Contribute

We welcome contributions of all kinds! Here's how you can help:

### 1. Check Existing Issues

Before starting work, browse the [Issues](https://github.com/ArmanTheFirst/omznchat/issues) page to:
- Find tasks that need help
- Report new bugs or feature requests
- Avoid duplicate work
- Discuss implementation approaches

### 2. Fork and Branch Approach

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/omznchat.git
   cd omznchat
   ```
3. **Add upstream remote** to keep your fork synced:
   ```bash
   git remote add upstream https://github.com/ArmanTheFirst/omznchat.git
   ```
4. **Create a feature branch** with a descriptive name:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   # or
   git checkout -b docs/documentation-update
   ```

### 3. Make Your Changes

- Write clean, maintainable code
- Follow the existing code style and conventions
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

### 4. Commit Your Changes

Use clear, descriptive commit messages following this style:

```bash
# Feature commits
git commit -m "feat: add user authentication system"

# Bug fixes
git commit -m "fix: resolve message ordering issue"

# Documentation
git commit -m "docs: update installation instructions"

# Refactoring
git commit -m "refactor: improve chat component structure"

# Style changes
git commit -m "style: format code with Prettier"
```

**Commit Message Format:**
- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Keep the first line under 50 characters
- Add detailed description after a blank line if needed
- Reference issue numbers when applicable (e.g., "fixes #123")

### 5. Push and Create Pull Request

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Reference to related issues
   - Screenshots for UI changes (if applicable)
   - Breaking changes noted (if any)

## 🔧 Development Setup

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun package manager
- Git

### Environment Configuration

1. **Copy environment template:**
   ```bash
   cp .env .env.local
   ```

2. **Configure environment variables** in `.env.local`:
   - Never commit `.env.local` or sensitive credentials
   - Use placeholder values in `.env` for documentation
   - Document required variables in README.md

3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

## 📋 Development Guidelines

### Code Style

- **TypeScript:** Write type-safe code with proper type annotations
- **ESLint & Prettier:** Code style is enforced automatically
- **Component Structure:** Follow existing patterns in the codebase
- **File Organization:** Keep files focused and modular

### Best Practices

- ✅ Write meaningful variable and function names
- ✅ Add comments for complex logic
- ✅ Keep functions small and focused
- ✅ Handle errors gracefully
- ✅ Update documentation for new features
- ❌ Don't commit commented-out code
- ❌ Don't commit console.log statements
- ❌ Don't commit credentials or API keys

## 🔒 Security Considerations

### Reporting Security Issues

**DO NOT** create public GitHub issues for security vulnerabilities.

If you discover a security vulnerability:

1. **Create a private issue** with "SECURITY" in the title, or
2. **Use GitHub's private vulnerability reporting** feature, or
3. **Contact the maintainers** directly

We take security seriously and will respond promptly to legitimate reports.

### Security Best Practices for Contributors

- ⚠️ **Never commit sensitive data:**
  - API keys, tokens, or credentials
  - Private keys or certificates
  - Database connection strings
  - User data or personal information

- ✅ **Always use environment variables** for configuration
- ✅ **Follow OWASP best practices**
- ✅ **Validate and sanitize user input**
- ✅ **Keep dependencies updated**
- ✅ **Review code for security issues before submitting**

### Important Security Notes

⚠️ **This project is NOT audited for security** and should NOT be used with:
- Sensitive data
- Production environments
- Critical systems
- Personal or confidential information

This is an experimental project. Use at your own risk.

## 🧪 Testing

### Before Submitting

- Ensure your changes don't break existing functionality
- Test in different browsers/environments if applicable
- Verify mobile responsiveness for UI changes
- Check console for errors
- Test edge cases

### Running Tests

```bash
# When tests are implemented:
npm test
```

## 📝 Documentation

### When to Update Documentation

- Adding new features
- Changing APIs or interfaces
- Updating configuration requirements
- Fixing bugs that affect usage

Update the relevant documentation files:
- `README.md` - Project overview and getting started
- `CONTRIBUTING.md` - This file
- Code comments - Inline documentation
- JSDoc/TSDoc - Function and component documentation

## 🔗 Project Resources

- **Issues & Roadmap:** [GitHub Issues](https://github.com/ArmanTheFirst/omznchat/issues)
- **Pull Requests:** [Open PRs](https://github.com/ArmanTheFirst/omznchat/pulls)
- **License:** [MIT License](https://github.com/ArmanTheFirst/omznchat/blob/main/LICENSE)
- **Code of Conduct:** Be respectful, constructive, and collaborative

## 💡 Getting Help

- **Questions?** Open a discussion or issue
- **Stuck?** Comment on the relevant issue
- **Suggestions?** We're open to ideas!

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to omznchat!** 🎉

Your contributions help make this project better for everyone. We appreciate your time and effort!
