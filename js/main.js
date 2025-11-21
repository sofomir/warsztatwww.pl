//hiding/showing menu on mobile
const burgerLine = document.querySelector('.nav-burger-line')
const nav = document.querySelector('nav')
const navBurger = document.querySelector('.nav-burger')
const logoBtn = document.querySelector('.logo a')
const navItems = document.querySelectorAll('nav a')
const header = document.querySelector('header')

navBurger.addEventListener('click', () => {
	burgerLine.classList.toggle('nav-burger-x')
	nav.classList.toggle('nav-main-show')
})

const closeMenu = () => {
	if (nav.classList.contains('nav-main-show')) {
		burgerLine.classList.remove('nav-burger-x')
		nav.classList.remove('nav-main-show')
	}
}

;[...navItems, logoBtn].forEach((element) => {
	element.addEventListener('click', closeMenu)
})

//hiding/showing header when scrolling
const headerHide = document.querySelector('header')
let lastScroll = 0
window.addEventListener('scroll', () => {
	const currentScrollY = window.scrollY
	if (currentScrollY > lastScroll) {
		if (!nav.classList.contains('nav-main-show')) {
			headerHide.classList.add('header-hide')
		}
	} else {
		headerHide.classList.remove('header-hide')
	}
	if (currentScrollY > 200) {
		headerHide.classList.add('header-bgc')
	} else {
		headerHide.classList.remove('header-bgc')
	}
	lastScroll = currentScrollY
})

//picture WWW color change
const lettersWWW = document.querySelectorAll('.hero-content-www-picture p span');

logoBtn.addEventListener('mouseenter', () => {
    lettersWWW.forEach(letter => letter.style.color = '');
});

logoBtn.addEventListener('mouseleave', () => {
    lettersWWW.forEach(letter => letter.style.color = 'white');
});
