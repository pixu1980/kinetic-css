# Talk Structure - Kinetic CSS

## Talk Title

**Kinetic CSS: a deep dive into modern Motion APIs**

## Event

Bonanni a Tutti 2026

## Duration

45-60 minutes

## Abstract

"What if, in the future of web motion, JavaScript were no longer needed? Spoiler: that future is today. Over the last few years, CSS has received a legendary power-up. It can now animate, react, and choreograph entire scenes without touching a single script. In this talk, we'll explore how to bend reality using only HTML and CSS, no frameworks, no npm madness, just pure motion expressed through brain bending style.

We'll discover how @property can be used to create truly animatable variables, and how @function together with if() allows logic and reactive math to live directly inside your stylesheets. We'll use @starting-style to craft cinematic enter animations, while combining @view-transition, @scope, and @container to design modular motion systems that adapt to context. All of this will come together through smooth, scroll-driven animations that make the interface feel alive. Along the way, we'll count elements dynamically with sibling-index() and sibling-count() to synchronize timelines, and we'll rely on individual transforms like rotate, translate, scale, and skew, enhanced by anchor positioning, typed values, and trigonometric functions that turn geometry into visual poetry.

It's no longer about decoration, it's about choreography.
This is CSS that moves, thinks, and breathes."

---

## Slide Breakdown (45 slides)

### Section 1: Introduction (Slides 1-3)

#### Slide 1: Title Slide

- **File:** `src/slides/intro/_main-topic.html`
- **Content:** Talk title, speaker name, event name
- **Notes:** Opening slide with kinetic CSS animation on title

#### Slide 2: Speaker Introduction

- **File:** `src/slides/intro/_pixu.html`
- **Content:** Brief bio, background, social links
- **Notes:** Who is presenting and why they care about CSS motion

#### Slide 3: The Paradigm Shift

- **File:** `src/slides/intro/_doodle.html`
- **Content:** "JavaScript is no longer needed for web motion"
- **Demo:** Simple before/after comparison (JS vs CSS)
- **Notes:** Set the stage for the revolutionary nature of modern CSS

---

### Section 2: Foundation APIs (Slides 4-10)

#### Slide 4: What is Kinetic CSS?

- **File:** `src/slides/summary/_topics.html`
- **Content:** Definition and core philosophy
- **Notes:** CSS that moves, thinks, and breathes

#### Slide 5: @property - Animatable Custom Properties

- **File:** `src/slides/topics/_property.html`
- **Content:** Syntax, use cases, browser support
- **Demo:** Animating a custom property (e.g., gradient rotation)
- **Code Example:**
  ```css
  @property --rotation {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }
  ```

#### Slide 6: Individual Transforms - rotate

- **File:** `src/slides/topics/_transform-rotate.html`
- **Content:** Individual transform properties
- **Demo:** Rotating element without transform matrix
- **Code Example:**
  ```css
  .element {
    rotate: 45deg;
  }
  ```

#### Slide 7: Individual Transforms - translate

- **File:** `src/slides/topics/_transform-translate.html`
- **Content:** Translate without transform shorthand
- **Demo:** Moving elements with translate property
- **Code Example:**
  ```css
  .element {
    translate: 100px 50px;
  }
  ```

#### Slide 8: Individual Transforms - scale

- **File:** `src/slides/topics/_transform-scale.html`
- **Content:** Scale as standalone property
- **Demo:** Scaling animation without transform
- **Code Example:**
  ```css
  .element {
    scale: 1.5;
  }
  ```

#### Slide 9: Typed Values and Units

- **File:** `src/slides/topics/_typed-values.html`
- **Content:** CSS typed OM, calc() with units
- **Demo:** Math calculations with typed values
- **Code Example:**
  ```css
  width: calc(100% - 2rem);
  ```

#### Slide 10: Trigonometric Functions

