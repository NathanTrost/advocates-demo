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
