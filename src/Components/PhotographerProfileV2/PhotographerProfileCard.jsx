// Component import
import PhotographerPortrait from '../PhotographerPortrait';

// Models import
import Photographer from '../../models/Photographer';

// Style import
import '../../styles/PhotographerProfileCard.css';

export default function PhotographerProfileCard({ photographerModels }) {
	return (
		<section className='photographerProfileCard'>
			<header>
				<h1 className='photographerInfos__name'>{photographerModels.name}</h1>
				<p className='photographerInfos__location'>
					{photographerModels.getLocation()}
				</p>
				<p className='photographerInfos__tagline'>
					{photographerModels.tagline}
				</p>
			</header>
			<button className='photographerInfos__contactBtn'>
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
