# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

Report vulnerabilities to **hervekubana.dev** or open a GitHub issue with the `security` label. You should receive a response within 48 hours.

## Web Security Basics

### HTTPS

The production deployment enforces HTTPS via the hosting provider. All assets are served over secure connections.

### Content Security Policy

A strict CSP header should be configured at the reverse-proxy or CDN level to restrict script sources, inline styles, and external resources.

### Dependencies

- All npm packages are pinned to exact versions in `package-lock.json` / `bun.lock`.
- Regularly run `bun audit` or `npm audit` to identify and patch vulnerabilities.
- Only well-maintained, widely-used libraries are included (React, Radix, Tailwind, Framer Motion).

### Input Handling

- The site is primarily client-rendered; no user-generated content is persisted server-side.
- Contact forms (future) must validate and sanitize all inputs server-side before submission or storage.

### Authentication & Authorization

- No authentication is currently implemented.
- Future admin interfaces must use industry-standard OAuth 2.0 / OpenID Connect flows.

### Data Protection

- No sensitive data (PII, credentials, tokens) is stored on the client.
- Environment variables containing secrets are never committed to the repository (see `.gitignore`).

### Build & Deployment

- Assets are minified and hashed during build (`vite build`).
- Source maps are not deployed to production.
- CI runs linting and type checking to prevent common security antipatterns.
