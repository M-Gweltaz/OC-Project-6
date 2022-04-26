import { useEffect, useState } from 'react';
import PhotographerWallPicture from './PhotographerWallPicture';
import PhotographerProduct from '../../Models/PhotographerProduct';

export default function PhotographerPhotoWall({ name, totalLike }) {
	// stocking all the pictures wall paths as state
	const [picturesWallPaths, setPicturesWallPaths] = useState([]);
	// initializing our tempArray for our state
	let tempPicturePathArray;

	function importAll(result) {
		// getting all picture in the selected directory
		tempPicturePathArray = result.keys().map((picturePath) => {
			//adding the correct starting path to each picture
			let fullPicturePath = picturePath.replace(
				/\.\//g,
				`../../assets/photographers/${name}/`
			);
			// returning each path to our tempPicturePathArray
			return fullPicturePath;
		});
	}

	// Checking wich folder to search in based on the name props given
	switch (name) {
		case 'Ellie-Rose Wilkens':
			importAll(
				require.context(`../../assets/photographers/Ellie-Rose Wilkens`, true)
			);
			break;
		case 'Marcel Nikolic':
			importAll(
				require.context(`../../assets/photographers/Marcel Nikolic`, true)
			);
			break;
		case 'Mimi Keel':
			importAll(require.context(`../../assets/photographers/Mimi Keel`, true));
			break;
		case 'Nabeel Bradford':
			importAll(
				require.context(`../../assets/photographers/Nabeel Bradford`, true)
			);
			break;
		case 'Rhode Dubois':
			importAll(
				require.context(`../../assets/photographers/Rhode Dubois`, true)
			);
			break;
		case 'Tracy Galindo':
			importAll(
				require.context(`../../assets/photographers/Tracy Galindo`, true)
			);
			break;
	}

	// Updatting the state with our tempPicturePathArray
	useEffect(() => setPicturesWallPaths(tempPicturePathArray), []);

	// TESTING AREA !!!!

	let test = new PhotographerProduct(
		'title',
		'fakePath',
		'fakeAlt',
		Date.now(),
		Math.floor(Math.random() * 100),
		false
	);

	// looping through all picture path to render each picture component
	const pictureWallRender = picturesWallPaths.map((pictureWallPath, index) => (
		<PhotographerWallPicture
			key={`${index} : ${name}`}
			picturesWallPaths={pictureWallPath}
			totalLike={totalLike}
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
			{pictureWallRender}
		</section>
	);
}
