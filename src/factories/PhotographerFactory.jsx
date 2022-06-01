// React import
import { Link } from 'react-router-dom';

// Models import
import Photographer from '../models/Photographer.jsx';

export default function PhotographerFactory({ photographerData }) {
	// destructuring the data object
	const { name, id, city, country, tagline, price, portrait } =
		photographerData;

	// Fitting our dat into our models
	const photographerModel = new Photographer(
		name,
		id,
		city,
		country,
		tagline,
		price,
		portrait
	);

	// Requiring the picture src path
	let picture = photographerModel.getPicturePath();

	// Sending back the output
	return (
		<figure className='photographerCard'>
			<Link
				to={photographerModel.getCleanUrlParams()}
				className='photographerCard__link'
				aria-label={`${name} art navigation`}
			>
				<img
					src={picture}
					alt={`${photographerModel.name}`}
					style={{
						objectFit: 'cover',
						width: '12.5em',
						height: '12.5em',
						borderRadius: '50%',
						boxShadow: '10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff',
					}}
				/>
				<h2 className='photographerCard__link--name'>
					{photographerModel.name}
				</h2>
			</Link>
			<figcaption className='photographerCard__description'>
				<p className='photographerCard__description--location'>
					{photographerModel.getLocation()}
				</p>
				<p className='photographerCard__description--tagline'>
					{photographerModel.tagline}
				</p>
				<p className='photographerCard__description--price'>
					{photographerModel.getDailyRate()}
				</p>
			</figcaption>
		</figure>
	);
}
