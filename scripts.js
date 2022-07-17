const elements = {
	filter: () => document.querySelector(".filters"),
	chips: () => document.querySelectorAll(".chip"),
	hearts: () => document.querySelectorAll(".fa-heart"),
};

(() => {
	// Set shadow on filter on scroll
	window.onscroll = () => {
		const scrolled =
			document.body.scrollTop > 1 ||
			document.documentElement.scrollTop > 1;

		scrolled
			? elements.filter().classList.add("shadow")
			: elements.filter().classList.remove("shadow");
	};

	// Set Active Filter
	elements.chips().forEach((chip) => {
		chip.addEventListener("click", () => {
			elements.chips().forEach((chip) => chip.classList.remove("active"));
			chip.classList.add("active");
		});
	});

	// Set Favourite
	elements.hearts().forEach((heart) => {
		heart.addEventListener("click", () => {
			if (heart.classList.contains("favourite")) {
				heart.classList.remove("favourite");
			} else {
				heart.classList.add("favourite");
			}
		});
	});

	// Add Click Event Listeners
	document
		.querySelector(".chips-scrollLeft")
		.addEventListener("click", () => onScrollLeftClick());

	document
		.querySelector(".chips-scrollRight")
		.addEventListener("click", () => onScrollRightClick());
})();

function onScrollRightClick() {
	// Scroll Chips right by 70 pixels
	document.querySelector(".chips").scrollLeft -= 70;

	// Remove Arrow from DOM
	if (document.querySelector(".chips").scrollLeft <= 70) {
		document.querySelector(".chips-scrollRight").style.display = "none";
	}
}

function onScrollLeftClick() {
	// Show arrow for scrolling right
	document.querySelector(".chips-scrollRight").style.display = "flex";

	// Scroll Chips left by 70 pixels
	document.querySelector(".chips").scrollLeft += 70;

	/*
	// Keep right fadeout in place acording to scroll
	document
		.querySelectorAll(".fadeoutRight")
		.forEach((line, index) => {
			line.style.right = `-${scrollWidth - index * lineWidth}px`;
		});

	// Keep left fadeout in place acording to scroll
	document.querySelectorAll(".fadeoutLeft").forEach((line, index) => {
		line.style.left = `+${scrollWidth + index * lineWidth}px`;
	});
	*/
}