- **File:** `src/slides/topics/_trig-functions.html`
- **Content:** sin(), cos(), tan(), asin(), acos(), atan(), atan2(), hypot()
- **Demo:** Circular motion using trigonometry
- **Code Example:**
  ```css
  translate: calc(cos(var(--angle)) * 100px) calc(sin(var(--angle)) * 100px);
  rotate: atan2(var(--y), var(--x));
  ```

#### Slide 11: progress() Function

- **File:** `src/slides/topics/_progress-function.html`
- **Content:** Values & Units L5 progress() for declarative mapping
- **Demo:** Opacity/scale mapping based on progress between values
- **Code Example:**
  ```css
  opacity: progress(var(--scroll), 0px, 500px);
  scale: calc(1 + progress(var(--value), 0, 100) * 0.5);
  ```

---

### Section 3: Reactive and Contextual Motion (Slides 12-19)

#### Slide 12: @function - Custom Functions in CSS

- **File:** `src/slides/topics/_function.html`
- **Content:** Defining reusable CSS functions
- **Demo:** Custom easing function
- **Code Example:**
  ```css
  @function --ease-out-cubic {
    result: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  ```

#### Slide 13: if() - Conditional Logic

- **File:** `src/slides/topics/_if-function.html`
- **Content:** Ternary operator in CSS (Conditional Values)
- **Demo:** Conditional animations based on state
- **Code Example:**
  ```css
  color: if(var(--dark-mode), white, black);
  background: if(style(--theme: premium), gold, silver);
  ```

#### Slide 14: Reactive Math in CSS

- **File:** `src/slides/topics/_reactive-math.html`
- **Content:** Combining @function, if(), calc(), and progress()
- **Demo:** Responsive animation that adapts to viewport
- **Notes:** Show how CSS can "think" and react

#### Slide 15: @container Queries - Size Queries

- **File:** `src/slides/topics/_container-size.html`
- **Content:** Container-based responsive animations
- **Demo:** Animation that changes based on container size
- **Code Example:**
  ```css
  @container (min-width: 400px) {
    .element {
      scale: 1.5;
    }
  }
  ```

#### Slide 16: @container Queries - Style Queries

- **File:** `src/slides/topics/_container-style.html`
- **Content:** Querying parent styles
- **Demo:** Animation triggered by parent's custom property
- **Code Example:**
  ```css
  @container style(--theme: dark) {
    .element {
      animation: glow 2s infinite;
    }
  }
  ```

#### Slide 17: @scope - Scoped Animations

- **File:** `src/slides/topics/_scope.html`
- **Content:** Containing animation effects to specific subtrees
- **Demo:** Modular animation system with scope boundaries
- **Code Example:**
  ```css
  @scope (.card) to (.card__content) {
    :scope {
      animation: fade-in 0.5s;
    }
  }
  ```

#### Slide 18: Anchor Positioning - Basics

- **File:** `src/slides/topics/_anchor-positioning.html`
- **Content:** Positioning elements relative to anchors
- **Demo:** Tooltip that follows its anchor
- **Code Example:**
  ```css
  .tooltip {
    position: absolute;
    position-anchor: --button;
    top: anchor(bottom);
  }
  ```

#### Slide 19: Anchor Positioning - Animated

- **File:** `src/slides/topics/_anchor-animations.html`
- **Content:** Animating anchored elements
- **Demo:** Smooth transitions between anchor points
- **Notes:** Combining anchor positioning with transforms

---

### Section 4: Cinematic CSS (Slides 20-31)

#### Slide 20: @starting-style - Enter Animations

- **File:** `src/slides/topics/_starting-style.html`
- **Content:** Animating elements from display:none with transition-behavior
- **Demo:** Cinematic reveal animation
- **Code Example:**
  ```css
  @starting-style {
    .element {
      opacity: 0;
      scale: 0;
    }
  }
  .element {
    opacity: 1;
    scale: 1;
    transition: all 0.5s;
    transition-behavior: allow-discrete;
  }
  ```

#### Slide 21: @starting-style - Complex Sequences

