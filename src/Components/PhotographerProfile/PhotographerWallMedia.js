import { useEffect, useState } from 'react';
import blackLike from '../../assets/icons/black_like.svg';
import redLike from '../../assets/icons/red_like.svg';
import('../../styles/PhotographerWallMedia.css');

export default function PhotographerWallMedia({
	name,
	wallMedia,
	totalAmountOfLike,
	setTotalAmountOfLike,
}) {
	// setting the all the likes states
	const [isLiked, setIsLiked] = useState(false);
	let tempIsLiked = isLiked;

	const [likeLogoSrc, setLikeLogoSrc] = useState(blackLike);
	let tempLikeLogoSrc = likeLogoSrc;

	const [isTotalMediaLike, setIsTotalMediaLike] = useState(wallMedia.likes);
	let tempMediaLike = isTotalMediaLike;

	let tempTotalAmoutOfLike = totalAmountOfLike;

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

	// rendering the correct html tag considering the media src
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

	// Media like logic
	const handleLikeClick = () => {
		if (tempIsLiked == true) {
			tempTotalAmoutOfLike--;
			tempIsLiked = false;
			tempMediaLike--;
			tempLikeLogoSrc = blackLike;
		} else {
			tempTotalAmoutOfLike++;
			tempIsLiked = true;
			tempMediaLike++;
			tempLikeLogoSrc = redLike;
		}
		setIsLiked(tempIsLiked);
		setIsTotalMediaLike(tempMediaLike);
		setLikeLogoSrc(tempLikeLogoSrc);
		setTotalAmountOfLike(tempTotalAmoutOfLike);
	};

	return (
		<figure>
			{mediaRender(srcPath)}
			<figcaption className='photographerWall__description'>
				<h2 className='photographerWall__description--title'>
					{wallMedia.title}
				</h2>
				<div onClick={handleLikeClick} className='photographerWall__likes'>
					<p className='photographerWall__likes--total'>{isTotalMediaLike}</p>
					<img src={likeLogoSrc} alt='likes' />
				</div>
			</figcaption>
		</figure>
	);
}
