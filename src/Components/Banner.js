import '../styles/Banner.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Banner() {
	const params = useParams();

	// If on any Profile delete the h1 before rendering
	if (params === {}) {
		return (
			<header className='banner'>
				<nav>
					<Link to='/'>
						<img
							className='banner__logo'
							src='/assets/images/logo.png'
							alt='Fisheye Home page'
						/>
					</Link>
				</nav>
				<h1 className='banner__title'>Nos photographes</h1>
			</header>
		);
	}
	return (
		<header className='banner'>
			<nav>
				<Link to='/'>
					<img
						className='banner__logo'
						src='/assets/images/logo.png'
						alt='Fisheye Home page'
					/>
				</Link>
			</nav>
		</header>
	);
}
