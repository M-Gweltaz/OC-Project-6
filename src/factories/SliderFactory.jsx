// React import
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi';

// Component import
import Media from '../models/Media';
//  Style import
import('../styles/Slider.css');

export default function SliderFactory({
	name,
	photographerMedia,
	setSliderOpen,
	currentSlide,
	setCurrentSlide,
}) {
	// Mapping through each photographerMedia data
	const sliderMediaArray = photographerMedia.map((slide) => {
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

	// next slider arrow logic
	const nextSlide = () => {
		setCurrentSlide(
			currentSlide === sliderMediaArray.length - 1 ? 0 : currentSlide + 1
		);
	};

	// previous slider arrow logic
	const prevSlide = () => {
		setCurrentSlide(
			currentSlide === 0 ? sliderMediaArray.length - 1 : currentSlide - 1
		);
	};

	const closeSlider = () => {
		setSliderOpen(false);
	};

	return (
		<section className='slider'>
			<BiChevronLeft onClick={prevSlide} className='slider__arrow--left' />
			<BiX onClick={closeSlider} className='slider__close' />
			{sliderMediaArray.map((slide, index) => {
				return (
					<div
						className={index === currentSlide ? 'slide--active' : 'slide'}
						key={slide.id}
					>
						{index === currentSlide &&
							// getting the proper render from media type src
							slide.getSliderRender(slide.getMediaPath(), slide.title)}
					</div>
				);
			})}
			<BiChevronRight onClick={nextSlide} className='slider__arrow--right' />
		</section>
	);
}
