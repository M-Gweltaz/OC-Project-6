// React import
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// photographer Data
import data from '../data/photographers.json';
// Style reset import
import '../styles/App.css';
// Routes import
import Home from '../routes/Home';
import Profile from '../routes/Profile';

export default function App() {
	// accessing the data
	const { photographers, media } = data;

	// transfering the data as a State
	const [photographersDatas, setPhotographerList] = useState(photographers);
	const [mediasDatas, setMediasDatas] = useState(media);

	// checking if contactForm is open
	const [isContactFormOpen, setContactFormOpen] = useState(false);

	// checking if Slider is open
	const [isSliderOpen, setSliderOpen] = useState(false);

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<Home
							photographersDatas={photographersDatas}
							isSliderOpen={isSliderOpen}
							isContactFormOpen={isContactFormOpen}
						/>
					}
				/>
				<Route
					path='/profil/:id'
					element={
						<Profile
							photographersDatas={photographersDatas}
							mediasDatas={mediasDatas}
							isSliderOpen={isSliderOpen}
							setSliderOpen={setSliderOpen}
							isContactFormOpen={isContactFormOpen}
							setContactFormOpen={setContactFormOpen}
						/>
					}
				/>
				<Route path='/*' element={<Navigate replace to='/' />} />
			</Routes>
		</>
	);
}
