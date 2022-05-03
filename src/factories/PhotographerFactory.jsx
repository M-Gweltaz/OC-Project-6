import Photographer from '../models/Photographer.jsx';
import { Link } from 'react-router-dom';

export default function PhotographerFactory({ photographerData }) {
	// destructuring the data object

	const { name, id, city, country, tagline, price, portrait } =
		photographerData;

	const photographerModels = new Photographer(
		name,
		id,
		city,
		country,
		tagline,
		price,
		portrait
	);

	// Requiring the picture src path
	let picture = photographerModels.getPicturePath();

	// Sending back the output
	return (
		<figure className='photographerCard'>
			<div>
				<Link
					to={photographerModels.getCleanUrlParams()}
					className='photographerCard__link'
				>
					<img
						src={picture}
						alt={`${photographerModels.name}`}
						style={{
							objectFit: 'cover',
							width: '12.5em',
							height: '12.5em',
							borderRadius: '50%',
							boxShadow: '10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff',
						}}
					/>
					<h2 className='photographerCard__link--name'>
						{photographerModels.name}
					</h2>
				</Link>
			</div>
			<figcaption className='photographerCard__description'>
				<p className='photographerCard__description--location'>
					{photographerModels.getLocation()}
				</p>
				<p className='photographerCard__description--tagline'>
					{photographerModels.tagline}
				</p>
				<p className='photographerCard__description--price'>
					{photographerModels.getDailyRate()}
				</p>
			</figcaption>
		</figure>
	);
}
