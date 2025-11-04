// Kinetic CSS doodle - split JS file
// Motion remains CSS-first. JS is minimal: optionally expose hooks for future interactivity.
// For now, this file is intentionally minimal to respect the CSS-only motion philosophy.

// Minimal non-motion JS: capture mouse position to feed CSS variables for proximity sizing
const stage = document.querySelector(".stage");
if (stage) {
	const update = (x, y) => {
		const rect = stage.getBoundingClientRect();
		const px = ((x - rect.left) / rect.width) * 100;
		const py = ((y - rect.top) / rect.height) * 100;
		stage.style.setProperty("--mx", String(px.toFixed(2)));
		stage.style.setProperty("--my", String(py.toFixed(2)));
	};
	// Mouse
	stage.addEventListener("mousemove", (e) => update(e.clientX, e.clientY));
	// Touch
	stage.addEventListener(
		"touchmove",
		(e) => {
			const t = e.touches[0];
			if (t) update(t.clientX, t.clientY);
		},
		{ passive: true },
	);
}

export {};
