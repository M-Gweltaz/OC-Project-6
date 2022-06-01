import Banner from '../Components/Banner';
import PhotographerProfile from '../Components/PhotographerProfile/PhotographerProfile';

export default function Profile({
	photographersDatas,
	mediasDatas,
	isSliderOpen,
	setSliderOpen,
	isContactFormOpen,
	setContactFormOpen,
}) {
	return (
		<>
			<Banner
				isSliderOpen={isSliderOpen}
				isContactFormOpen={isContactFormOpen}
			/>
			<PhotographerProfile
				photographersDatas={photographersDatas}
				mediasDatas={mediasDatas}
				isSliderOpen={isSliderOpen}
				setSliderOpen={setSliderOpen}
				isContactFormOpen={isContactFormOpen}
				setContactFormOpen={setContactFormOpen}
			/>
		</>
	);
}
