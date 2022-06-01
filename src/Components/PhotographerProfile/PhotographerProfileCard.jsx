// Component import
import PhotographerPortrait from '../PhotographerPortrait';

// Style import
import '../../styles/PhotographerProfileCard.css';

export default function PhotographerProfileCard({
	photographerModels,
	setContactFormOpen,
	isContactFormOpen,
	isSliderOpen,
}) {
	const handleClick = () => {
		// Making the body aria-hidden
		let mainWrapper = document.querySelector('#root');
		mainWrapper.setAttribute('aria-hidden', 'true');

		setContactFormOpen(true);
	};

	// handling bg opacity if modal is open
	if (isContactFormOpen || isSliderOpen) {
		return (
			<section className='photographerProfileCard' style={{ opacity: 0.5 }}>
				<header role='heading' aria-level='2'>
					<h1 className='photographerInfos__name'>{photographerModels.name}</h1>
					<p className='photographerInfos__location'>
						{photographerModels.getLocation()}
					</p>
					<p className='photographerInfos__tagline'>
						{photographerModels.tagline}
					</p>
				</header>
				<button
					className='photographerInfos__contactBtn'
					aria-label='contact modal button'
					aria-haspopup='dialog'
					onClick={handleClick}
				>
					<span className='photographerInfos__contactBtn--text'>
						Contactez-moi
					</span>
				</button>
				<PhotographerPortrait
					name={photographerModels.name}
					portrait={photographerModels.portrait}
				/>
			</section>
		);
	} else {
		return (
			<section className='photographerProfileCard'>
				<header role='heading' aria-level='2'>
					<h1 className='photographerInfos__name'>{photographerModels.name}</h1>
					<p className='photographerInfos__location'>
						{photographerModels.getLocation()}
					</p>
					<p className='photographerInfos__tagline'>
						{photographerModels.tagline}
					</p>
				</header>
				<button
					className='photographerInfos__contactBtn'
					aria-label='contact modal button'
					aria-haspopup='dialog'
					onClick={handleClick}
				>
					<span className='photographerInfos__contactBtn--text'>
						Contactez-moi
					</span>
				</button>
				<PhotographerPortrait
					name={photographerModels.name}
					portrait={photographerModels.portrait}
				/>
			</section>
		);
	}
}
