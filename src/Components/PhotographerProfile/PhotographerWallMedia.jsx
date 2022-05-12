import { useEffect, useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import('../../styles/PhotographerProfileWall.css');

export default function PhotographerWallMedia({
	name,
	wallMedia,
	totalAmountOfLike,
	setTotalAmountOfLike,
	isSliderOpen,
	setSliderOpen,
	index,
	currentSlide,
	setCurrentSlide,
}) {
	// setting the all the likes states
	const [isLiked, setIsLiked] = useState(false);
	let tempIsLiked = isLiked;

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
					index={index}
					onClick={handleSliderClick}
					style={{ widht: '20vw' }}
					className='photographerWall__picture'
					src={srcPath}
					alt={wallMedia.title}
				/>
			);
		} else {
			return (
				<video
					index={index}
					onClick={handleSliderClick}
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
		} else {
			tempTotalAmoutOfLike++;
			tempIsLiked = true;
			tempMediaLike++;
		}
		setIsLiked(tempIsLiked);
		setIsTotalMediaLike(tempMediaLike);
		setTotalAmountOfLike(tempTotalAmoutOfLike);
	};

	// handling slider openning and closing
	let tempsSliderOpen = isSliderOpen;

	const handleSliderClick = (e) => {
		tempsSliderOpen ? (tempsSliderOpen = false) : (tempsSliderOpen = true);

		// getting the index from the event
		let attributeValue = parseInt(e.target.getAttribute('index'));
		//setting the clicked media index as currentSlide
		setCurrentSlide(attributeValue);

		setSliderOpen(tempsSliderOpen);
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
					{isLiked ? (
						<BsHeart className='photographerWall__likes--logo' />
					) : (
						<BsHeartFill className='photographerWall__likes--logo' />
					)}
				</div>
			</figcaption>
		</figure>
	);
}
