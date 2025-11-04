# Roadmap - Kinetic CSS Talk

## Project Status: 🚧 In Development

**Current Version:** 0.0.1  
**Target Event:** Bonanni a Tutti 2026  
**Target Completion:** TBD

---

## Overview

This roadmap tracks the development of the "Kinetic CSS: a deep dive into modern Motion APIs" talk presentation. The talk demonstrates how CSS has evolved into a complete motion system without requiring JavaScript.

---

## Progress Summary

### Overall Completion: ~5%

- ✅ Project Setup (100%)
- 🚧 Introduction Section (30%)
- ⏳ Foundation APIs (0%) - 8 slides
- ⏳ Reactive Motion (0%) - 8 slides
- ⏳ Cinematic CSS (0%) - 12 slides
- ⏳ Dynamic Counting (0%) - 6 slides
- ⏳ Advanced Choreography (0%) - 10 slides
- ⏳ Future & Wrap-up (10%) - 3 slides

**Total Slides:** 50 (increased from 45)

---

## Section 1: Introduction (Slides 1-3)

**Status:** 🚧 In Progress (30%)

| Slide             | File                                | Status      | Notes                            |
| ----------------- | ----------------------------------- | ----------- | -------------------------------- |
| 1. Title Slide    | `src/slides/intro/_main-topic.html` | ✅ Complete | Needs kinetic animation on title |
| 2. Speaker Intro  | `src/slides/intro/_pixu.html`       | ✅ Complete | Ready                            |
| 3. Paradigm Shift | `src/slides/intro/_doodle.html`     | ✅ Complete | Needs before/after demo          |

**Next Steps:**

- Add kinetic CSS animation to title slide
- Create before/after comparison demo for slide 3

---

## Section 2: Foundation APIs (Slides 4-11)

**Status:** ⏳ Not Started (0%)

| Slide                   | File                                          | Status   | Notes                         |
| ----------------------- | --------------------------------------------- | -------- | ----------------------------- |
| 4. What is Kinetic CSS? | `src/slides/summary/_topics.html`             | ⏳ To Do | Define core philosophy        |
| 5. @property            | `src/slides/topics/_property.html`            | ⏳ To Do | Create gradient rotation demo |
| 6. rotate               | `src/slides/topics/_transform-rotate.html`    | ⏳ To Do | Individual transform demo     |
| 7. translate            | `src/slides/topics/_transform-translate.html` | ⏳ To Do | Movement animation            |
| 8. scale                | `src/slides/topics/_transform-scale.html`     | ⏳ To Do | Scaling demo                  |
| 9. Typed Values         | `src/slides/topics/_typed-values.html`        | ⏳ To Do | calc() examples               |
| 10. Trig Functions      | `src/slides/topics/_trig-functions.html`      | ⏳ To Do | Circular motion demo          |
| 11. progress()          | `src/slides/topics/_progress-function.html`   | ⏳ To Do | Declarative mapping demo      |

**Next Steps:**

- Start with @property slide and demo
- Build foundation transform slides
- Create trigonometry visualization
- Add progress() function examples

---

## Section 3: Reactive and Contextual Motion (Slides 12-19)

**Status:** ⏳ Not Started (0%)

| Slide                  | File                                         | Status   | Notes                            |
| ---------------------- | -------------------------------------------- | -------- | -------------------------------- |
| 12. @function          | `src/slides/topics/_function.html`           | ⏳ To Do | Custom function example          |
| 13. if() Logic         | `src/slides/topics/_if-function.html`        | ⏳ To Do | Conditional demo                 |
| 14. Reactive Math      | `src/slides/topics/_reactive-math.html`      | ⏳ To Do | Combined example with progress() |
| 15. @container Size    | `src/slides/topics/_container-size.html`     | ⏳ To Do | Size query demo                  |
| 16. @container Style   | `src/slides/topics/_container-style.html`    | ⏳ To Do | Style query demo                 |
| 17. @scope             | `src/slides/topics/_scope.html`              | ⏳ To Do | Scoped animation                 |
| 18. Anchor Positioning | `src/slides/topics/_anchor-positioning.html` | ⏳ To Do | Tooltip demo                     |
| 19. Anchor Animations  | `src/slides/topics/_anchor-animations.html`  | ⏳ To Do | Animated anchors                 |

