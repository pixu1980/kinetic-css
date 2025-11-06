// Doodle JS - Fresh start: draggable title

const title = document.querySelector(".title");
const stage = title?.closest(".stage");

if (title && stage) {
	const clampPercentage = (value) => Math.max(0, Math.min(100, value));
	const formatPercent = (value) => `${value.toFixed(3)}%`;

	const setPosition = (px, py) => {
		const clampedX = clampPercentage(px);
		const clampedY = clampPercentage(py);
		const xValue = formatPercent(clampedX);
		const yValue = formatPercent(clampedY);

		stage.style.setProperty("--title-x", xValue);
		stage.style.setProperty("--title-y", yValue);
		title.style.setProperty("--title-x", xValue);
		title.style.setProperty("--title-y", yValue);
	};

	const calibrateVisualOffset = (attempt = 0) => {
		if (attempt > 5) return;

		const styles = getComputedStyle(stage);
		const posX = Number.parseFloat(styles.getPropertyValue("--title-x")) || 50;
		const posY = Number.parseFloat(styles.getPropertyValue("--title-y")) || 50;
		if (Math.abs(posX - 50) > 0.5 || Math.abs(posY - 50) > 0.5) return;

		const stageRect = stage.getBoundingClientRect();
		const titleRect = title.getBoundingClientRect();

		if (!stageRect.height || !titleRect.height) return;

		const delta =
			titleRect.top -
			stageRect.top +
			titleRect.height / 2 -
			stageRect.height / 2;

		if (Math.abs(delta) < 0.2) return;

		const computedOffset =
			getComputedStyle(stage).getPropertyValue("--title-offset");
		const currentOffset = Number.parseFloat(computedOffset) || 0;

		stage.style.setProperty("--title-offset", `${currentOffset + delta}px`);

		requestAnimationFrame(() => calibrateVisualOffset(attempt + 1));
	};

	let calibrationFrame = null;
	const scheduleCalibration = () => {
		if (calibrationFrame !== null) return;
		calibrationFrame = requestAnimationFrame(() => {
			calibrationFrame = null;
			calibrateVisualOffset();
		});
	};

	let dragging = false;
	let offsetX = 0;
	let offsetY = 0;

	const onPointerDown = (ev) => {
		ev.preventDefault();
		dragging = true;
		title.setPointerCapture?.(ev.pointerId);
		const rect = title.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		offsetX = centerX - ev.clientX;
		offsetY = centerY - ev.clientY;
	};

	const onPointerMove = (ev) => {
		if (!dragging) return;
		ev.preventDefault();
		const stageRect = stage.getBoundingClientRect();
		const newCenterX = ev.clientX + offsetX;
		const newCenterY = ev.clientY + offsetY;
		const px = ((newCenterX - stageRect.left) / stageRect.width) * 100;
		const py = ((newCenterY - stageRect.top) / stageRect.height) * 100;
		setPosition(px, py);
	};

	const onPointerUp = (ev) => {
		if (!dragging) return;
		ev.preventDefault();
		dragging = false;
		title.releasePointerCapture?.(ev.pointerId);
		scheduleCalibration();
	};

	title.addEventListener("pointerdown", onPointerDown);
	title.addEventListener("pointermove", onPointerMove);
	title.addEventListener("pointerup", onPointerUp);
	title.addEventListener("pointercancel", onPointerUp);

	title.addEventListener("keydown", (e) => {
		const step = 2; // 2%
		const styles = getComputedStyle(stage);
		const currentX = Number.parseFloat(
			styles.getPropertyValue("--title-x") || "50",
		);
		const currentY = Number.parseFloat(
			styles.getPropertyValue("--title-y") || "50",
		);
		let px = currentX;
		let py = currentY;

		if (e.key === "ArrowLeft") px -= step;
		else if (e.key === "ArrowRight") px += step;
		else if (e.key === "ArrowUp") py -= step;
		else if (e.key === "ArrowDown") py += step;
		else return;

		e.preventDefault();
		setPosition(px, py);
		scheduleCalibration();
	});

	let resizeFrame = null;
	window.addEventListener("resize", () => {
		if (resizeFrame) cancelAnimationFrame(resizeFrame);
		resizeFrame = requestAnimationFrame(() => {
			resizeFrame = null;
			scheduleCalibration();
		});
	});

	if (document.fonts?.ready) {
		document.fonts.ready.then(() => {
			scheduleCalibration();
		});
	}

	scheduleCalibration();
}

export {};
