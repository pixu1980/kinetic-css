# Copilot Instructions - Kinetic CSS

## Project Context

This is an HTML talk/presentation titled "Kinetic CSS: a deep dive into modern Motion APIs" that explores how CSS has evolved to handle animations, reactions, and choreography without JavaScript. The presentation demonstrates cutting-edge CSS features including `@property`, `@function`, `if()`, `@starting-style`, `@view-transition`, `@scope`, `@container`, scroll-driven animations, `sibling-index()`, `sibling-count()`, anchor positioning, and individual transforms.

**Duration:** 45-60 minutes  
**Format:** HTML presentation with reveal.js  
**Deployment:** GitHub Pages  
**Package Manager:** pnpm  
**Event:** Bonanni a Tutti 2026

## Talk Objectives

- Demonstrate CSS as a complete motion system without JavaScript
- Showcase `@property` for animatable custom properties
- Explore `@function` and `if()` for logic and reactive math in CSS
- Present `@starting-style` for cinematic enter animations
- Combine `@view-transition`, `@scope`, and `@container` for modular motion systems
- Demonstrate scroll-driven animations that make interfaces feel alive
- Use `sibling-index()` and `sibling-count()` for dynamic element counting and timeline synchronization
- Showcase individual transforms (`rotate`, `translate`, `scale`, `skew`) with anchor positioning, typed values, and trigonometric functions

## Talk Abstract

"What if, in the future of web motion, JavaScript were no longer needed? Spoiler: that future is today. Over the last few years, CSS has received a legendary power-up. It can now animate, react, and choreograph entire scenes without touching a single script. In this talk, we'll explore how to bend reality using only HTML and CSS, no frameworks, no npm madness, just pure motion expressed through brain bending style.

We'll discover how @property can be used to create truly animatable variables, and how @function together with if() allows logic and reactive math to live directly inside your stylesheets. We'll use @starting-style to craft cinematic enter animations, while combining @view-transition, @scope, and @container to design modular motion systems that adapt to context. All of this will come together through smooth, scroll-driven animations that make the interface feel alive. Along the way, we'll count elements dynamically with sibling-index() and sibling-count() to synchronize timelines, and we'll rely on individual transforms like rotate, translate, scale, and skew, enhanced by anchor positioning, typed values, and trigonometric functions that turn geometry into visual poetry.

It's no longer about decoration, it's about choreography.
This is CSS that moves, thinks, and breathes."

## Slide Structure

Each slide must follow these principles:

### General Guidelines

- **One CSS API per slide**: Each major CSS motion feature gets its dedicated slide
- **Live code examples**: Working CSS demonstrations for every technical concept
- **Inline demos**: Prefer live demos in slides; use external links only for complex examples
- **Progressive complexity**: Start with foundational APIs, move to experimental/cutting-edge features
- **Visual impact**: Prioritize demos that showcase the "wow factor" of CSS motion

### Slide Categories

#### Introduction (Slides 1-3)

- Speaker introduction and background
- Talk overview and learning objectives
- The paradigm shift: CSS as a complete motion system

#### Foundation APIs (Slides 4-10)

- `@property`: Animatable custom properties
- Individual transforms: `rotate`, `translate`, `scale`, `skew`
- Typed values and units
- Trigonometric functions: `sin()`, `cos()`, `tan()`

#### Reactive and Contextual Motion (Slides 11-18)

- `@function` and `if()`: Logic in CSS
- `@container` queries for adaptive animations
- `@scope` for modular motion systems
- Anchor positioning for relational animations

#### Cinematic CSS (Slides 19-28)

- `@starting-style` for enter animations
- `@view-transition` for seamless state changes
- Scroll-driven animations
- Timeline orchestration with scroll()

#### Dynamic Counting and Synchronization (Slides 29-34)

- `sibling-index()` for element position
- `sibling-count()` for dynamic calculations
- Timeline synchronization techniques
- Staggered animations without JavaScript

#### Advanced Choreography (Slides 35-42)

- Complex animation sequences
- Combining multiple APIs
- Performance optimization
- Real-world use cases

#### Future and Wrap-up (Slides 43-45)

- Upcoming CSS motion features
- Resources and learning paths
- Q&A and conclusions

## Technical Code Standards

### HTML/Structure

- Use reveal.js for slide composition
- Use PostHTML with `posthtml-include` for slide composition
- Main slides file: `src/slides/slides.html`
- Each slide section in `src/slides/` organized by category:
  - `intro/` - Introduction slides
  - `summary/` - Overview and agenda
  - `topics/` - Main content slides
  - `outro/` - Conclusion and resources