**Next Steps:**

- Research @function browser support
- Create container query demos
- Build anchor positioning examples

---

## Section 4: Cinematic CSS (Slides 20-31)

**Status:** ⏳ Not Started (0%)

| Slide                      | File                                                  | Status   | Notes                                 |
| -------------------------- | ----------------------------------------------------- | -------- | ------------------------------------- |
| 20. @starting-style        | `src/slides/topics/_starting-style.html`              | ⏳ To Do | Enter animation + transition-behavior |
| 21. Complex Sequences      | `src/slides/topics/_starting-style-advanced.html`     | ⏳ To Do | Staggered reveals                     |
| 22. @view-transition       | `src/slides/topics/_view-transition.html`             | ⏳ To Do | State morphing (Baseline Oct 2025)    |
| 23. Named Transitions      | `src/slides/topics/_view-transition-named.html`       | ⏳ To Do | Element targeting + classes           |
| 24. Scroll Basics          | `src/slides/topics/_scroll-animations.html`           | ⏳ To Do | scroll-timeline demo                  |
| 25. View Progress          | `src/slides/topics/_view-progress.html`               | ⏳ To Do | view-timeline + animation-range       |
| 26. Timeline Scope         | `src/slides/topics/_scroll-timeline.html`             | ⏳ To Do | timeline-scope demo                   |
| 27. CSS Scroll Snap        | `src/slides/topics/_scroll-snap.html`                 | ⏳ To Do | scroll-snap-type demo                 |
| 28. Horizontal Scroll      | `src/slides/topics/_horizontal-scroll.html`           | ⏳ To Do | Carousel with scroll-snap             |
| 29. Combined Systems       | `src/slides/topics/_combined-transitions-scroll.html` | ⏳ To Do | Transitions + scroll + snap           |
| 30. prefers-reduced-motion | `src/slides/topics/_prefers-reduced-motion.html`      | ⏳ To Do | Accessibility demo                    |
| 31. Performance            | `src/slides/topics/_performance.html`                 | ⏳ To Do | Optimization tips (60fps)             |

**Next Steps:**

- Build @starting-style examples with transition-behavior
- Create scroll-driven animation demos with named timelines
- Add scroll-snap examples
- Develop view transition examples with classes
- Create prefers-reduced-motion accessibility slide

---

## Section 5: Dynamic Counting and Synchronization (Slides 32-37)

**Status:** ⏳ Not Started (0%)

| Slide                 | File                                        | Status   | Notes                                |
| --------------------- | ------------------------------------------- | -------- | ------------------------------------ |
| 32. sibling-index()   | `src/slides/topics/_sibling-index.html`     | ⏳ To Do | Position-based timing (experimental) |
| 33. sibling-count()   | `src/slides/topics/_sibling-count.html`     | ⏳ To Do | Dynamic distribution (experimental)  |
| 34. Timeline Sync     | `src/slides/topics/_timeline-sync.html`     | ⏳ To Do | Orchestration                        |
| 35. Staggered         | `src/slides/topics/_stagger.html`           | ⏳ To Do | Progressive reveals                  |
| 36. Grid Animations   | `src/slides/topics/_grid-animations.html`   | ⏳ To Do | Grid motion                          |
| 37. Responsive Timing | `src/slides/topics/_responsive-timing.html` | ⏳ To Do | Adaptive duration                    |

**Next Steps:**

- Check sibling-\* function browser support
- Create counting examples
- Build grid animation demos

---

## Section 6: Advanced Choreography (Slides 38-47)

**Status:** ⏳ Not Started (0%)

