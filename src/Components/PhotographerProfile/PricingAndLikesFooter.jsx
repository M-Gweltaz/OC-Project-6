// Style import
import { BsHeartFill } from 'react-icons/bs';

export default function PricingAndLikes({
	price,
	totalMediaLikes,
	isContactFormOpen,
	isSliderOpen,
}) {
	// handling bg opacity if modal is open
	if (isContactFormOpen || isSliderOpen) {
		return (
			<footer
				role='contentinfo'
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
					opacity: '0.5',
				}}
			>
				<p
					id='nombre de like total du photographe'
					style={{ margin: 'center' }}
				>
					{totalMediaLikes}
					<BsHeartFill
						aria-labelledby='nombre de like total du photographe'
						style={{ paddingLeft: '0.2em', paddingTop: '0.2em' }}
					/>
				</p>
				<p>{price}</p>
			</footer>
		);
	} else {
		return (
			<footer
				role='contentinfo'
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
				<p
					id='nombre de like total du photographe'
					style={{ margin: 'center' }}
				>
					{totalMediaLikes}
					<BsHeartFill
						aria-labelledby='nombre de like total du photographe'
						style={{ paddingLeft: '0.2em', paddingTop: '0.2em' }}
					/>
				</p>
				<p>{price}</p>
			</footer>
		);
	}
}
