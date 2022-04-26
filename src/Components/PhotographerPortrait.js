export default function PhotographerPortrait({ name, portrait }) {
	const picture = require(`../assets/photographers/Photographers_ID_Photos/${portrait}`);

	return (
		<img
			src={picture}
			alt={`${name}`}
			style={{
				objectFit: 'cover',
				width: '12.5em',
				height: '12.5em',
				borderRadius: '50%',
				boxShadow: '10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff',
			}}
		/>
	);
}
