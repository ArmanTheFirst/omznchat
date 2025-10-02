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

### Setup Guide

#### 1. Clone the repository

```bash
git clone https://github.com/ArmanTheFirst/omznchat.git
cd omznchat
```

#### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

#### 3. Create `.env.local` file

Create a `.env.local` file in the root directory. This file will contain all the required environment variables for the project.

#### 4. Get API keys and configure environment variables

You'll need to sign up for the following third-party services and obtain API keys:

**Required Services:**

1. **[Clerk](https://clerk.com/)** - Authentication service
   - Sign up for a free account
   - Create a new application
   - Get your keys from the API Keys section:
     - `CLERK_SECRET_KEY` (Server-side)
     - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (Client-side)
     - `CLERK_WEBHOOK_SECRET` (for webhook endpoints)

2. **[Stream](https://getstream.io/)** - Real-time chat infrastructure
   - Sign up for a free account
   - Create a new app
   - Get your credentials:
     - `STREAM_SECRET` (Server-side)
     - `NEXT_PUBLIC_STREAM_KEY` (Client-side)

3. **[Google reCAPTCHA](https://www.google.com/recaptcha/)** - Spam prevention
   - Register a new site (v2 or v3)
   - Get your keys:
     - `RECAPTCHA_SECRET_KEY` (Server-side)
     - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (Client-side)

4. **Email Configuration** - For sending notifications
   - Use your email provider's SMTP settings
   - Configure:
     - `SENDER_MAIL` - Email address to send from
     - `SENDER_PASSWORD` - Email account password or app-specific password
     - `RECEIVER_MAIL` - Email address to receive notifications
     - `OMZN_MAIL` - Project's main email address

5. **Web Push Notifications** - For browser push notifications
   - Generate VAPID keys using `npx web-push generate-vapid-keys`
   - Configure:
     - `WEB_PUSH_PRIVATE_KEY` (Server-side)
     - `NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY` (Client-side)

**Additional Configuration:**
- `NEXT_PUBLIC_GITHUB_REPO_URL` - GitHub repository URL
- `NEXT_PUBLIC_HOSTING_URL` - Your local or deployment URL (e.g., `http://localhost:3000`)
- `NEXT_PUBLIC_DISCORD_INVITE` - Discord invite link (if applicable)
- `NEXT_PUBLIC_X_URL` - X/Twitter URL (if applicable)

#### 5. Populate `.env.local`

Your `.env.local` file should look like this:

```env
# Server-side keys
CLERK_SECRET_KEY=your_clerk_secret_key
STREAM_SECRET=your_stream_secret
CLERK_WEBHOOK_SECRET=your_webhook_secret
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
SENDER_MAIL=your_sender_email@example.com
SENDER_PASSWORD=your_email_password
RECEIVER_MAIL=receiver@example.com
OMZN_MAIL=omzn@example.com
WEB_PUSH_PRIVATE_KEY=your_private_vapid_key

# Client-side keys (prefixed with NEXT_PUBLIC_)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
NEXT_PUBLIC_STREAM_KEY=your_stream_public_key
NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY=your_public_vapid_key
NEXT_PUBLIC_GITHUB_REPO_URL=https://github.com/ArmanTheFirst/omznchat
NEXT_PUBLIC_HOSTING_URL=http://localhost:3000
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/your-invite
NEXT_PUBLIC_X_URL=https://x.com/your-handle
```

**⚠️ IMPORTANT:** Never commit your `.env.local` file! It's already in `.gitignore`.

#### 6. Run the development server

```bash
npm run dev
```

The app should now be running at `http://localhost:3000`.

### Troubleshooting

- **Missing environment variables**: Check the console for error messages indicating which variables are missing
- **Invalid API keys**: Verify that you've copied the correct keys from each service
- **Port already in use**: Change the port by running `PORT=3001 npm run dev`

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
