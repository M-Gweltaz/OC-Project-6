// React import
import { useState } from 'react';

// Component import
import MediaFactory from '../../factories/MediaFactory';
import SliderFactory from '../../factories/SliderFactory';
import PhotographerWallMediaSorted from './PhotographerProfileWallMediaSorted';
import PhotographerProfileContact from './PhotographerProfileContact';

export default function PhotographerProfileWall({
	name,
	photographerMedia,
	totalMediaLikes,
	setTotalMediaLikes,
	isContactFormOpen,
	setContactFormOpen,
	isSliderOpen,
	setSliderOpen,
}) {
	// setting the correct currentSlide from the media clicked
	const [currentSlide, setCurrentSlide] = useState();

	// setting the correct Media
	const [wallMediaSorted, setWallMediaSorted] = useState({
		photographerMedia,
		sortedBy: null,
	});

	// looping through the sorted array to render each cards
	const mediaCardsArray = wallMediaSorted.photographerMedia.map(
		(media, index) => {
			return (
				<MediaFactory
					index={index}
					sortedBy={wallMediaSorted.sortedBy}
					media={media}
					name={name}
					key={media.id}
					totalMediaLikes={totalMediaLikes}
					setTotalMediaLikes={setTotalMediaLikes}
					setSliderOpen={setSliderOpen}
					setCurrentSlide={setCurrentSlide}
				/>
			);
		}
	);

	// handling the final html render
	let htmlRender;

	// checking if any modal is open to render proper component
	switch (true) {
		case isSliderOpen:
			htmlRender = (
				<>
					<PhotographerWallMediaSorted
						photographerMedia={photographerMedia}
						setWallMediaSorted={setWallMediaSorted}
						isContactFormOpen={isContactFormOpen}
						isSliderOpen={isSliderOpen}
					/>
					<SliderFactory
						name={name}
						wallMediaSorted={wallMediaSorted.photographerMedia}
						sortedBy={wallMediaSorted.sortedBy}
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
			);
			break;

		case isContactFormOpen:
			htmlRender = (
				<>
					<PhotographerWallMediaSorted
						photographerMedia={photographerMedia}
						setWallMediaSorted={setWallMediaSorted}
						isContactFormOpen={isContactFormOpen}
						isSliderOpen={isSliderOpen}
					/>
					<PhotographerProfileContact
						name={name}
						setContactFormOpen={setContactFormOpen}
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
			);
			break;

		default:
			htmlRender = (
				<>
					<PhotographerWallMediaSorted
						photographerMedia={photographerMedia}
						setWallMediaSorted={setWallMediaSorted}
						isContactFormOpen={isContactFormOpen}
						isSliderOpen={isSliderOpen}
					/>
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
			break;
	}

	return htmlRender;
}
