import blackLike from '../../assets/icons/black_like.svg';

export default function PricingAndLikes({ price, totalAmountOfLike }) {
	return (
		<footer
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				position: 'sticky',
				bottom: '0',
				width: '17.5vw',
				marginLeft: '75vw',
				backgroundColor: '#DB8876',
				fontSize: '1.5em',
				padding: '0.5em 1.25em',
				borderTopLeftRadius: '0.2em',
				borderTopRightRadius: '0.2em',
			}}
		>
			<p>
				{totalAmountOfLike}
				<img
					style={{ marginLeft: '0.2em' }}
					src={blackLike}
					alt='Nombre total de likes'
				></img>
			</p>
			<p>{price}€ / jour</p>
		</footer>
	);
}