- **File:** `src/slides/topics/_starting-style-advanced.html`
- **Content:** Multi-step enter animations
- **Demo:** Staggered reveal with multiple elements
- **Notes:** Choreographing entrance effects

#### Slide 22: @view-transition - Basics

- **File:** `src/slides/topics/_view-transition.html`
- **Content:** Seamless state transitions (Baseline Newly Available Oct 2025)
- **Demo:** Morphing between two states
- **Code Example:**
  ```css
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 0.5s;
  }
  ```

#### Slide 23: @view-transition - Named Transitions

- **File:** `src/slides/topics/_view-transition-named.html`
- **Content:** Targeting specific elements with view-transition-name and view-transition-class
- **Demo:** Independent element transitions with grouped styling
- **Code Example:**
  ```css
  .hero {
    view-transition-name: hero;
    view-transition-class: slide-in;
  }
  ```

#### Slide 24: Scroll-driven Animations - Basics

- **File:** `src/slides/topics/_scroll-animations.html`
- **Content:** Animations triggered by scroll position with scroll-timeline
- **Demo:** Fade in on scroll
- **Code Example:**
  ```css
  .scroller {
    scroll-timeline: --my-scroller;
  }
  .element {
    animation: fade-in linear;
    animation-timeline: --my-scroller;
  }
  ```

#### Slide 25: Scroll-driven Animations - View Progress

- **File:** `src/slides/topics/_view-progress.html`
- **Content:** Animating based on element visibility with view-timeline
- **Demo:** Parallax effect with view()
- **Code Example:**
  ```css
  .element {
    view-timeline: --reveal;
    animation: fade-in linear;
    animation-timeline: --reveal;
    animation-range: entry 0% cover 100%;
  }
  ```

#### Slide 26: Scroll-driven Animations - Timeline Scope

- **File:** `src/slides/topics/_scroll-timeline.html`
- **Content:** timeline-scope to lift named timelines visibility
- **Demo:** Multi-element choreography on scroll across different ancestors
- **Code Example:**
  ```css
  .wrapper {
    timeline-scope: --my-scroller;
  }
  .scroller {
    scroll-timeline: --my-scroller;
  }
  .distant-element {
    animation-timeline: --my-scroller;
  }
  ```

#### Slide 27: CSS Scroll Snap

- **File:** `src/slides/topics/_scroll-snap.html`
- **Content:** scroll-snap-type, scroll-snap-align, scroll-snap-stop
- **Demo:** Smooth section snapping with kinetic scroll
- **Code Example:**
  ```css
  .container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }
  .section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
  ```

#### Slide 28: Scroll-driven Animations - Horizontal

- **File:** `src/slides/topics/_horizontal-scroll.html`
- **Content:** Horizontal scroll animations with scroll-snap
- **Demo:** Carousel effect combining scroll timeline and scroll snap
- **Code Example:**
  ```css
  .carousel {
    scroll-snap-type: x mandatory;
    scroll-timeline: --carousel inline;
  }
  .item {
    animation-timeline: --carousel;
  }
  ```

#### Slide 29: Combining View Transitions + Scroll

- **File:** `src/slides/topics/_combined-transitions-scroll.html`
- **Content:** Merging multiple motion systems
- **Demo:** Smooth page transitions with scroll effects and snap points
- **Notes:** Show how APIs work together

#### Slide 30: @media (prefers-reduced-motion)

- **File:** `src/slides/topics/_prefers-reduced-motion.html`
- **Content:** Respecting user motion preferences for accessibility
- **Demo:** Same animation with/without motion based on preference
- **Code Example:**
  ```css
  .element {
    animation: slide-in 0.5s;
  }
  @media (prefers-reduced-motion: reduce) {
    .element {
      animation: none;
      transition: none;
    }
  }
  ```

#### Slide 31: Performance Optimization

- **File:** `src/slides/topics/_performance.html`
- **Content:** will-change, contain, content-visibility
- **Demo:** Before/after performance comparison (60fps target)
- **Notes:** Making kinetic CSS production-ready

