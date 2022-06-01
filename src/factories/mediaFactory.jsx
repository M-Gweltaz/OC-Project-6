// React import
import { useState } from 'react';

// Models import
import Media from '../models/Media';

// Style import
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import('../styles/PhotographerProfileWall.css');

export default function MediaFactory({
	index,
	sortedBy,
	media,
	name,
	totalMediaLikes,
	setTotalMediaLikes,
	setSliderOpen,
	setCurrentSlide,
}) {
	// destructuring the data object
	const { id, photographerId, title, video, image, likes, date, price } = media;

	// Instanciating data into our models
	const mediaModel = new Media(
		id,
		photographerId,
		name,
		title,
		image ? image : video,
		likes,
		date,
		price
	);

	// Requiring the asset
	let srcPath = mediaModel.getMediaPath();

	// setting the all the likes states
	const [isLiked, setIsLiked] = useState({ like: false, total: media.likes });

	// handle like click event
	const handleLikeClick = () => {
		// temp State var
		let tempIsLiked = isLiked;
		let tempMediaLikes = totalMediaLikes;

		// updating temp State var
		if (tempIsLiked.like === true) {
			tempMediaLikes--;
			tempIsLiked.like = false;
			tempIsLiked.total--;
		} else {
			tempMediaLikes++;
			tempIsLiked.like = true;
			tempIsLiked.total++;
		}

		// updating State with tempState changed value
		setIsLiked({ like: tempIsLiked.like, total: tempIsLiked.total });
		setTotalMediaLikes(tempMediaLikes);
	};

	const handleLikeKeyDown = (e) => {
		// temp State var
		let tempIsLiked = isLiked;
		let tempMediaLikes = totalMediaLikes;

		// updating temp State var
		switch (true) {
			case e.key === 'Escape' && tempIsLiked.like === true:
				tempMediaLikes--;
				tempIsLiked.like = false;
				tempIsLiked.total--;
				break;

			case e.key === 'Enter' && tempIsLiked.like === false:
				tempMediaLikes++;
				tempIsLiked.like = true;
				tempIsLiked.total++;
				break;

			case e.key === 'Enter' && tempIsLiked.like === true:
				tempMediaLikes--;
				tempIsLiked.like = false;
				tempIsLiked.total--;
				break;

			default:
				return;
		}

		// updating State with tempState changed value
		setIsLiked({ like: tempIsLiked.like, total: tempIsLiked.total });
		setTotalMediaLikes(tempMediaLikes);
	};

	// handle slider opening event
	const sliderOpening = (e) => {
		// Making the body aria-hidden
		let mainWrapper = document.querySelector('#root');
		mainWrapper.setAttribute('aria-hidden', 'true');

		// temp State var
		let tempsSliderOpen;

		// updating temp State var
		tempsSliderOpen ? (tempsSliderOpen = false) : (tempsSliderOpen = true);

		// getting the index from the event
		let attributeValue = parseInt(e.target.getAttribute('index'));

		//setting the clicked media index as currentSlide
		setCurrentSlide(attributeValue);
		setSliderOpen(tempsSliderOpen);
	};

	const handleSliderClick = (e) => {
		sliderOpening(e);
	};

	const handleSliderKeyDown = (e) => {
		if (e.key === 'Enter') {
			sliderOpening(e);
		}
	};

	return (
		<figure>
			{mediaModel.getMediaRender(
				srcPath,
				index,
				handleSliderClick,
				handleSliderKeyDown
			)}
			<figcaption
				className='photographerWall__description'
				aria-labelledby={`${title}`}
			>
				<h2 className='photographerWall__description--title'>
					{mediaModel.title}
				</h2>
				<div
					onClick={handleLikeClick}
					onKeyDown={handleLikeKeyDown}
					className='photographerWall__likes'
					tabIndex='0'
					id={`Nombre de like de ${title}`}
					role='button'
				>
					<p className='photographerWall__likes--total'>{isLiked.total}</p>
					{isLiked.like ? (
						<BsHeart
							className='photographerWall__likes--logo'
							role='img'
							aria-label="Coeur rempli : vous avez aimé l'image"
							aria-labelledby={`Nombre de like de ${title}`}
						/>
					) : (
						<BsHeartFill
							className='photographerWall__likes--logo'
							role='img'
							aria-label="Coeur vide : vous n'avez pas aimé l'image"
							aria-labelledby={`Nombre de like de ${title}`}
						/>
					)}
				</div>
			</figcaption>
		</figure>
	);
}
