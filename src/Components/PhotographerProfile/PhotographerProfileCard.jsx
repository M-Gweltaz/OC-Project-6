import PhotographerPortrait from '../PhotographerPortrait';
import PhotographerInfos from './PhotographerInfos';
import ContactBtn from './ContactBtn';
import '../../styles/PhotographerProfileCard.css';

export default function PhotographerProfileCard({ photographerProfilData }) {
	const { name, portrait, city, country, tagline } = photographerProfilData;

	return (
		<section className='photographerProfileCard'>
			<PhotographerInfos
				name={name}
				city={city}
				country={country}
				tagline={tagline}
			/>
			<ContactBtn />
			<PhotographerPortrait name={name} portrait={portrait} />
		</section>
	);
}
