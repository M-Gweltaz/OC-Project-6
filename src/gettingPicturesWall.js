export default function gettingPicturesWall(name) {
	const picturesWallPath = [];

	function importAll(result) {
		result.keys().map((picturePath) => {
			let cleanedPicturePath = picturePath.replace(/\.\//g, '');
			picturesWallPath.push(cleanedPicturePath);
		});
		return picturesWallPath;
	}

	switch (name) {
		case 'Ellie-Rose Wilkens':
			importAll(require.context(`./assets/photographers/Mimi Keel`, true));
			break;
	}
}
