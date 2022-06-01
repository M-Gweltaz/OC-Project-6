// React import
import { useEffect, useRef } from 'react';
import { BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi';

// Component import
import Media from '../models/Media';

//  Style import
import('../styles/Slider.css');

export default function SliderFactory({
	name,
	wallMediaSorted,
	sortedBy,
	setSliderOpen,
	currentSlide,
	setCurrentSlide,
}) {
	// Mapping through each wallMediaSorted data
	const sliderMediaArray = wallMediaSorted.map((slide) => {
		// destructuring the data object
		const { id, photographerId, title, video, image, likes, date, price } =
			slide;

		// Instanciating data into our models
		const mediaModelArray = new Media(
			id,
			photographerId,
			name,
			title,
			image ? image : video,
			likes,
			date,
			price
		);

		// returning the instancied data
		return mediaModelArray;
	});

	const closingSlider = () => {
		let mainWrapper = document.querySelector('#root');
		// Removing aria-hidden attribute on the body
		mainWrapper.removeAttribute('aria-hidden');

		setSliderOpen(false);
	};

	// next slider arrow logic
	const handleNextSlideClick = () => {
		setCurrentSlide(
			currentSlide === sliderMediaArray.length - 1 ? 0 : currentSlide + 1
		);
	};

	// previous slider arrow logic
	const handlePreviousSlideClick = () => {
		setCurrentSlide(
			currentSlide === 0 ? sliderMediaArray.length - 1 : currentSlide - 1
		);
	};

	// Slider keyboards logic handling
	const handleSliderKeyDown = (e) => {
		switch (true) {
			case e.key === 'Escape':
				closingSlider();
				break;

			case e.key === 'ArrowLeft':
				setCurrentSlide(
					currentSlide === 0 ? sliderMediaArray.length - 1 : currentSlide - 1
				);
				break;

			case e.key === 'ArrowRight':
				setCurrentSlide(
					currentSlide === sliderMediaArray.length - 1 ? 0 : currentSlide + 1
				);
				break;

			case e.key === 'Enter' &&
				e.target.classList.contains('slider__arrow--left'):
				setCurrentSlide(
					currentSlide === 0 ? sliderMediaArray.length - 1 : currentSlide - 1
				);
				break;
			case e.key === 'Enter' &&
				e.target.classList.contains('slider__arrow--right'):
				setCurrentSlide(
					currentSlide === sliderMediaArray.length - 1 ? 0 : currentSlide + 1
				);
				break;

			case e.key === 'Enter' && e.target.classList.contains('slider__close'):
				closingSlider();
				break;

			case e.key === 'Tab':
				trappingFocusInsideModal(e);
				break;

			default:
				return;
		}
	};

	// stocking the modal ref
	let modalRef = useRef(null);

	// Switch focus inside modal at first render
	useEffect(() => {
		// here we query all focusable elements
		const focusableModalElements = modalRef.current.querySelectorAll(
			'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
		);
		// focusing the second Element = closing Btn
		focusableModalElements[1].focus();
	}, []);

	// trapping focus inside modal
	const trappingFocusInsideModal = (e) => {
		// here we query all focusable elements
		const focusableModalElements = modalRef.current.querySelectorAll(
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
		<section
			className='slider'
			ref={modalRef}
			role='dialog'
			aria-hidden='false'
			onKeyDown={handleSliderKeyDown}
		>
			<BiChevronLeft
				onClick={handlePreviousSlideClick}
				className='slider__arrow--left'
				aria-label='Media précédent'
				tabIndex='0'
			/>
			<BiX
				onClick={closingSlider}
				className='slider__close'
				aria-label='fermer le carouselle'
				tabIndex='0'
			/>
			{sliderMediaArray.map((slide, index) => {
				return (
					<div
						className={index === currentSlide ? 'slide--active' : 'slide'}
						aria-hidden={index === currentSlide ? 'false' : 'true'}
						key={slide.id}
					>
						{index === currentSlide &&
							// getting the proper render from media type src
							slide.getSliderRender(slide.getMediaPath(), slide.title)}
					</div>
				);
			})}
			<BiChevronRight
				onClick={handleNextSlideClick}
				className='slider__arrow--right'
				aria-label='Media suivant'
				tabIndex='0'
			/>
		</section>
	);
}
