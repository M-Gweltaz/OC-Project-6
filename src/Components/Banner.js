import '../styles/Banner.css';

export default function Banner() {
	return (
		<header className='banner'>
			<nav>
				<a href='/'>
					<img
						className='banner__logo'
						src='/assets/images/logo.png'
						alt='Fisheye Home page'
					/>
				</a>
			</nav>

			<h1 className='banner__title'>Nos photographes</h1>
		</header>
	);
}
