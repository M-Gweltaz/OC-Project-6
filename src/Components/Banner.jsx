import '../styles/Banner.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Banner({ isContactFormOpen, isSliderOpen }) {
	const params = useParams();
	// If on any Profile delete the h1 before rendering

	switch (true) {
		// If we are at the homepage
		case Object.keys(params).length === 0:
			return (
				<header className='banner' role='banner'>
					<nav>
						<Link to='/' aria-label='homepage navigation'>
							<img
								className='banner__logo'
								src={logo}
								alt='Fisheye Home page'
							/>
						</Link>
					</nav>
					<h1 className='banner__title'>Nos photographes</h1>
				</header>
			);
			break;

		// Setting bg if a modal is open
		case isContactFormOpen || isSliderOpen:
			return (
				<header className='banner' role='banner' style={{ opacity: 0.5 }}>
					<nav>
						<Link to='/' aria-label='homepage navigation'>
							<img
								className='banner__logo'
								src={logo}
								alt='Fisheye Home page'
							/>
						</Link>
					</nav>
				</header>
			);
			break;

		// if we are at the profile page
		default:
			return (
				<header className='banner' role='banner'>
					<nav>
						<Link to='/' aria-label='homepage navigation'>
							<img
								className='banner__logo'
								src={logo}
								alt='Fisheye Home page'
							/>
						</Link>
					</nav>
				</header>
			);
	}
}
