// React import
import { useState } from 'react';

// Component import
import MediaFactory from '../../factories/MediaFactory';
import SliderFactory from '../../factories/SliderFactory';
import PhotographerWallSorter from './PhotographerPofileWallSorter';

export default function PhotographerProfileWall({
	name,
	photographerMedia,
	totalMediaLikes,
	setTotalMediaLikes,
}) {
	// checking if Slider is open
	const [isSliderOpen, setSliderOpen] = useState(false);

	// setting the correct currentSlide from the media clicked
	const [currentSlide, setCurrentSlide] = useState();

	const mediaCardsArray = photographerMedia.map((media, index) => {
		return (
			<MediaFactory
				index={index}
				media={media}
				name={name}
				key={media.id}
				totalMediaLikes={totalMediaLikes}
				setTotalMediaLikes={setTotalMediaLikes}
				setSliderOpen={setSliderOpen}
				setCurrentSlide={setCurrentSlide}
			/>
		);
	});

	return isSliderOpen ? (
		<>
			<PhotographerWallSorter />
			<SliderFactory
				name={name}
				photographerMedia={photographerMedia}
				setSliderOpen={setSliderOpen}
				currentSlide={currentSlide}
				setCurrentSlide={setCurrentSlide}
			/>
			<main
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridGap: '2em',
					justifyItems: 'center',
					margin: '2em',
					opacity: '0.5',
				}}
			>
				{mediaCardsArray}
			</main>
		</>
	) : (
		<>
			<PhotographerWallSorter />
			<main
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridGap: '2em',
					justifyItems: 'center',
					margin: '2em',
				}}
			>
				{mediaCardsArray}
			</main>
		</>
	);
}
