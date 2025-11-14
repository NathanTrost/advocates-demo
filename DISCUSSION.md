# DISCUSSION

## WORK DONE HERE

### Initial Dev Setup[https://github.com/NathanTrost/advocates-demo/pull/7/files]

**Enhancement:**

- Added basic VSCode setup and prettierconfig to ain autoformatting and other tooling

- Ignoring claude files

### Hydration and Key Fixes[https://github.com/NathanTrost/advocates-demo/pull/8/files]

**Bug Fixes:**

- Added unique keys to mapped lists (advocates & specialties) to eliminate hydration errors
- Fixed unhandled promise rejection on fetch with proper error handling
- Added missing `<tr>` wrapper in table header (invalid HTML)

### Fix Typing on Advocate Data[https://github.com/NathanTrost/advocates-demo/pull/9/files]

**Typescript Adherence:**

- Added Advocate and AdvocatesApiReturn types
- Included id in advocate seed data, as id should be required
- Consuming types in page.tsx to address lint issues
- Generalizing term matching by removing case-sensitivity and accounting for specialties array in search callback

### Package Updates and Vulnerabilities[https://github.com/NathanTrost/advocates-demo/pull/10/files]

**Bug Fixes:**

- Bumped Next.js to a patch version to fix major vulnerability in build. Chose to do this after the TS fix as I was unsure if it might cause breaking changes.
- Ran 'npm audit fix' to elegantly autofix esbuild. The remaining 4 vulnerabilities are moderate and fixing might require more time and research
- Verified that none of these updates appear to negatively affect the apps operation.