- Naming convention: `_api-name.html` for individual slides, prefixed with underscore
- Group related slides in section files (e.g., `intro.html` includes multiple `_*.html` files)

### CSS

- Main styles in `src/styles/index.css`
- Import shared libraries: `@pixu-talks/fonts`, `@pixu-talks/theme`
- Use custom properties for theming and reusable values
- **Demonstrate the CSS APIs being discussed in the slide code itself**
- Follow mobile-first responsive design
- Keep demo code clean and readable

### JavaScript

- Main script in `src/scripts/index.js`
- **Minimal JavaScript**: Only import `@pixu-talks/core` for reveal.js setup
- CSS motion demos should NOT use JavaScript
- If JavaScript is absolutely necessary for a demo, comment extensively why CSS alone isn't sufficient

### Motion Examples Standards

- Each CSS motion API must have a working live demo
- Demos should be self-contained and work in modern browsers
- Include proper fallbacks for experimental features
- Use `@supports` for feature detection when needed
- Comment complex CSS motion code
- Optimize animations for 60fps performance

### Language Policy (Mandatory)

- **All files must be in English**: slide content, comments, scripts, and styles
- When adding or editing content, translate any non-English text to English
- Do not use typographic dashes (em dash —, en dash –) or non-breaking hyphens (‑)
- Use only the ASCII hyphen-minus (-) character
- Avoid hyphenated compound adjectives in English copy (prefer "scroll driven" over "scroll-driven")

## File Organization

```
src/
├── index.html              # Main presentation file
├── assets/
│   ├── audio/             # Audio files if needed
│   ├── logo/              # Logo assets
│   └── qrcodes/           # QR codes for resources
├── brand/
│   └── brand.html         # Brand styling and assets
├── scripts/
│   └── index.js           # Main presentation script (minimal)
├── slides/
│   ├── slides.html        # Main slides container
│   ├── intro/
│   │   ├── intro.html
│   │   ├── _pixu.html
│   │   ├── _main-topic.html
│   │   └── _doodle.html
│   ├── summary/
│   │   ├── summary.html
│   │   ├── _topics.html
│   │   └── _dive-in.html
│   ├── topics/
│   │   └── topics.html    # Topics container (CSS motion APIs)
│   └── outro/
│       ├── outro.html
│       ├── _wrap-up.html
│       ├── _thanks.html
│       ├── _links.html
│       └── _taf.html
└── styles/
    └── index.css          # Main stylesheet
```

## Style Conventions

### Code Examples Template

````html
<section class="slide" data-markdown>
  <textarea data-template>
    ## API Name

    Brief description of the CSS motion capability

    ```css
    @property --rotation {
      syntax: '<angle>';
      inherits: false;
      initial-value: 0deg;
    }

    .element {
      animation: spin 2s infinite linear;
    }

    @keyframes spin {
      to { --rotation: 360deg; }
    }
    ```

    Live inline demo showcasing the effect
  </textarea>
</section>
````

### Notes Section

Each CSS motion API slide should include:

- Clear explanation of the API and its motion capabilities
- Browser compatibility/Baseline status
- Practical use cases for choreography
- Link to MDN documentation or specification
- Performance considerations

## Build and Development

### Scripts

- **Start development server**: `pnpm start`
  - Runs Parcel dev server on port 6001
  - Watch mode enabled
  - Auto-clears cache before starting
- **Build for production**: `pnpm build`
  - Creates optimized build in `dist/`
  - Auto-commits and pushes changes
  - Sets public URL to `./` for GitHub Pages

- **Clear cache**: `pnpm run clear`
  - Removes `.parcel-cache` and `dist/` directories

### Terminal Working Directory

- Always run commands from the `kinetic-css` project root
- Do not pass absolute paths or use `-C /absolute/path` flags
- Prefer relative paths and project scripts (e.g., `pnpm run format`, `pnpm lint`)

### Release Management

- **Major release**: `pnpm run rel:major`
- **Minor release**: `pnpm run rel:minor`
- **Patch release**: `pnpm run rel:patch`

### Code Formatting

- **Format Prettier files**: `pnpm run format:prettier` (HTML, CSS, MD, JSON, YAML)
- **Format Biome files**: `pnpm run format:biome` (JS, TS)
- **Format all**: `pnpm run format`
- **Lint**: `pnpm run lint`

## Dependencies

