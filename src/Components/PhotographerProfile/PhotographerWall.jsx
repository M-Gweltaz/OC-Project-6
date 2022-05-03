import { useEffect, useState } from 'react';
import PhotographerWallMedia from './PhotographerWallMedia';
import MediaSlider from './MediaSlider';

export default function PhotographerWall({
	name,
	photographerMedia,
	totalAmountOfLike,
	setTotalAmountOfLike,
	isSliderOpen,
	setSliderOpen,
	currentSlide,
	setCurrentSlide,
}) {
	// looping through all picture path to render each picture component
	const wallMedias = photographerMedia.map((wallMedia, index) => (
		<PhotographerWallMedia
			index={index}
			key={wallMedia.id}
			name={name}
			wallMedia={wallMedia}
			totalAmountOfLike={totalAmountOfLike}
			setTotalAmountOfLike={setTotalAmountOfLike}
			isSliderOpen={isSliderOpen}
			setSliderOpen={setSliderOpen}
			currentSlide={currentSlide}
			setCurrentSlide={setCurrentSlide}
		/>
	));

	// Checking if slider State is open render MediaSlider else render PhotographerWallMedia
	return isSliderOpen ? (
		<MediaSlider
			isSliderOpen={isSliderOpen}
			setSliderOpen={setSliderOpen}
			name={name}
			photographerMedia={photographerMedia}
			currentSlide={currentSlide}
			setCurrentSlide={setCurrentSlide}
		/>
	) : (
		<section
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridGap: '2em',
				justifyItems: 'center',
				margin: '2em',
			}}
		>
			{wallMedias}
		</section>
	);
}