| Slide                     | File                                            | Status   | Notes                       |
| ------------------------- | ----------------------------------------------- | -------- | --------------------------- |
| 38. CSS Motion Path       | `src/slides/topics/_motion-path.html`           | ⏳ To Do | offset-path demo            |
| 39. animation-composition | `src/slides/topics/_animation-composition.html` | ⏳ To Do | replace/add/accumulate demo |
| 40. Complex Sequences     | `src/slides/topics/_complex-sequences.html`     | ⏳ To Do | Full scene                  |
| 41. State Machines        | `src/slides/topics/_state-machines.html`        | ⏳ To Do | Toggle states               |
| 42. 3D Transforms         | `src/slides/topics/_3d-transforms.html`         | ⏳ To Do | Card flip with perspective  |
| 43. Morphing Shapes       | `src/slides/topics/_morphing.html`              | ⏳ To Do | clip-path animation         |
| 44. Color Animations      | `src/slides/topics/_color-animations.html`      | ⏳ To Do | oklch/lab color space demos |
| 45. Filter Animations     | `src/slides/topics/_filter-animations.html`     | ⏳ To Do | backdrop-filter demo        |
| 46. Example: Navigation   | `src/slides/topics/_example-navigation.html`    | ⏳ To Do | Real-world nav              |
| 47. Example: Hero         | `src/slides/topics/_example-hero.html`          | ⏳ To Do | Landing page with all APIs  |

**Next Steps:**

- Plan Motion Path examples (offset-path, offset-distance)
- Create animation-composition demos
- Plan complex demo sequences
- Research color space interpolation (oklch, lab)
- Build production examples

---

## Section 7: Future and Wrap-up (Slides 48-50)

**Status:** 🚧 In Progress (10%)

| Slide               | File                                         | Status      | Notes                                    |
| ------------------- | -------------------------------------------- | ----------- | ---------------------------------------- |
| 48. Future Features | `src/slides/outro/_wrap-up.html`             | ⏳ To Do    | Pointer-driven Animations, MPA VTs, etc. |
| 49. Resources       | `src/slides/outro/_links.html`               | ✅ Complete | Needs content update                     |
| 50. Thank You / Q&A | `src/slides/outro/_thanks.html`, `_taf.html` | ✅ Complete | Ready                                    |

**Next Steps:**

- Research upcoming CSS motion features (Pointer-driven, MPA View Transitions)
- Compile resource links (CSS WG drafts, MDN, web.dev)
- Finalize Q&A slide

---

## Technical Infrastructure

### Completed ✅

- [x] Project setup with Parcel
- [x] PostHTML configuration for slide composition
- [x] Prettier and Biome formatting setup
- [x] GitHub Actions deployment workflow
- [x] Base slide structure (intro, summary, topics, outro)
- [x] Package dependencies (@pixu-talks/\*)

### In Progress 🚧

- [ ] Custom CSS animations for presentation theme
- [ ] Performance monitoring setup
- [ ] Browser compatibility testing workflow

### To Do ⏳

- [ ] Demo code syntax highlighting
- [ ] Accessibility testing
- [ ] Mobile responsive testing
- [ ] Offline functionality
- [ ] Performance benchmarks for all demos

---

## Documentation

### Completed ✅

- [x] `.github/copilot-instructions.md` - AI agent guidelines
- [x] `.github/COPILOT_RULES.md` - Strict project rules
- [x] `.github/TALK_STRUCTURE.md` - Detailed slide breakdown
- [x] `.github/ROADMAP.md` - This file
- [x] `README.md` - Basic project info

### To Do ⏳

- [ ] CONTRIBUTING.md - Contribution guidelines
- [ ] API reference for custom CSS patterns
- [ ] Performance optimization guide
- [ ] Browser support matrix

---

## Demo Development Priority

### High Priority (Core APIs) 🔴

1. @property with gradient animation
2. Individual transforms (rotate, translate, scale)
3. Scroll-driven animations (basic) with scroll-timeline
4. CSS Scroll Snap (scroll-snap-type, scroll-snap-align)
5. @starting-style enter animations with transition-behavior
6. @view-transition state changes (Baseline Oct 2025)

### Medium Priority (Contextual) 🟡

7. @container size and style queries
8. @scope for modular systems
9. Anchor positioning
10. Trigonometric functions (sin, cos, tan, atan2, hypot)
11. if() conditional logic
12. progress() function for declarative mapping
13. @media (prefers-reduced-motion) for accessibility

### Lower Priority (Advanced) 🟢

