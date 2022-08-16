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
}

navLink.forEach(e => e.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
	const header = document.getElementById('header')
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
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
	e.preventDefault()

	//Checks if the fields have a value
	if(calculateCm.value === '' || calculateKg.value === ''){
		//Add and remove color
		calculateMessage.classList.remove('color-green')
		calculateMessage.classList.add('color-red')

		//Show message
		calculateMessage.textContent = 'Fill in the Height and Weight 👨‍💻'

		setTimeout(() => {
			calculateMessage.textContent = ''
		}, 5000)
	} else {
		//BMi Formula
		const cm = calculateCm.value /100,
		      kg = calculateKg.value,
		      bmi = Math.round(kg / (cm * cm))
		
		//Show yout health status
		if(bmi < 18.5){
			//Add color and display message
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😔`
		}  else if(bmi < 25){
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`
		} else {
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = `Your BMI is ${bmi} and you are overwight 😔`
		}

		// To clear the input field
		calculateCm.value = ''
		calculateKg.value = ''

		//Remove message
		setTimeout (() => {
			calculateMessage.value = ''
		}, 5000)
	}

}

calculateForm.addEventListener('submit', calculateBmi)




/*=============== EMAIL JS ===============*/
