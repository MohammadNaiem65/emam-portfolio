const topPointer = document.getElementById('top-pointer');

// scroll the page to top
topPointer.addEventListener('click', function () {
	window.scrollTo(0, 0);
});

function amountScrolled() {
	const winHeight = window.innerHeight;
	const docHeight = document.documentElement.scrollHeight;
	const scrollTop = window.scrollY;
	const trackLength = docHeight - winHeight;
	const pctScrolled = Math.floor((scrollTop / trackLength) * 100);

	// show top scroll pointer after 2% scrolling of the page
	if (pctScrolled > 2) {
		topPointer.classList.remove('hidden');
		topPointer.classList.add('flex');
	} else {
		topPointer.classList.remove('flex');
		topPointer.classList.add('hidden');
	}
}

window.addEventListener(
	'scroll',
	function () {
		amountScrolled();
	},
	false
);
