(() => {
	// Set shadow on filter on scroll
	window.onscroll = () => {
		if (
			document.body.scrollTop > 1 ||
			document.documentElement.scrollTop > 1
		) {
			document.querySelector(".filters").classList.add("shadow");
		} else {
			document.querySelector(".filters").classList.remove("shadow");
		}
	};

	// Set Active Filter
	const chips = document.querySelectorAll(".chip");
	chips.forEach((chip) => {
		chip.addEventListener("click", () => {
			chips.forEach((chip) => chip.classList.remove("active"));
			chip.classList.add("active");
		});
	});

	// Set Favourite
	const hearts = document.querySelectorAll(".fa-heart");
	hearts.forEach((heart) => {
		heart.addEventListener("click", () => {
			if (heart.classList.contains("favourite")) {
				heart.classList.remove("favourite");
			} else {
				heart.classList.add("favourite");
			}
		});
	});
})();
