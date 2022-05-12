import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi';
import('../../styles/Slider.css');

export default function MediaSlider({
	photographerMedia,
	setSliderOpen,
	name,
	currentSlide,
	setCurrentSlide,
}) {
	// setting src state
	const [isPicture, setisPicture] = useState(true);
	let tempIsPicture = isPicture;

	// updating the src state
	let srcMediaPath;
	useEffect(() => setisPicture(tempIsPicture), [srcMediaPath]);

	// array used for stocking render info
	const mediaSliderData = photographerMedia.map((slide, index) => {
		// checking the given media and updating the src path and src type

		if (slide.image) {
			srcMediaPath = `${name}/${slide.image}`;
			tempIsPicture = true;
		} else {
			srcMediaPath = `${name}/${slide.video}`;
			tempIsPicture = false;
		}

		// requiring the media given the src type
		let srcPath = require(`../../assets/photographers/${srcMediaPath}`);

		class srcPathIntel {
			constructor(id, path, picture, title) {
				this.id = id;
				this.path = path;
				this.picture = picture;
				this.title = title;
			}
		}

		let mediaSrc = new srcPathIntel(
			slide.id,
			srcPath,
			tempIsPicture,
			slide.title
		);

		return mediaSrc;
	});

	// // current slide state logic
	// const [currentSlide, setCurrentSlide] = useState(0);

	// next slider arrow logic
	const nextSlide = () => {
		setCurrentSlide(
			currentSlide === mediaSliderData.length - 1 ? 0 : currentSlide + 1
		);
	};

	// previous slider arrow logic
	const prevSlide = () => {
		setCurrentSlide(
			currentSlide === 0 ? mediaSliderData.length - 1 : currentSlide - 1
		);
	};

	const closeSlider = () => {
		setSliderOpen(false);
	};

	// Checking is there is correct data
	if (!Array.isArray(mediaSliderData) || mediaSliderData.length <= 0) {
		return null;
	}

	return (
		<section className='slider'>
			<BiChevronLeft onClick={prevSlide} className='slider__arrow--left' />
			<BiChevronRight onClick={nextSlide} className='slider__arrow--right' />
			<BiX onClick={closeSlider} className='slider__close' />
			{mediaSliderData.map((slide, index) => {
				return slide.picture ? (
					<div
						className={index === currentSlide ? 'slide--active' : 'slide'}
						key={slide.id}
					>
						{index === currentSlide && (
							<>
								<img className='slide__currentMedia' src={slide.path} />
								<h2 className='slide__currentMedia--title'>{slide.title}</h2>
							</>
						)}
					</div>
				) : (
					<div
						className={index === currentSlide ? 'slide--active' : 'slide'}
						key={slide.id}
					>
						{index === currentSlide && (
							<>
								<video
									src={slide.path}
									className='slide__currentMedia'
									controls
								/>
								<h2 className='slide__currentMedia--title'>{slide.title}</h2>
							</>
						)}
					</div>
				);
			})}
		</section>
	);
}
