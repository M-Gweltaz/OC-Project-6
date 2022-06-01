// React import
import { useState, useRef, useEffect } from 'react';
import { BiX } from 'react-icons/bi';

//  Style import
import('../../styles/PhotographerProfileContact.css');

export default function PhotographerProfileContact({
	name,
	setContactFormOpen,
}) {
	// handling the close event
	const closingContactForm = (e) => {
		// Removing aria-hidden attribute on the body
		let mainWrapper = document.querySelector('#root');
		mainWrapper.removeAttribute('aria-hidden');

		setContactFormOpen(false);
	};

	// handling the close event by clicking on the close Btn
	const handleCloseBtnClick = () => {
		closingContactForm();
	};

	// handling form keyboard event
	const handleContactFormKeyDown = (e) => {
		switch (true) {
			case e.key == 'Escape':
				closingContactForm(e);
				break;

			case e.key == 'Enter' &&
				e.target.classList.contains('contactForm__close'):
				closingContactForm(e);
				break;

			case e.key == 'Tab':
				trappingFocusInsideModal(e);
				break;
		}
	};

	// input form state
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	// checking if the form is valide
	const [isFormValid, setFormValid] = useState('false');

	// error on input handling
	const setErrorFor = (input, message) => {
		const parentElement = input.parentElement;
		const errorText = parentElement.querySelector('.contactForm__Message');

		// removing success class if present
		if (parentElement.classList.contains('inputSuccess')) {
			parentElement.classList.remove('inputSuccess');
		}

		// adding failed class and failed message
		parentElement.classList.add('inputFailed');
		errorText.textContent = message;

		// adding failed aria attribut
		input.setAttribute('aria-invalid', 'true');

		// switching the validation state
		setFormValid(false);
	};

	// success handling
	const setSuccessFor = (input) => {
		const parentElement = input.parentElement;

		// removing success class if present
		if (parentElement.classList.contains('inputFailed')) {
			parentElement.classList.remove('inputFailed');
		}

		// removing failed aria attribut
		if (input.getAttribute('aria-invalid') == 'true') {
			input.removeAttribute('aria-invalid');
		}

		// adding success class and success message
		parentElement.classList.add('inputSuccess');

		// switching the validation state
		setFormValid(true);
	};

	// firstNameCheck form validation
	const handleFirstNameValidationBlur = (e) => {
		switch (true) {
			case /^$/.test(e.target.value.trim()): // Checking if input is not empty
				setErrorFor(e.target, 'Veuillez remplir votre prénom');
				break;

			case e.target.value.trim().length < 2: // Checking if input is too short
				setErrorFor(e.target, 'Votre prénom est trop court');
				break;

			case e.target.value.trim().length > 30: // Checking if input is too long
				setErrorFor(e.target, 'Votre prénom est trop long');
				break;

			case /([^-,A-Za-zÀ-ÿ. '])+/.test(e.target.value.trim()): // Checking if input as no special char
				setErrorFor(e.target, `N'utilisez pas de caractères spéciaux`);
				break;

			default:
				setSuccessFor(e.target);
		}
	};

	//lastNameCheck form validation
	const handleLastNameValidationBlur = (e) => {
		switch (true) {
			case /^$/.test(e.target.value.trim()): // Checking if input is not empty
				setErrorFor(e.target, 'Veuillez remplir votre nom');
				break;

			case e.target.value.trim().length < 2: // Checking if input is too short
				setErrorFor(e.target, 'Votre nom est trop court');
				break;

			case e.target.value.trim().length > 30: // Checking if input is too long
				setErrorFor(e.target, 'Votre nom est trop long');
				break;

			case /([^-,A-Za-zÀ-ÿ. '])+/.test(e.target.value.trim()): // Checking if input as no special char
				setErrorFor(e.target, `N'utilisez pas de caractères spéciaux`);
				break;

			default:
				setSuccessFor(e.target);
		}
	};

	// userEmailCheck form validation
	const handleUserEmailValidationBlur = (e) => {
		switch (true) {
			case /^$/.test(e.target.value.trim()): // Checking if input is not empty
				setErrorFor(e.target, 'Adresse e-mail obligatoire');
				break;

			case /^[\w-\.À-ÿ]{2,40}@[\w-À-ÿ]{2,25}\.[a-zA-Z]{2,4}$/i.test(
				// Checking if the input is a email
				e.target.value.trim()
			):
				setSuccessFor(e.target);
				break;

			default:
				setErrorFor(e.target, 'Veuillez renseigner une adresse email valide');
		}
	};

	const handleUserMessageValidationBlur = (e) => {
		switch (true) {
			case /^$/.test(e.target.value.trim()): // Checking if textarea is not empty
				setErrorFor(e.target, 'Message obligatoire');
				break;

			case e.target.value.trim().length < 5: // Checking if input is too short
				setErrorFor(e.target, 'Votre message est trop court');
				break;

			case /([^-,A-Za-zÀ-ÿ. '])+/.test(e.target.value.trim()): // Checking if input as no special char
				setErrorFor(e.target, `N'utilisez pas de caractères spéciaux`);
				break;

			default:
				setSuccessFor(e.target);
		}
	};

	const handleContactFormSubmit = (e) => {
		e.preventDefault(); // preventing the form to sent data

		console.log();
		if (isFormValid === true) {
			const formResult = { firstName, lastName, email, message }; // stocking the form user in a variable
			console.log(formResult);
		} else {
			console.log('bad user input');
		}
	};

	// stocking the modal ref
	let contactModalRef = useRef(null);

	// Switch focus inside modal at first render
	useEffect(() => {
		// here we query all focusable elements
		const focusableModalElements = contactModalRef.current.querySelectorAll(
			'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
		);
		// focusing the second Element = closing Btn
		focusableModalElements[0].focus();
	}, []);

	// trapping focus inside modal
	const trappingFocusInsideModal = (e) => {
		// here we query all focusable elements
		const focusableModalElements = contactModalRef.current.querySelectorAll(
			'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
		);
		const firstElement = focusableModalElements[0];
		const lastElement =
			focusableModalElements[focusableModalElements.length - 1];

		// if going forward by pressing tab and lastElement is active shift focus to first focusable element
		if (!e.shiftKey && document.activeElement === lastElement) {
			firstElement.focus();
			return e.preventDefault();
		}

		// if going backward by pressing tab and firstElement is active shift focus to last focusable element
		if (e.shiftKey && document.activeElement === firstElement) {
			lastElement.focus();
			e.preventDefault();
		}
	};

	return (
		<form
			ref={contactModalRef}
			className='contactForm'
			onSubmit={handleContactFormSubmit}
			onKeyDown={handleContactFormKeyDown}
			role='dialog'
			aria-hidden='false'
			aria-describedby='formulaire de contact'
		>
			<BiX
				onClick={handleCloseBtnClick}
				className='contactForm__close'
				aria-label='fermer la pop-up'
				tabIndex='0'
			/>
			<h1 className='contactForm__Title'>
				Contacter moi <br />
				{name}
			</h1>
			<div className='contactForm__Input'>
				<label
					htmlFor='firstName'
					className='contactForm__Negativespacing'
					aria-labelledby='firstName'
				>
					Prénom
				</label>
				<input
					type='text'
					id='firstName'
					name='firstName'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					onBlur={handleFirstNameValidationBlur}
					aria-required='true'
				/>
				<small className='contactForm__Message' aria-label='Prénom non valide'>
					Error message
				</small>
			</div>
			<div className='contactForm__Input'>
				<label
					htmlFor='lastName'
					className='contactForm__Negativespacing'
					aria-labelledby='lastName'
				>
					Nom
				</label>
				<input
					type='text'
					id='lastName'
					name='lastName'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					onBlur={handleLastNameValidationBlur}
					aria-required='true'
				/>
				<small className='contactForm__Message' aria-label='Nom non valide'>
					Error message
				</small>
			</div>
			<div className='contactForm__Input'>
				<label
					htmlFor='email'
					className='contactForm__Negativespacing'
					aria-labelledby='email'
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					onBlur={handleUserEmailValidationBlur}
					aria-required='true'
				/>
				<small className='contactForm__Message' aria-label='email non valide'>
					Error message
				</small>
			</div>
			<div className='contactForm__Input'>
				<label
					htmlFor='yourMessage'
					className='contactForm__Negativespacing'
					aria-labelledby='yourMessage'
				>
					Votre message
				</label>
				<textarea
					name='yourMessage'
					id='yourMessage'
					cols='30'
					rows='10'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onBlur={handleUserMessageValidationBlur}
					aria-required='true'
				></textarea>
				<small className='contactForm__Message' aria-label='Message non valide'>
					Error message
				</small>
			</div>
			<button type='submit ' className='contactForm__Btn'>
				Envoyer
			</button>
		</form>
	);
}
