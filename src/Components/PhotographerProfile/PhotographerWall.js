import { useEffect, useState } from 'react';
import PhotographerWallMedia from './PhotographerWallMedia';

export default function PhotographerWall({
	name,
	photographerMedia,
	totalAmountOfLike,
}) {
	// looping through all picture path to render each picture component
	const wallMedias = photographerMedia.map((wallMedia, index) => (
		<PhotographerWallMedia
			key={wallMedia.id}
			name={name}
			wallMedia={wallMedia}
			totalAmountOfLike={totalAmountOfLike}
		/>
	));

	return (
		<section
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridGap: '2em',
				justifyItems: 'center',
				margin: '2em',
			}}
		>
			{wallMedias}
		</section>
	);
}
