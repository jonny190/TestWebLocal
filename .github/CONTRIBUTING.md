# Contributing to Modern Tech Stack

Thank you for your interest in contributing to Modern Tech Stack! 🎉

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Commit Messages](#commit-messages)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

- Use the issue tracker to report bugs
- Include steps to reproduce the issue
- Include expected behavior
- Include actual behavior
- Include screenshots if applicable

### Suggesting Enhancements

- Use the issue tracker to suggest enhancements
- Explain the feature in detail
- Explain why the feature would be useful
- Include examples if applicable

### Pull Requests

- Fork the repository
- Create a new branch for your feature
- Make your changes
- Write tests if applicable
- Update documentation if applicable
- Submit a pull request

## Development Setup

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

### Setup

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/your-username/your-repo.git
cd TestWebLocal

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the documentation with details of changes if applicable
3. The PR should work against the `main` branch
4. The PR should pass all checks
5. A maintainer will review your PR and merge it when ready

## Style Guide

### Code Style

- Use TypeScript for all new code
- Use functional components with hooks
- Use Tailwind CSS for styling
- Follow the existing code style

### Naming Conventions

- Components: PascalCase (e.g., `Navbar.tsx`)
- Hooks: camelCase with use prefix (e.g., `useTheme.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)
- Variables/Functions: camelCase (e.g., `getUserData`)

### File Structure

```
components/
├── ui/              # shadcn/ui components
├── navbar.tsx       # Main navigation
└── footer.tsx       # Footer

app/
├── api/            # API routes
├── layout.tsx      # Root layout
├── page.tsx        # Home page
└── globals.css     # Global styles
```

## Commit Messages

We use conventional commit messages:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance

Example:
```
feat: add dark mode support
fix: resolve navigation issue
docs: update README with new features
```

## Questions?

Feel free to open an issue or contact the maintainers.
