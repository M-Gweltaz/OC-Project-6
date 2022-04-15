import '../styles/PhotographersCards.css';

export default function PhotographersCards({ photographerData }) {
	const { name, portrait, city, country, tagline, price } = photographerData;

	const picture = `assets/photographers/Photographers_ID_Photos/${portrait}`;

	return (
		<figure className='photographerCard'>
			<div>
				<a href='/test' className='photographerCard__link'>
					<img
						src={picture}
						alt={`${name} portrait`}
						className='photographerCard__link--img'
					/>
					<h2 className='photographerCard__link--name'>{name}</h2>
				</a>
			</div>
			<figcaption className='photographerCard__description'>
				<p className='photographerCard__description--location'>{`${city}, ${country}`}</p>
				<p className='photographerCard__description--tagline'>{tagline}</p>
				<p className='photographerCard__description--price'>{price}€/jour</p>
			</figcaption>
		</figure>
	);
}
