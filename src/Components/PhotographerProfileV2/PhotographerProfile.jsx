// React import
import { useParams } from 'react-router-dom';
import { useState } from 'react';

// Component import
import PhotographerProfileWall from './PhotographerProfileWall';
import PhotographerProfileCard from './PhotographerProfileCard';
import PricingAndLikes from './PricingAndLikesFooter';

// Models import
import Photographer from '../../models/Photographer';

export default function PhotographerProfile({
	photographersDatas,
	mediasDatas,
}) {
	// Parsing through the url
	const params = useParams();

	// parsing the url to have the photographer inital name value
	const initialName = params.id.replace(/_+/g, ' ');

	// accessing the specific photographer Data
	const [sortedPhotographerData] = photographersDatas.filter(
		(photographer) => photographer.name == initialName
	);

	// destructuring the data object
	const { name, id, city, country, tagline, price, portrait } =
		sortedPhotographerData;

	// transfering the photographerData through our Model
	const photographerModels = new Photographer(
		name,
		id,
		city,
		country,
		tagline,
		price,
		portrait
	);

	// Filtering the photographer specific media
	const photographerMedia = mediasDatas.filter(
		(media) => sortedPhotographerData.id == media.photographerId
	);

	// accessing the photographer total amount of Like et setting it as a State
	const [totalMediaLikes, setTotalMediaLikes] = useState(
		photographerMedia.reduce((acc, curentLike) => {
			return acc + curentLike.likes;
		}, 0)
	);

	return (
		<>
			<PhotographerProfileCard photographerModels={photographerModels} />
			<PhotographerProfileWall
				name={name}
				photographerMedia={photographerMedia}
				totalMediaLikes={totalMediaLikes}
				setTotalMediaLikes={setTotalMediaLikes}
			/>
			<PricingAndLikes
				price={photographerModels.getDailyRate()}
				totalMediaLikes={totalMediaLikes}
			/>
		</>
	);
}