---

### Section 5: Dynamic Counting and Synchronization (Slides 32-37)

#### Slide 32: sibling-index() - Element Position

- **File:** `src/slides/topics/_sibling-index.html`
- **Content:** Getting element's position in parent (experimental)
- **Demo:** Staggered animation based on position
- **Code Example:**
  ```css
  .item {
    animation-delay: calc(sibling-index() * 0.1s);
  }
  ```

#### Slide 33: sibling-count() - Dynamic Calculations

- **File:** `src/slides/topics/_sibling-count.html`
- **Content:** Counting siblings for calculations (experimental)
- **Demo:** Distribute elements evenly with dynamic duration
- **Code Example:**
  ```css
  .item {
    flex-basis: calc(100% / sibling-count());
    animation-duration: calc(1s / sibling-count());
  }
  ```

#### Slide 34: Timeline Synchronization

- **File:** `src/slides/topics/_timeline-sync.html`
- **Content:** Coordinating multiple animations
- **Demo:** Orchestra of synchronized elements
- **Notes:** Using sibling functions for timing

#### Slide 35: Staggered Animations - No JavaScript

- **File:** `src/slides/topics/_stagger.html`
- **Content:** Progressive reveals using sibling functions
- **Demo:** List items appearing in sequence
- **Notes:** What used to require JavaScript

#### Slide 36: Dynamic Grid Animations

- **File:** `src/slides/topics/_grid-animations.html`
- **Content:** Grid-based motion systems
- **Demo:** Animating grid items based on position
- **Notes:** Combining CSS Grid with motion

#### Slide 37: Responsive Animation Timing

- **File:** `src/slides/topics/_responsive-timing.html`
- **Content:** Adapting animation duration to context
- **Demo:** Faster animations on smaller screens
- **Notes:** Using container queries for timing

---

### Section 6: Advanced Choreography (Slides 38-47)

#### Slide 40: Complex Animation Sequences

- **File:** `src/slides/topics/_complex-sequences.html`
- **Content:** Multi-step animation choreography
- **Demo:** Full scene animation (multiple elements, timed)
- **Notes:** Bringing everything together

#### Slide 41: State Machines in CSS

#### Slide 41: State Machines in CSS

- **File:** `src/slides/topics/_state-machines.html`
- **Content:** Managing states without JavaScript
- **Demo:** Toggle-based animation states
- **Notes:** CSS can handle complex logic

#### Slide 42: 3D Transforms and Perspective

- **File:** `src/slides/topics/_3d-transforms.html`
- **Content:** Individual 3D transform properties
- **Demo:** Card flip with perspective
- **Code Example:**
  ```css
  .card {
    rotate: y 180deg;
    perspective: 1000px;
  }
  ```

#### Slide 43: Morphing Shapes

- **File:** `src/slides/topics/_morphing.html`
- **Content:** Shape transitions with clip-path
- **Demo:** Circle to square transformation
- **Notes:** Geometric choreography

#### Slide 44: Color Animations

- **File:** `src/slides/topics/_color-animations.html`
- **Content:** Animating color spaces (oklch, lab)
- **Demo:** Smooth color transitions with modern interpolation
- **Notes:** Modern color interpolation

#### Slide 45: Filter Animations

- **File:** `src/slides/topics/_filter-animations.html`
- **Content:** Animating blur, hue-rotate, backdrop-filter, etc.
- **Demo:** Dynamic filter effects
- **Notes:** Visual effects without images

#### Slide 46: Real World Example - Navigation

- **File:** `src/slides/topics/_example-navigation.html`
- **Content:** Complete navigation with kinetic CSS
- **Demo:** Menu with all techniques combined
- **Notes:** Production-ready example

#### Slide 47: Real World Example - Hero Section

- **File:** `src/slides/topics/_example-hero.html`
- **Content:** Animated hero with parallax, scroll, transitions, snap
- **Demo:** Full landing page experience
- **Notes:** Show professional implementation

---

