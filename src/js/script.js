

window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu-wrapper'),
	menuItem = document.querySelectorAll('.menu-li'),
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu-wrapper_active');
	});

	menuItem.forEach(item => {
			item.addEventListener('click', () => {
					hamburger.classList.toggle('hamburger_active');
					menu.classList.toggle('menu-wrapper_active');
			});
	});
});
