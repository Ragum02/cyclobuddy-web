# CycloBuddy Web – Development Workflow (Public)

This document outlines the development workflow. Even though this is a solo project, the workflow is designed to enforce code quality, maintainability, and TDD practices.

## Branching Strategy

- **main** – Stable production-ready code. Only merges from `develop` after testing.  
- **develop** – Integration branch for features under development. All feature branches merge here first.  
- **feature/[feature-name]** – Each new feature or bugfix is developed on its own branch off `develop`.  

## Feature Development

1. Create a new feature branch from `develop`.  
2. Implement the feature using **Test-Driven Development (TDD)**:  
   - Write unit tests first.  
   - Implement the minimal code to pass the tests.  
   - Refactor while keeping tests passing.  
3. Keep commits small and focused. Use clear commit messages using conventionnal git like chore,feat,fix...
4. Push the feature branch to GitHub.

## Pull Requests

Even as a solo developer, use pull requests to:  

- Review my own code allows me to spot mistakes, inconsistencies, or design improvements that are hard to see while coding.
- Ensure tests are passing.

## Testing

- Tests should be written before the implementation.

## Deployment

- `develop` branch is used for staging/testing environments.  
- `main` branch represents production-ready code.  
- CI/CD pipelines (planned for future) will automate builds, tests, and deployment.

## Best Practices

- Follow Clean Architecture principles:  
  - Separate `entities` (pure business logic), `application` (use-cases / services coordinating entities), `interface-adapters` (controllers, API routes, mappers, repository interfaces), and `infrastructure` (concrete implementations for UI, APIs, Firebase, OAuth, etc.).  
  - Keep UI isolated from core logic.  
  - Make each layer independently testable for full TDD coverage.
- Write clean, maintainable, and well-documented code.  
- Even solo, treat the repo as if working in a team:  
  - Pull requests  
  - Code reviews  
  - Consistent commit messages  
- Document important design decisions in `_docs/public/` or `_docs/private`.
