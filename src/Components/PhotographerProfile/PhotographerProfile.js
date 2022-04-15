import { useParams } from 'react-router-dom';

export default function PhotographerProfile() {
	const params = useParams();

	return <h2>PhotographerProfile : {params.id}</h2>;
}
