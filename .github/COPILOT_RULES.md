# Copilot Rules - Kinetic CSS

## Critical Project Rules

These rules are non-negotiable and must be followed at all times when working on this codebase.

### 1. Language Policy

- **All content must be in English**: slides, comments, code, documentation
- **No typographic dashes**: Only use ASCII hyphen-minus (-)
- **No hyphenated compounds**: Use "scroll driven" not "scroll-driven"
- Translate any non-English content immediately

### 2. CSS Motion Philosophy

- **JavaScript is banned for motion**: All animations must be pure CSS
- **Live demos required**: Every CSS API needs a working demonstration
- **Performance first**: All animations must run at 60fps
- **Cutting-edge focus**: Prioritize newest CSS motion APIs even with limited browser support

### 3. File Operations

- **NEVER use shell commands for file editing**: Use only `replace_string_in_file` and `create_file` tools
- **NEVER use commands to read files**: Use only `read_file`, `list_dir`, `grep_search`, `semantic_search` tools
- **Always use relative paths**: Never use absolute paths like `/Users/...` in terminal commands
- **Always format after edits**: Run `pnpm run format` after creating or modifying any file

### 3.1 Slide Asset Split Rules (Mandatory)

For every slide partial file (for example `_doodle.html`):

- HTML lives under `src/slides/...` (intro, topics, summary, or outro subfolders)
- CSS must live in `src/styles/` and be named after the slide: `src/styles/_doodle.css`
- JS must live in `src/scripts/` and be named after the slide: `src/scripts/_doodle.js`
- The slide HTML must explicitly include its CSS and JS assets using document-relative paths:
  - `<link rel="stylesheet" href="./styles/_doodle.css" />`
  - `<script type="module" src="./scripts/_doodle.js"></script>`
- Do NOT inline `<style>` or `<script>` in slide partials. Keep slide code split and reusable.
- Motion must remain CSS-first. JS files should be minimal and only used when absolutely necessary for non-motion logic.

### 3.2 Terminal Working Directory

- Always run terminal commands from the project root folder `kinetic-css`
- Do not use absolute paths or `-C /absolute/path` flags in commands
- Use relative paths only (for example: `pnpm run format`, `pnpm start`)

### 4. Slide Structure

- **One API per slide**: Each CSS motion feature gets dedicated coverage
- **Use PostHTML includes**: All slides use `<include src="..."></include>` pattern
- **Naming convention**: Individual slides use `_api-name.html` with underscore prefix
- **Section organization**: Group slides in folders: `intro/`, `summary/`, `topics/`, `outro/`
- **Per-slide assets**: Each slide must have a matching CSS and JS file as described in 3.1

### 5. Code Quality

- **Prettier for markup**: Format HTML, CSS, JSON, YAML, Markdown with Prettier
- **Biome for scripts**: Format JavaScript and TypeScript with Biome
- **Mandatory formatting**: EVERY file must be formatted after modification
- **No exceptions**: Format all files, no matter how small the change

### 6. Build and Deploy

- **Package manager**: Always use `pnpm`, never `npm` or `yarn`
- **Dev server port**: 6001 (configured in package.json)
- **Build triggers deploy**: Only commits matching `rel(x.x.x)` pattern deploy to GitHub Pages
- **Public URL**: Always set to `./` for GitHub Pages compatibility

### 7. Accessibility

- **Respect reduced motion**: Use `@media (prefers-reduced-motion)` for all animations
- **Keyboard navigation**: All interactive elements must be keyboard accessible
- **ARIA labels**: Add where needed, but inherit from native elements when possible
- **Color contrast**: Maintain WCAG AA minimum standards

### 8. Dependencies

- **Core libraries only**: Use `@pixu-talks/core`, `@pixu-talks/fonts`, `@pixu-talks/theme`
- **Minimal JavaScript**: Only import `@pixu-talks/core` in `src/scripts/index.js`
- **No animation libraries**: Absolutely no JavaScript animation libraries (GreenSock, Anime.js, etc.)
- **CSS-only demos**: Every motion demo must work with CSS alone

### 9. Browser Support

- **Test on modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Use `@supports`**: Feature detection for experimental CSS
- **Graceful degradation**: Provide fallbacks for unsupported features
- **No polyfills**: Show browser limitations honestly; don't hide them

### 10. Content Strategy

- **Progressive complexity**: Start simple, build to advanced
- **Visual impact**: Prioritize "wow factor" demonstrations
- **One concept at a time**: Don't overload slides
- **Practical examples**: Every API needs a real-world use case

## Enforcement

- These rules apply to ALL code changes, no matter how small
- Breaking any rule requires explicit justification in commit message
- When in doubt, refer to `.github/copilot-instructions.md` for detailed guidance
- All rules are equally important; there is no prioritization

## Quick Reference

### File Creation Checklist

- [ ] Use English only
- [ ] Use `create_file` tool, not shell commands
- [ ] Format with appropriate formatter (`pnpm run format`)
- [ ] Follow naming conventions (`_api-name.html` for slides)
- [ ] Include in parent section file
- [ ] Split assets: create `src/styles/_name.css` and `src/scripts/_name.js`
- [ ] Reference assets from slide with `<link>` and `<script type="module">`
- [ ] Test in dev server (`pnpm start`)

### CSS Motion Demo Checklist

- [ ] Pure CSS, no JavaScript
- [ ] Works in modern browsers
- [ ] Runs at 60fps
- [ ] Includes `@supports` if experimental
- [ ] Respects `prefers-reduced-motion`
- [ ] Has clear code comments
- [ ] Demonstrates one clear concept
- [ ] Uses split asset files (no inline `<style>`/`<script>` in slides)

### Build and Deploy Checklist

- [ ] Use `pnpm` commands only
- [ ] Format all changed files
- [ ] Test locally with `pnpm start`
- [ ] Commit message follows pattern (e.g., `rel(1.0.0)` for deploy)
- [ ] Verify build in `dist/` directory
- [ ] Check GitHub Pages after deploy

## Common Mistakes to Avoid

1. ❌ Using JavaScript for animations → ✅ Use pure CSS
2. ❌ Using `sed`, `cat`, etc. for files → ✅ Use dedicated tools
3. ❌ Using absolute paths → ✅ Use relative paths from project root
4. ❌ Forgetting to format → ✅ Always run `pnpm run format`
5. ❌ Adding slides without demos → ✅ Every API needs live demo
6. ❌ Using npm or yarn → ✅ Always use pnpm
7. ❌ Complex slides with multiple concepts → ✅ One API per slide
8. ❌ Forgetting accessibility → ✅ Always respect reduced motion
9. ❌ Using typographic dashes → ✅ Use only ASCII hyphen (-)
10. ❌ Non-English content → ✅ All content in English
