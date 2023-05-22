window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
	document.documentElement.classList.add('loaded');
}

// Button

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;
	if (targetElement.closest('.button-up')) {
		scrollToBlock(main);
	} 
}

const main = document.querySelector('.page__main');
function scrollToBlock(element) {
	element.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
