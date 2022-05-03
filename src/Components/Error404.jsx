import { Link } from 'react-router-dom';
import '../styles/Error404.css';

export default function Error404() {
	return (
		<main className='mainContent'>
			<h2 className='mainContent__title'>
				Désolé, la page que vous voulez accéder n'existe pas !
			</h2>
			<p className='mainContent__text'>Pour revenir sur la page principal</p>
			<button type='button' className='mainContent__Btn'>
				<Link to='/' className='mainContent__Btn--text'>
					Cliquer ici
				</Link>
			</button>
		</main>
	);
}
