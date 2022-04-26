// React import
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import PhotographerProfileCard from './PhotographerProfileCard';
import PhotographerPhotoWall from './PhotographerPhotoWall';
import PricingAndLikes from './PricingAndLikes';

export default function PhotographerProfile({ photographersDatas }) {
	// Parsing through the url
	const params = useParams();

	// parsing the url to have the photographer inital name value
	const initialName = params.id.replace(/_+/g, ' ');

	// accessing the specific photographer Data
	const [sortingPhotographerData] = photographersDatas.filter(
		(photographer) => photographer.name == initialName
	);

	// creating a fake total like state variable
	const [totalLike, setTotalLike] = useState(Math.floor(Math.random() * 10000));

	// transfering the data as a State
	const [photographerProfilData, setPhotographerProfilData] = useState(
		sortingPhotographerData
	);

	return (
		<>
			<PhotographerProfileCard
				photographerProfilData={photographerProfilData}
			/>
			<PhotographerPhotoWall
				name={photographerProfilData.name}
				totalLike={totalLike}
			/>
			<PricingAndLikes
				price={photographerProfilData.price}
				totalLike={totalLike}
			/>
		</>
	);
}