### Production

- `reveal.js`: Presentation framework
- `@pixu-talks/core`: Core presentation utilities (handles reveal.js initialization)
- `@pixu-talks/fonts`: Font library
- `@pixu-talks/theme`: Theme library

### Development

- `parcel`: Module bundler and dev server
- `posthtml` + `posthtml-include`: HTML composition system
- `@biomejs/biome`: Code formatter and linter
- `lightningcss`: CSS parser and minifier
- `@parcel/transformer-sass`: Sass transformer

## Code Quality

### Formatting

- **Prettier** for HTML, CSS, JSON, YAML, and Markdown
- **Biome** for JavaScript and TypeScript
- **Mandatory**: Format EVERY file after creation or modification

### Best Practices

1. **Accessibility**: Every slide and demo must be accessible
   - Proper ARIA labels where needed
   - Keyboard navigation support
   - Reduced motion preferences respected

2. **Performance**:
   - Animations optimized for 60fps
   - Use `will-change` sparingly
   - Prefer `transform` and `opacity` for animations
   - Monitor paint and composite layers

3. **Browser Support**:
   - Test on Chrome, Firefox, Safari, Edge
   - Use `@supports` for experimental features
   - Provide graceful degradation

4. **Code Organization**:
   - Keep CSS motion code self-contained
   - Use CSS custom properties for animation parameters
   - Comment complex animation choreography

## Reference Sources

- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)
- [MDN CSS Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- [Baseline](https://web.dev/baseline) - API support standard
- [CSS Working Group Drafts](https://drafts.csswg.org/) - Latest specifications
- [Can I Use](https://caniuse.com) - Browser support matrix

## Tone of Voice

- Enthusiastic and visionary about CSS capabilities
- Technical but accessible to intermediate CSS developers
- Celebrate the power shift from JavaScript to CSS
- Use "before and after" comparisons sparingly
- Emphasize that "the future is now" for CSS motion
- Focus on practical, jaw-dropping demonstrations

## Project-Specific Guidelines

1. **CSS-First Philosophy**: Avoid JavaScript for motion unless absolutely impossible with CSS
2. **Live Demos**: Every CSS API must have a working, visible demonstration
3. **Cutting-Edge Focus**: Prioritize newest CSS motion APIs even if browser support is limited
4. **Performance Matters**: All animations must run smoothly at 60fps
5. **Visual Impact**: Demos should evoke "wow" reactions and showcase CSS power

## Files to Create/Modify

When adding new slides:

1. Create file in appropriate folder under `src/slides/topics/`
2. Use naming convention: `_api-name.html` (with underscore prefix)
3. Include in parent section's HTML file using `<include src="..."></include>`
4. Create per-slide assets:

- CSS: `src/styles/_api-name.css`
- JS: `src/scripts/_api-name.js`

5. Reference assets from the slide HTML:

- `<link rel="stylesheet" href="./styles/_api-name.css" />`
- `<script type="module" src="./scripts/_api-name.js"></script>`

6. Test in dev server with `pnpm start`
7. Format with `pnpm run format`

## Deployment

- Automatic deployment to GitHub Pages via GitHub Actions
- Workflow file: `.github/workflows/static.yml`
- Triggers on commits with message pattern: `rel(x.x.x)`
- Builds from `dist/` directory
- Public URL: https://pixu1980.github.io/kinetic-css/

## Best Practices

1. **File editing**: NEVER use shell commands like `sed`, `perl`, `awk` to edit files. Always use the dedicated file editing tools (`replace_string_in_file`, `create_file`).
2. **Terminal commands**: NEVER use commands like `cat`, `wc`, `ps`, `grep`, `head`, `tail`, `find` to read or analyze files. Always use the dedicated file reading tools (`read_file`, `list_dir`, `file_search`, `grep_search`, `semantic_search`).
3. **Path conventions**: Terminal commands must ALWAYS use relative paths from the project root. NEVER use absolute paths like `/Users/username/Projects/talks/`. Use `.` for current directory and relative paths like `src/slides/`.
4. **Code formatting**: Every file created or modified MUST be formatted with the appropriate formatter after creation or modification to maintain code consistency.

## Additional Notes

- The presentation uses reveal.js with standard navigation and keyboard shortcuts
- Slides are modular but should follow a progressive narrative arc
- Balance technical depth with visual spectacle
- Prioritize APIs that best showcase "CSS that moves, thinks, and breathes"
- The finale should leave the audience amazed at modern CSS capabilities
