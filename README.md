# kinetic-css

Kinetic CSS slides for the Bonanni a Tutti 2026

Check the slides here

[Kinetic CSS](https://pixu1980.github.io/kinetic-css/)

## Code splitting

This deck keeps motion code small and local.

### JavaScript

- `src/scripts/index.js`
  - Entry point. Loads reveal core, baseline status, doodle, and motion.
- `src/scripts/_motion.js`
  - Thin orchestrator that initializes motion modules on DOMContentLoaded.
- `src/scripts/_06-curtain-call.js`
  - Curtain Call local View Transitions trigger.
  - DOM contract: `#curtain-call-stage`.
- `src/scripts/motion/_tilt-layered-card.js`
  - Pointer tracking for the Tilt Layered Card.
  - DOM contract: `.card-container`.
- `src/scripts/motion/_slide-hooks.js`
  - Minimal Reveal hook for accessibility.
  - DOM contract: `.motion-title` inside the active slide.

### CSS

Styles are split by topic under `src/styles/`.

- `src/styles/_00-tilt-layered-card.css`
- `src/styles/_01-starting-style.css`
- `src/styles/_02-sibling-functions.css`
- `src/styles/_03-gaussian-curve.css`
- `src/styles/_04-scroll-view-appearing.css`
- `src/styles/_05-trigonometric-positioning.css`
- `src/styles/_06-architecture.css`
- `src/styles/_07-performance.css`
- `src/styles/_08-patterns.css`
- `src/styles/_09-curtain-call.css`