14. sibling-index() and sibling-count() (experimental)
15. CSS Motion Path (offset-path, offset-distance)
16. animation-composition (replace/add/accumulate)
17. 3D transforms
18. Color space animations (oklch, lab)
19. Complex choreography
20. Real-world examples

---

## Browser Support Target

### Primary Browsers (Must Work)

- Chrome/Edge 120+
- Firefox 120+
- Safari 17+

### Fallback Strategy

- Graceful degradation for older browsers
- `@supports` for feature detection
- Alternative animations for unsupported features
- Clear browser requirement messaging

---

## Performance Targets

- **60fps** for all animations
- **< 3s** initial page load
- **< 100ms** interaction response
- **< 50MB** total asset size
- **Lighthouse score > 90** for performance

---

## Timeline Estimates

### Phase 1: Foundation (Weeks 1-2)

- Complete Section 2 (Foundation APIs)
- Set up demo infrastructure
- Browser testing setup

### Phase 2: Core Motion (Weeks 3-4)

- Complete Section 3 (Reactive Motion)
- Complete Section 4 (Cinematic CSS)
- Performance optimization

### Phase 3: Advanced (Weeks 5-6)

- Complete Section 5 (Dynamic Counting)
- Complete Section 6 (Advanced Choreography)
- Real-world examples

### Phase 4: Polish (Week 7)

- Complete Section 7 (Future)
- Final testing and refinement
- Documentation completion

### Phase 5: Rehearsal (Week 8)

- Practice presentation timing
- Gather feedback
- Final adjustments

---

## Known Issues

### Critical 🔴

- None currently

### Medium 🟡

- Title slide needs kinetic animation
- Slide 3 needs before/after demo
- Browser support for @function uncertain (experimental)
- Browser support for sibling-index()/sibling-count() limited (experimental)
- Pointer-driven Animations still in Editor's Draft

### Low 🟢

- None currently

---

## Dependencies

### Core Libraries

- `reveal.js` 5.2.1
- `@pixu-talks/core` 0.3.5
- `@pixu-talks/fonts` 0.3.5
- `@pixu-talks/theme` 0.3.5

### Dev Tools

- `parcel` 2.16.0
- `@biomejs/biome` 2.3.3
- `posthtml` + `posthtml-include`
- `lightningcss` 1.30.2

---

## Resources

### Documentation

- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)
- [MDN CSS Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- [CSS Working Group Drafts](https://drafts.csswg.org/)
- [Baseline Status](https://web.dev/baseline)
- [CSS Values and Units Module Level 5](https://www.w3.org/TR/css-values-5/) - progress() function

### Inspiration

- [web.dev CSS articles](https://web.dev/tags/css/)
- [CSS-Tricks](https://css-tricks.com/)
- [Ahmad Shadeed's blog](https://ishadeed.com/)
- [Chrome for Developers - View Transitions 2025](https://developer.chrome.com/blog/view-transitions-in-2025)

### Tools

- [Can I Use](https://caniuse.com)
- [MDN Browser Compatibility Data](https://github.com/mdn/browser-compat-data)

---

## Contributing

See `.github/COPILOT_RULES.md` for strict development rules and `.github/copilot-instructions.md` for detailed guidelines.

---

## Questions / Decisions Needed

1. Should we include polyfills for experimental features or show limitations honestly?
   - **Decision:** Show limitations honestly, use @supports
2. What's the minimum browser version for the presentation?
   - **Decision:** Chrome 120+, Firefox 120+, Safari 17+
3. Should demos work offline?
   - **Decision:** Yes, all demos must be self-contained
4. Include speaker notes in slides?
   - **Decision:** TBD

---

## Notes

- All demos MUST be pure CSS (no JavaScript for motion)
- Every API needs a live, working demonstration
- Performance is critical - all animations must run at 60fps
- Accessibility is non-negotiable (respect prefers-reduced-motion)
- The talk should inspire and amaze while being technically accurate
- New APIs added: scroll-snap, Motion Path, progress(), animation-composition, prefers-reduced-motion
- Total slides increased from 45 to 50

---

**Last Updated:** 2025-11-04  
**Next Review:** TBD
