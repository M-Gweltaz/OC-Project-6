import { useEffect, useState } from 'react';
import blackLike from '../../assets/icons/black_like.svg';
import redLike from '../../assets/icons/red_like.svg';
import('../../styles/PhotographerWallMedia.css');

export default function PhotographerWallMedia({
	name,
	wallMedia,
	totalAmountOfLike,
}) {
	// setting src state
	const [isPicture, setisPicture] = useState(true);
	let tempIsPicture = isPicture;

	let srcMediaPaths;

	// checking the given media and updating the src path and src type
	if (wallMedia.image) {
		srcMediaPaths = `${name}/${wallMedia.image}`;
		tempIsPicture = true;
	} else {
		srcMediaPaths = `${name}/${wallMedia.video}`;
		tempIsPicture = false;
	}

	// updating the src state
	useEffect(() => setisPicture(tempIsPicture), []);

	// requiring the media given the src type
	let srcPath = require(`../../assets/photographers/${srcMediaPaths}`);

	const mediaRender = (srcPath) => {
		if (isPicture) {
			return (
				<img
					style={{ widht: '20vw' }}
					className='photographerWall__picture'
					src={srcPath}
					alt={wallMedia.title}
				/>
			);
		} else {
			return (
				<video
					style={{ widht: '20vw' }}
					className='photographerWall__picture'
					src={srcPath}
					controls
				/>
			);
		}
	};

	return (
		<figure>
			{mediaRender(srcPath)}
			<figcaption className='photographerWall__description'>
				<h2 className='photographerWall__description--title'>
					{wallMedia.title}
				</h2>
				<div className='photographerWall__likes'>
					<p className='photographerWall__likes--total'>{wallMedia.likes}</p>
					<img src={blackLike} alt='likes' />
				</div>
			</figcaption>
		</figure>
	);
}

// !!!! OLD WAY !!!!!

// // setting src state
// const [isPicture, setisPicture] = useState(true);
// let tempIsPicture = isPicture;

// // fake like number
// const fakeLikeNumber = Math.floor(Math.random() * 100);

// const minPicturesWallPaths = picturesWallPaths.replace(
// 	/\.\.\/\.\.\/assets\/photographers\//g,
// 	``
// );

// let picture = require(`../../assets/photographers/${minPicturesWallPaths}`);

// const srcDescription = picturesWallPaths
// 	.replace(/\.\.\/\.\.\/assets\/photographers\/.+\//g, ``)
// 	.replace(/\..+/g, '')
// 	.replace(/_/g, ' ');

// const checkingFormat = (picture) => {
// 	if (picture.includes('mp4')) {
// 		tempIsPicture = false;
// 	} else {
// 		tempIsPicture = true;
// 	}
// };
// checkingFormat(picture);

// // updating the state
// useEffect(() => setisPicture(tempIsPicture), []);

// // rendering correct HTML tag considering the file src
// const adaptedSrcTag = (src) => {
// 	if (src) {
// 		return (
// 			<img
// 				style={{ widht: '20vw' }}
// 				className='photographerWall__picture'
// 				src={picture}
// 				alt={srcDescription}
// 			/>
// 		);
// 	} else {
// 		return (
// 			<video
// 				style={{ widht: '20vw' }}
// 				className='photographerWall__picture'
// 				src={picture}
// 				controls
// 			/>
// 		);
// 	}
// };

// return (
// 	<figure>
// 		{adaptedSrcTag(isPicture)}
// 		<img
// 			style={{ widht: '20vw' }}
// 			className='photographerWall__picture'
// 			src={picture}
// 			alt={photographerMedia.alt}
// 		/>
// 		<figcaption className='photographerWall__description'>
// 			<h2 className='photographerWall__description--title'>
// 				{photographerMedia.title}
// 			</h2>
// 			<div className='photographerWall__likes'>
// 				<p className='photographerWall__likes--total'>
// 					{photographerMedia.likes}
// 				</p>
// 				<img src={blackLike} alt='likes' />
// 			</div>
// 		</figcaption>
// 	</figure>
// );
