import Banner from '../Components/Banner';
import PhotographersList from '../Components/PhotographersList/PhotographersList';

export default function Home({ photographersDatas }) {
	return (
		<>
			<Banner />
			<PhotographersList photographersDatas={photographersDatas} />
		</>
	);
}
