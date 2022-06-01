export default function PhotographerWallMediaSorted({
	photographerMedia,
	setWallMediaSorted,
	isContactFormOpen,
	isSliderOpen,
}) {
	// handling wallMedia sorting select
	const handleWallMediaSorterChange = (e) => {
		// using a temp state variable
		let tempWallMediaSorted = { photographerMedia, sortedBy: null };

		// passing through each possible case
		switch (e.target.value) {
			case 'Popularité':
				// aria-selected attribute for accessibility
				e.target.children[1].setAttribute('aria-selected', 'true');
				e.target.children[0].removeAttribute('aria-selected');
				e.target.children[2].removeAttribute('aria-selected');

				tempWallMediaSorted.sortedBy = 'Popularity';
				// sorting through number of like
				tempWallMediaSorted.photographerMedia.sort((a, b) => {
					return b.likes - a.likes;
				});
				break;

			case 'Date':
				// aria-selected attribute for accessibility
				e.target.children[0].setAttribute('aria-selected', 'true');
				e.target.children[1].removeAttribute('aria-selected');
				e.target.children[2].removeAttribute('aria-selected');

				tempWallMediaSorted.sortedBy = 'Date';
				// sorting released date
				tempWallMediaSorted.photographerMedia.sort((a, b) => {
					let c = new Date(a.date);
					let d = new Date(b.date);
					return c - d;
				});
				break;

			case 'Titre':
				// aria-selected attribute for accessibility
				e.target.children[2].setAttribute('aria-selected', 'true');
				e.target.children[0].removeAttribute('aria-selected');
				e.target.children[1].removeAttribute('aria-selected');

				tempWallMediaSorted.sortedBy = 'Title';
				// sorting through title alphabetical order
				tempWallMediaSorted.photographerMedia.sort((a, b) => {
					if (a.title.toLowerCase() < b.title.toLowerCase()) {
						return -1;
					}
					if (a.title.toLowerCase() > b.title.toLowerCase()) {
						return 1;
					}
					return 0;
				});
				break;
		}

		// merging the temps variable with the state
		setWallMediaSorted(tempWallMediaSorted);
	};

	// handling bg opacity if modal is open
	if (isContactFormOpen || isSliderOpen) {
		return (
			<section
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '25vw',
					marginLeft: '4em',
					padding: '2em',
					opacity: 0.5,
				}}
			>
				<label
					htmlFor='wallMediaSorter'
					style={{ paddingRight: '2em', fontWeight: 'bold' }}
				>
					Trier par
				</label>
				<select
					name='wallMediaSorter'
					id='wallMediaSorter'
					onChange={handleWallMediaSorterChange}
					style={{
						backgroundColor: '#901C1C',
						color: 'white',
						padding: '0.5em',
						fontWeight: 'bold',
						borderRadius: '0.5em',
					}}
				>
					<option value='Date'>Date</option>
					<option value='Popularité'>Popularité</option>
					<option value='Titre'>Titre</option>
				</select>
			</section>
		);
	} else {
		return (
			<section
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '25vw',
					marginLeft: '4em',
					padding: '2em',
				}}
			>
				<label
					htmlFor='wallMediaSorter'
					style={{ paddingRight: '2em', fontWeight: 'bold' }}
				>
					Trier par
				</label>
				<select
					name='wallMediaSorter'
					id='wallMediaSorter'
					onChange={handleWallMediaSorterChange}
					style={{
						backgroundColor: '#901C1C',
						color: 'white',
						padding: '0.5em',
						fontWeight: 'bold',
						borderRadius: '0.5em',
					}}
				>
					<option value='Date'>Date</option>
					<option value='Popularité'>Popularité</option>
					<option value='Titre'>Titre</option>
				</select>
			</section>
		);
	}
}
