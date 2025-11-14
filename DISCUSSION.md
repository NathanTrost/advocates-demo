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

**Maintenance:**

- Bumped Next.js to a patch version to fix major vulnerability in build. Chose to do this after the TS fix as I was unsure if it might cause breaking changes.
- Ran 'npm audit fix' to elegantly autofix esbuild. The remaining 4 vulnerabilities are moderate and fixing might require more time and research
- Verified that none of these updates appear to negatively affect the apps operation.

### Style and FE work[https://github.com/NathanTrost/advocates-demo/pull/11/files]

**Enhancements:**

- Extracted table into reusable `ExpandableTable` component for better code organization
- Added styling to the application using Tailwind CSS v3, adapting patterns from a personal project
- Added accordion styling to rows for better UI experience. (initially shows 2 "Specialties", click "...More" or the arrow to expand).
- Consolidated first and last names in table to "Name" to minimize space.
- Moved 'Search' title to the input placeholder instead (cleaner UI, less redundancy)
- Added `classnames` package and using it within page.tsx and the new ExpandableTable component. I find this package useful especially for dynamic classnames, but like to use it anytime multiple classnames need to be used, this opinion comes from fighting snapshot tests but also disliking the ole 'undefined' class in html markup.
- Utilizing custom `formatPhoneNumber` util in table

**Bug Fix:**

- Added `prettier` & `prettier-plugin-tailwindcss` packages. I had missed installing prettier in the initial PR. As this was a much larger PR it made the lack of auto-formatting more obvious.
