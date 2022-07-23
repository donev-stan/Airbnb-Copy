const elements = {
	filter: () => document.querySelector(".filters"),
	chips: () => document.querySelectorAll(".chip"),
	hearts: () => document.querySelectorAll(".fa-heart"),

	modalLanguage: () => document.getElementById("modal-language"),
	languageItems: () => document.querySelectorAll(".language-item"),

	profileMenuBtn: () => document.querySelector(".profile-menu-btn"),
};

(() => {
	// Close modal on outside click
	window.onclick = (event) => {
		event.target == elements.modalLanguage() ? closeModal() : null;
	};

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

	// Set Language
	elements.languageItems().forEach((language) => {
		language.addEventListener("click", () => {
			// Remove the one selected
			document
				.querySelector(".selected-lang-item")
				.classList.remove("selected-lang-item");

			// select a new one
			language.classList.add("selected-lang-item");
		});
	});

	// Add Click Event Listeners
	// Scroll Arrows
	document
		.querySelector(".chips-scrollLeft")
		.addEventListener("click", () => onScrollLeftClick());

	document
		.querySelector(".chips-scrollRight")
		.addEventListener("click", () => onScrollRightClick());

	// Modal Languages
	document
		.querySelector(".fa-globe")
		.addEventListener("click", () => openModal());

	document
		.querySelector(".close-modal-btn-div")
		.addEventListener("click", () => closeModal());

	// User Menu
	document
		.querySelector(".profile-menu-btn")
		.addEventListener("click", () => profileMenuToggle());
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
}

const openModal = () => (elements.modalLanguage().style.display = "flex");

const closeModal = () => (elements.modalLanguage().style.display = "none");

const profileMenuToggle = () =>
	document.querySelector(".popup-menu").classList.toggle("show");
