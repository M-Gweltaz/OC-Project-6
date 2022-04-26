import { useEffect, useState } from 'react';
import blackLike from '../../assets/icons/black_like.svg';
import redLike from '../../assets/icons/red_like.svg';
import('../../styles/PhotographerPhotoWall.css');

export default function PhotographerWallPicture({
	picturesWallPaths,
	totalLike,
}) {
	// setting src state
	const [isPicture, setisPicture] = useState(true);
	let tempIsPicture = isPicture;

	// fake like number
	const fakeLikeNumber = Math.floor(Math.random() * 100);

	const minPicturesWallPaths = picturesWallPaths.replace(
		/\.\.\/\.\.\/assets\/photographers\//g,
		``
	);

	let picture = require(`../../assets/photographers/${minPicturesWallPaths}`);

	const srcDescription = picturesWallPaths
		.replace(/\.\.\/\.\.\/assets\/photographers\/.+\//g, ``)
		.replace(/\..+/g, '')
		.replace(/_/g, ' ');

	const checkingFormat = (picture) => {
		if (picture.includes('mp4')) {
			tempIsPicture = false;
		} else {
			tempIsPicture = true;
		}
	};
	checkingFormat(picture);

	// updating the state
	useEffect(() => setisPicture(tempIsPicture), []);

	// rendering correct HTML tag considering the file src
	const adaptedSrcTag = (src) => {
		if (src) {
			return (
				<img
					style={{ widht: '20vw' }}
					className='photographerWall__picture'
					src={picture}
					alt={srcDescription}
				/>
			);
		} else {
			return (
				<video
					style={{ widht: '20vw' }}
					className='photographerWall__picture'
					src={picture}
					controls
				/>
			);
		}
	};

	return (
		<figure>
			{adaptedSrcTag(isPicture)}
			<figcaption className='photographerWall__description'>
				<h2 className='photographerWall__description--title'>
					{srcDescription}
				</h2>
				<div className='photographerWall__likes'>
					<p className='photographerWall__likes--total'>{fakeLikeNumber}</p>
					<img src={blackLike} alt='likes' />
				</div>
			</figcaption>
		</figure>
	);
}
