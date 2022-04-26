import blackLike from '../../assets/icons/black_like.svg';

export default function PricingAndLikes({ price, totalLike }) {
	return (
		<footer
			style={{
				display: 'flex',
				position: 'absolute',
				bottom: '0',
				left: '77.5vw',
				backgroundColor: '#DB8876',
				fontSize: '1.5em',
				padding: '0.5em 1em',
				borderTopLeftRadius: '0.2em',
				borderTopRightRadius: '0.2em',
			}}
		>
			<p
				style={{
					marginRight: '1.5em',
				}}
			>
				{totalLike} <img src={blackLike} alt='total de likes'></img>
			</p>
			<p>{price}€ / jour</p>
		</footer>
	);
}
