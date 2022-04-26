export default function PhotographerInfos({ name, city, country, tagline }) {
	return (
		<header>
			<h1 className='photographerInfos__name'>{name}</h1>
			<p className='photographerInfos__location'>{`${city}, ${country}`}</p>
			<p className='photographerInfos__tagline'>{tagline}</p>
		</header>
	);
}
