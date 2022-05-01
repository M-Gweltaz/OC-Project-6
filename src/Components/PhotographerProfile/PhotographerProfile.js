// React import
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import PhotographerProfileCard from './PhotographerProfileCard';
import PhotographerWall from './PhotographerWall';
import PricingAndLikes from './PricingAndLikes';

export default function PhotographerProfile({
	photographersDatas,
	mediasDatas,
}) {
	// Parsing through the url
	const params = useParams();

	// parsing the url to have the photographer inital name value
	const initialName = params.id.replace(/_+/g, ' ');

	// accessing the specific photographer Data
	const [sortingPhotographerData] = photographersDatas.filter(
		(photographer) => photographer.name == initialName
	);
	// transfering the photographer data as a State
	const [photographerProfilData, setPhotographerProfilData] = useState(
		sortingPhotographerData
	);

	// accessing the specific photographers Media
	const sortingPhotographerMedia = mediasDatas.filter(
		(media) => sortingPhotographerData.id == media.photographerId
	);
	// transfering photographer specific media as a State
	const [photographerMedia, setPhotographerMedia] = useState(
		mediasDatas.filter(
			(media) => sortingPhotographerData.id == media.photographerId
		)
	);

	// accessing the photographer total amount of Like et setting it as a State
	const [totalAmountOfLike, setTotalAmountOfLike] = useState(
		photographerMedia.reduce((acc, curentLike) => {
			return acc + curentLike.likes;
		}, 0)
	);

	// checking if Slider is open
	const [isSliderOpen, setSliderOpen] = useState(false);

	// setting the correct currentSlide from the media clicked
	const [currentSlide, setCurrentSlide] = useState();

	return isSliderOpen ? (
		<PhotographerWall
			name={photographerProfilData.name}
			photographerMedia={photographerMedia}
			totalAmountOfLike={totalAmountOfLike}
			setTotalAmountOfLike={setTotalAmountOfLike}
			isSliderOpen={isSliderOpen}
			setSliderOpen={setSliderOpen}
			currentSlide={currentSlide}
			setCurrentSlide={setCurrentSlide}
		/>
	) : (
		<>
			<PhotographerProfileCard
				photographerProfilData={photographerProfilData}
			/>
			<PhotographerWall
				name={photographerProfilData.name}
				photographerMedia={photographerMedia}
				totalAmountOfLike={totalAmountOfLike}
				setTotalAmountOfLike={setTotalAmountOfLike}
				isSliderOpen={isSliderOpen}
				setSliderOpen={setSliderOpen}
				currentSlide={currentSlide}
				setCurrentSlide={setCurrentSlide}
			/>
			<PricingAndLikes
				price={photographerProfilData.price}
				totalAmountOfLike={totalAmountOfLike}
			/>
		</>
	);
}
