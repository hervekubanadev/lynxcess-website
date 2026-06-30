# Contributing to Lynxcess Website

## Development Setup

```bash
# Prerequisites: Node.js 18+, Bun
git clone https://github.com/hervekubanadev/lynxcess-website.git
cd lynxcess-website

# Install dependencies
bun install

# Start dev server
bun run dev

# Run tests
bun run test

# Lint
bun run lint
```

## Project Conventions

- **TypeScript**: Strict mode enabled. Avoid `any`.
- **Components**: Use functional components with named exports.
- **Styling**: Tailwind CSS utility classes. Avoid inline styles.
- **shadcn/ui**: Add new primitives via `bunx shadcn-ui@latest add <component>`.
- **Animations**: Framer Motion for page/component transitions.
- **Routing**: React Router DOM v6 — flat route structure under `src/pages/`.
- **State**: Server state via TanStack React Query; local state with React hooks.

## Development Workflow

1. Create a feature branch: `git checkout -b feat/feature-name`
2. Implement changes following existing patterns.
3. Ensure TypeScript compiles: `bun run build`
4. Run tests: `bun run test`
5. Run linter: `bun run lint`
6. Commit with conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`

## Pull Requests

- Link to the related issue.
- Include screenshots for UI changes.
- Verify responsive layout at multiple breakpoints.
- Ensure no console errors or warnings.

## Reporting Issues

Open a GitHub issue with:
- Browser and OS versions
- Steps to reproduce
- Expected vs actual behaviour
- Screenshots if applicable
