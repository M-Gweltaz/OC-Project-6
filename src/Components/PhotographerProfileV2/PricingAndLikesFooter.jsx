// Style import
import { BsHeartFill } from 'react-icons/bs';

export default function PricingAndLikes({ price, totalMediaLikes }) {
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
			<p style={{ margin: 'center' }}>
				{totalMediaLikes}
				<BsHeartFill style={{ paddingLeft: '0.2em', paddingTop: '0.2em' }} />
			</p>
			<p>{price}</p>
		</footer>
	);
}
