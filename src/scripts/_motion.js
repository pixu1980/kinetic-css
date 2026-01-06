/**
 * Motion JS Glue
 * Handles View Transitions API, popover toggles, and reveal.js slide hooks.
 */

/**
 * Initialize View Transitions demo
 * Transitions between a grid state and a detail state.
 */
const initViewTransitions = () => {
	const container = document.querySelector("#vt-container");
	if (!container) {
		return;
	}

	const grid = container.querySelector("#vt-grid");
	const detail = container.querySelector("#vt-detail");
	const detailImg = container.querySelector("#vt-detail-img");
	const detailName = container.querySelector("#vt-detail-name");
	const backBtn = container.querySelector("#vt-back-btn");

	if (!grid || !detail || !detailImg || !detailName || !backBtn) {
		return;
	}

	const openDetail = (button) => {
		const img = button.querySelector("img");
		if (!img) {
			return;
		}

		detailImg.src = img.currentSrc || img.src;
		detailImg.alt = img.alt;
		detailName.textContent = img.alt;

		grid.hidden = true;
		detail.hidden = false;
		detail.classList.add("active");
	};

	const closeDetail = () => {
		detail.hidden = true;
		detail.classList.remove("active");
		grid.hidden = false;
	};

	const withViewTransition = (update) => {
		if (!document.startViewTransition) {
			update();
			return;
		}

		document.startViewTransition(() => {
			update();
		});
	};

	container.querySelectorAll(".logo-vt-btn").forEach((button) => {
		button.addEventListener("click", () => {
			withViewTransition(() => openDetail(button));
		});
	});

	backBtn.addEventListener("click", () => {
		withViewTransition(() => closeDetail());
	});
};

/**
 * Initialize 3D card interactions
 * Adds keyboard support for 3D cards
 */
const initDeepCards = () => {
	const deepCards = document.querySelectorAll(".deep-card");

	deepCards.forEach((card) => {
		card.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				card.classList.toggle("deep-card-active");
			}
		});

		card.addEventListener("blur", () => {
			card.classList.remove("deep-card-active");
		});
	});
};

/**
 * Initialize discrete transition panel toggles
 * Toggles the open state for discrete panels
 */
const initDiscretePanels = () => {
	const toggles = document.querySelectorAll("[data-discrete-toggle]");

	toggles.forEach((toggle) => {
		toggle.addEventListener("click", () => {
			const targetId = toggle.dataset.discreteToggle;
			const panel = document.querySelector(`#${targetId}`);

			if (panel) {
				panel.classList.toggle("open");
			}
		});
	});
};

/**
 * Initialize trigonometry animation
 * Uses @property to animate --t from 0 to 1 continuously
 */
const initTrigAnimation = () => {
	const trigLogos = document.querySelectorAll(".logo-trig");

	if (trigLogos.length === 0) {
		return;
	}

	// Add animation to the parent or use CSS animation
	// The CSS handles this via @property --t animation
};

/**
 * Finale proximity scaling
 * Updates --proximity on each logo based on pointer distance.
 */
const initFinaleProximity = () => {
	const container = document.querySelector("#finale-proximity");
	if (!container) {
		return;
	}

	const logos = Array.from(container.querySelectorAll(".logo-finale"));
	if (logos.length === 0) {
		return;
	}

	let lastPointerEvent = null;
	let rafId = 0;

	const reset = () => {
		lastPointerEvent = null;
		if (rafId) {
			cancelAnimationFrame(rafId);
			rafId = 0;
		}
		logos.forEach((logo) => {
			logo.style.setProperty("--proximity", "0");
		});
	};

	const update = () => {
		rafId = 0;
		if (!lastPointerEvent) {
			return;
		}

		const containerRect = container.getBoundingClientRect();
		const radius = Math.max(
			1,
			Math.min(containerRect.width, containerRect.height) * 0.6,
		);

		const px = lastPointerEvent.clientX;
		const py = lastPointerEvent.clientY;

		logos.forEach((logo) => {
			const rect = logo.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;
			const dist = Math.hypot(px - cx, py - cy);
			const proximity = 1 - Math.min(dist / radius, 1);
			const eased = proximity * proximity;
			logo.style.setProperty("--proximity", eased.toFixed(3));
		});
	};

	const onPointerMove = (event) => {
		lastPointerEvent = event;
		if (rafId) {
			return;
		}
		rafId = requestAnimationFrame(update);
	};

	container.addEventListener("pointermove", onPointerMove, { passive: true });
	container.addEventListener("pointerdown", onPointerMove, { passive: true });
	container.addEventListener("pointerleave", reset);
};

/**
 * Reveal.js slide change hooks
 * Triggers animations when slides become visible
 */
const initSlideHooks = () => {
	if (typeof Reveal === "undefined") {
		return;
	}

	Reveal.on("slidechanged", (event) => {
		const currentSlide = event.currentSlide;
		const topic = currentSlide?.dataset?.topic;

		// Reset and trigger animations based on topic
		switch (topic) {
			case "hero":
				// Hero logo enter animation triggers via @starting-style
				break;
			case "sponsors":
				// Staggered entrance triggers via animation-delay
				break;
			case "finale":
				// Finale proximity scaling is pointer-driven
				break;
			default:
				break;
		}

		// Announce slide change for screen readers
		const title = currentSlide?.querySelector(".motion-title");
		if (title) {
			title.setAttribute("aria-live", "polite");
		}
	});
};

/**
 * Initialize all motion JavaScript
 */
const initMotion = () => {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", () => {
			initViewTransitions();
			initDeepCards();
			initDiscretePanels();
			initTrigAnimation();
			initFinaleProximity();
			initSlideHooks();
		});
		return;
	}

	initViewTransitions();
	initDeepCards();
	initDiscretePanels();
	initTrigAnimation();
	initFinaleProximity();
	initSlideHooks();
};

initMotion();
