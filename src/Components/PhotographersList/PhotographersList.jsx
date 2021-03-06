import PhotographerFactory from '../../factories/PhotographerFactory';
import('../../styles/PhotographersLists.css');

export default function PhotographersList({ photographersDatas }) {
	const photographersCardsArray = photographersDatas.map((photographerData) => {
		return (
			<PhotographerFactory
				photographerData={photographerData}
				key={photographerData.id}
			/>
		);
	});

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