### Section 7: Future and Wrap-up (Slides 48-50)

#### Slide 48: Future of CSS Motion

- **File:** `src/slides/outro/_wrap-up.html`
- **Content:** Upcoming features: Pointer-driven Animations, advanced @function, MPA view transitions
- **Notes:** What's next for kinetic CSS (2026+)

#### Slide 49: Resources and Learning

- **File:** `src/slides/outro/_links.html`
- **Content:** Links to specs, MDN, demos, tools, CSS Working Group Drafts
- **Notes:** Where to continue learning

#### Slide 50: Thank You / Q&A

- **File:** `src/slides/outro/_thanks.html` and `src/slides/outro/_taf.html`
- **Content:** Contact info, social links, questions
- **Notes:** Closing slide with call to action

---

## Timing Guide

- **Section 1 (Intro):** 3-5 minutes
- **Section 2 (Foundation):** 12-15 minutes (11 slides)
- **Section 3 (Reactive):** 8-10 minutes (8 slides)
- **Section 4 (Cinematic):** 14-18 minutes (12 slides)
- **Section 5 (Counting):** 6-8 minutes (6 slides)
- **Section 6 (Advanced):** 10-12 minutes (10 slides)
- **Section 7 (Future):** 3-5 minutes (3 slides)
- **Q&A:** 5-10 minutes

**Total:** 61-83 minutes (flexible based on audience engagement and depth)

---

## Key Takeaways

1. CSS is now a complete motion system
2. JavaScript is optional for most animations
3. Modern CSS APIs are powerful and composable
4. Performance is built-in with CSS animations
5. The future of web motion is declarative

---

## Demo Requirements

- All demos must run in modern browsers (Chrome, Firefox, Safari, Edge)
- Each demo should be self-contained and work offline
- Fallbacks for browsers without full support
- Performance monitoring for all animations (60fps target)
- Accessibility considerations (respect prefers-reduced-motion)

---

## File Organization Summary

```
src/slides/
├── intro/
│   ├── intro.html (includes all intro slides)
│   ├── _doodle.html
│   ├── _pixu.html
│   └── _main-topic.html
├── summary/
│   ├── summary.html (includes all summary slides)
│   ├── _topics.html
│   └── _dive-in.html
├── topics/
│   ├── topics.html (includes all API slides)
│   ├── _property.html
│   ├── _transform-rotate.html
│   ├── _transform-translate.html
│   ├── _transform-scale.html
│   ├── _typed-values.html
│   ├── _trig-functions.html
│   ├── _progress-function.html
│   ├── _function.html
│   ├── _if-function.html
│   ├── _reactive-math.html
│   ├── _container-size.html
│   ├── _container-style.html
│   ├── _scope.html
│   ├── _anchor-positioning.html
│   ├── _anchor-animations.html
│   ├── _starting-style.html
│   ├── _starting-style-advanced.html
│   ├── _view-transition.html
│   ├── _view-transition-named.html
│   ├── _scroll-animations.html
│   ├── _view-progress.html
│   ├── _scroll-timeline.html
│   ├── _scroll-snap.html
│   ├── _horizontal-scroll.html
│   ├── _combined-transitions-scroll.html
│   ├── _prefers-reduced-motion.html
│   ├── _performance.html
│   ├── _sibling-index.html
│   ├── _sibling-count.html
│   ├── _timeline-sync.html
│   ├── _stagger.html
│   ├── _grid-animations.html
│   ├── _responsive-timing.html
│   ├── _motion-path.html
│   ├── _animation-composition.html
│   ├── _complex-sequences.html
│   ├── _state-machines.html
│   ├── _3d-transforms.html
│   ├── _morphing.html
│   ├── _color-animations.html
│   ├── _filter-animations.html
│   ├── _example-navigation.html
│   └── _example-hero.html
└── outro/
    ├── outro.html (includes all outro slides)
    ├── _wrap-up.html
    ├── _thanks.html
    ├── _links.html
    └── _taf.html
```
