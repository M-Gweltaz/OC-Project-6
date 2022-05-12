export default function PhotographerWallSorter() {
	return (
		<section
			style={{
				display: 'flex',
				alignItems: 'center',
				width: '25vw',
				marginLeft: '4em',
				padding: '2em',
			}}
		>
			<label
				htmlFor='mediaWallSorter'
				style={{ paddingRight: '2em', fontWeight: 'bold' }}
			>
				Trier par
			</label>
			<select
				name='mediaWallSorter'
				id='mediaWallSorter'
				style={{
					backgroundColor: '#901C1C',
					color: 'white',
					padding: '0.5em',
					fontWeight: 'bold',
				}}
			>
				<option value='Popularité'>Popularité</option>
				<option value='Date'>Date</option>
				<option value='Titre'>Titre</option>
			</select>
		</section>
	);
}
