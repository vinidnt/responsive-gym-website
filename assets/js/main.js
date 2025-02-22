/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/*==== MENU SHOW ====*/
/* Validate if constat exists */

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	})
}

/*==== MENU HIDDEN ====*/
if (navClose) {
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
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
	calculateCm = document.getElementById('calculate-cm'),
	calculateKg = document.getElementById('calculate-kg'),
	calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
	e.preventDefault()

	//Checks if the fields have a value
	if (calculateCm.value === '' || calculateKg.value === '') {
		//Add and remove color
		calculateMessage.classList.remove('color-green')
		calculateMessage.classList.add('color-red')

		//Show message
		calculateMessage.textContent = 'Preencha seu peso e altura. 👨‍💻'

		setTimeout(() => {
			calculateMessage.textContent = ''
		}, 15000)
	} else {
		//BMi Formula
		const cm = calculateCm.value / 100,
			kg = calculateKg.value,
			bmi = Math.round(kg / (cm * cm))

		//Show yout health status
		if (bmi < 18.5) {
			//Add color and display message
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = `Seu IMC é ${bmi} e você está abaixo do peso ideal 😔`
		} else if (bmi < 25) {
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = `Seu IMC é ${bmi} e você está no peso ideal. 🥳`
		} else {
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = `Seu IMC é ${bmi} e você está acima do peso. 😔`
		}

		// To clear the input field
		calculateCm.value = ''
		calculateKg.value = ''

		//Remove message
		setTimeout(() => {
			calculateMessage.value = ''
		}, 5000)
	}

}

calculateForm.addEventListener('submit', calculateBmi)




/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
	contactMessage = document.getElementById('contact-message'),
	contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {
	e.preventDefault()

	// Check if the field has a value
	if (contactUser.value === '') {
		// Add and remove color
		contactMessage.classList.remove('color-green')
		contactMessage.classList.add('color-red')
		// Show message
		contactMessage.textContent = 'Você deve inserir seu e-mail ☝'
	} else {
		// serviceID - templateID - #form - publicKey
		emailjs.sendForm('service_ih1tuds', 'template_ksz7yeb', '#contact-form', 'zCQ6lIHtOb4JaRmie')
			.then(() => {
				// Show message and add color
				contactMessage.classList.add('color-green')
				contactMessage.textContent = 'Você se inscreveu com sucesso. 💪'
			},(error) => {
				// Mail sending error
				alert('OOPA! ALGO DEU ERRADO...', error)
			})		
	}

	// Remove message three seconds
	setTimeout(() => {
		contactMessage.textContent = ''
	}, 3000)

	// To clear the input field
	contactUser.value = '';
}

contactForm.addEventListener('submit', sendEmail)