import Banner from '../Components/Banner';
import PhotographerProfile from '../Components/PhotographerProfileV2/PhotographerProfile';

export default function Profile({ photographersDatas, mediasDatas }) {
	return (
		<>
			<Banner />
			<PhotographerProfile
				photographersDatas={photographersDatas}
				mediasDatas={mediasDatas}
			/>
		</>
	);
}
