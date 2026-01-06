# GitHub Configuration

This directory contains all GitHub-specific configuration for CI/CD, issue management, and automation.

## Structure

```
.github/
├── workflows/
│   ├── ci.yml                    # Continuous Integration pipeline
│   └── cd.yml                    # Continuous Deployment pipeline
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml            # Bug report template
│   ├── feature_request.yml       # Feature request template
│   └── chore.yml                 # Maintenance task template
├── pull_request_template.md      # Pull request template
├── dependabot.yml                # Automated dependency updates
├── CODEOWNERS                    # Code review assignments
└── README.md                     # This file
```

## Workflows

### CI Pipeline (`ci.yml`)

**Purpose**: Validate code quality and build on every push and PR.

**Jobs**:

- **Quality Checks**: ESLint, Stylelint, Prettier
- **Build Validation**: Production build test

**Runs on**:

- All pushes to any branch
- Pull requests to `main` and `develop`

**Matrix**: Node.js 18.x and 20.x

### CD Pipeline (`cd.yml`)

**Purpose**: Deploy to Vercel automatically.

**Jobs**:

- **Deploy Preview**: Create preview deployment for PRs
- **Deploy Production**: Deploy to production on merge to `main`

**Dependencies**: Waits for CI to pass before deploying.

## Issue Templates

### Bug Report (`bug_report.yml`)

Structured template for reporting bugs with fields:

- Bug description
- Steps to reproduce
- Expected vs actual behavior
- Browser and environment details
- Screenshots and logs

### Feature Request (`feature_request.yml`)

Template for suggesting new features with fields:

- Feature description
- Problem statement
- Proposed solution
- Alternatives considered
- User impact

### Chore (`chore.yml`)

Template for maintenance tasks with fields:

- Task type (deps, docs, refactor, etc.)
- Description and motivation
- Scope of changes
- Testing requirements

## Pull Request Template

Comprehensive PR template (`pull_request_template.md`) includes:

- Change type selection
- Description and motivation
- Testing instructions
- Screenshots/GIFs
- Detailed checklist:
  - Code quality
  - Testing
  - Documentation
  - Git practices
  - Performance

## Dependabot

Automated dependency updates configuration (`dependabot.yml`):

- **npm dependencies**: Weekly updates (Mondays 9 AM)
- **GitHub Actions**: Weekly updates (Mondays 9 AM)
- Smart grouping: Minor/patch together, major separate
- Auto-labels: `dependencies`, `automated`, `github-actions`

**Ignored major updates** (require manual review):

- Next.js
- React
- React-DOM

## CODEOWNERS

Defines code review assignments:

```
* @luiscarlosvn                    # Default owner
/.github/ @luiscarlosvn            # GitHub config
/docs/ @luiscarlosvn               # Documentation
*.json @luiscarlosvn               # Config files
```

## Quick Start

### First Time Setup

1. **Configure GitHub Secrets** (Settings → Secrets):

   ```
   VERCEL_TOKEN
   VERCEL_ORG_ID
   VERCEL_PROJECT_ID
   ```

2. **Enable Branch Protection** (Settings → Branches):
   - Require PR before merge
   - Require status checks: Quality Checks, Build Validation
   - Require conversation resolution

3. **Test the Workflows**:

   ```bash
   git checkout -b test/ci-cd
   echo "test" > TEST.md
   git add TEST.md
   git commit -m "test: validate CI/CD"
   git push origin test/ci-cd
   ```

4. **Open a test PR** and verify:
   - ✓ CI runs automatically
   - ✓ CD creates preview deployment
   - ✓ Preview URL commented on PR
   - ✓ Status checks appear

### Daily Usage

**Feature Development**:

```bash
git checkout -b feature/my-feature
# Make changes
git commit -m "feat: add new feature"
git push origin feature/my-feature
# Open PR → CI runs → Review → Merge → Auto deploy
```

**Bug Fixes**:

```bash
git checkout -b fix/bug-description
# Fix the bug
git commit -m "fix: resolve bug description"
git push origin fix/bug-description
# Open PR → CI runs → Review → Merge → Auto deploy
```

## Troubleshooting

### CI Fails

1. Check logs in GitHub Actions tab
2. Run locally: `pnpm run lint && pnpm run build`
3. Fix issues and push again

### CD Fails

1. Verify GitHub Secrets are set correctly
2. Check Vercel token hasn't expired
3. Verify project is linked: `vercel link`
4. Review CD workflow logs

### Dependabot PRs

1. Review changes in the PR
2. Check dependency changelogs
3. Test locally if needed
4. Approve and merge

## Documentation

For detailed setup instructions and troubleshooting:

- [CI/CD Setup Guide](../docs/CI-CD-SETUP/CI-CD-SETUP.md)
- [Production Checklist](../docs/CI-CD-SETUP/PRODUCTION-CHECKLIST.md)
- [Environment Variables Guide](../docs/CI-CD-SETUP/ENVIRONMENT-VARIABLES.md)
- [Main README](../README.md)

## Best Practices

1. **Commits**: Use [Conventional Commits](https://www.conventionalcommits.org/)
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `chore:` for maintenance

2. **PRs**: Always use the provided template
   - Fill all relevant sections
   - Add screenshots for visual changes
   - Link related issues

3. **Reviews**:
   - Test preview deployments
   - Check code quality
   - Verify responsiveness

4. **Deployment**:
   - Never force push to `main`
   - Always deploy via PR → merge
   - Monitor production after deploy

## Support

For issues or questions:

1. Check the [CI/CD Setup Guide](../docs/CI-CD-SETUP/CI-CD-SETUP.md)
2. Review workflow logs in GitHub Actions
3. Open an issue using the appropriate template
4. Contact the maintainer: @luiscarlosvn

---

**Last Updated**: January 2026  
**Maintained by**: Luis Carlos Vitoriano Neto
