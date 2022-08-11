/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*==== MENU SHOW ====*/
/* Validate if constat exists */

if(navToggle){
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	})
}

/*==== MENU HIDDEN ====*/
if(navClose){
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	})
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	//When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
	console.log("entrou 2")
}

navLink.forEach(e => e.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
	const header = document.getElementById('header')
	console.log("entrou 1")
	//When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	//
	this.scrollY >= 50 ? header.classList.add('bg-header')
					   : header.classList.remove('bg-header')
}
	window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/


/*=============== EMAIL JS ===============*/
