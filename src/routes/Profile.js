import Banner from '../Components/Banner';
import PhotographerProfile from '../Components/PhotographerProfile/PhotographerProfile';

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
