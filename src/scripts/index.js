import '@pixu-talks/core';

import './baseline-status/baseline-status.js';

import './_doodle.js';

import { initSlideHooks } from './_slide-hooks.js';
import { initTiltLayeredCard } from './_07-tilt-layered-card.js';

/**
 * Initialize all motion JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initSlideHooks();
  initTiltLayeredCard();
});
