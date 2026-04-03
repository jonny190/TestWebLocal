# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please send an email to security@yourdomain.com. All security vulnerabilities will be promptly addressed.

Please do **NOT** create GitHub issues for security vulnerabilities, as they are public. Instead, use the contact information above.

## Security Measures

This project implements the following security measures:

- ✅ Input validation with Zod
- ✅ XSS protection with Next.js
- ✅ CSRF protection
- ✅ SQL injection prevention with Prisma
- ✅ Rate limiting (can be added via middleware)
- ✅ Secure headers (can be added via middleware)
- ✅ Environment variable management
- ✅ Dependency vulnerability scanning

## Best Practices

- Never commit sensitive information to the repository
- Use environment variables for secrets
- Keep dependencies updated
- Run security audits regularly
- Use HTTPS in production
- Implement proper authentication and authorization

## Vulnerability Disclosure

We follow a responsible disclosure policy:

1. **Report** - Submit vulnerability details
2. **Review** - We review and validate the report
3. **Fix** - We work on a fix
4. **Release** - We release the fix
5. **Credit** - We credit the discoverer (optional)
