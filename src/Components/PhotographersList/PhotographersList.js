import PhotographersCards from './PhotographersCards';

export default function PhotographersList({ photographersDatas }) {
	// looping through each data to render each PhotographersCards components
	const photographersCardsArray = photographersDatas.map((photographerData) => (
		<PhotographersCards
			photographerData={photographerData}
			key={photographerData.id}
		/>
	));

	return (
		<main
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridGap: '2em',
				justifyItems: 'center',
				margin: '2em',
			}}
		>
			{photographersCardsArray}
		</main>
	);
}
