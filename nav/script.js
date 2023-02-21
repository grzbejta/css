const opernMenu = document.querySelector('.header__toggle'),
	closeMenu = document.querySelector('.header__close'),
	nav = document.querySelector('.nav');

opernMenu.addEventListener('click', () => {
	nav.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
	nav.classList.toggle('show');
});
