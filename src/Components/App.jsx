// React import
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// photographer Data
import data from '../data/photographers.json';
// Style reset import
import '../styles/App.css';
// Routes import
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import BadRequest from '../routes/BadRequest';
import MediaSlider from './PhotographerProfile/MediaSlider';

export default function App() {
	// accessing the data
	const { photographers, media } = data;

	// transfering the data as a State
	const [photographersDatas, setPhotographerList] = useState(photographers);
	const [mediasDatas, setMediasDatas] = useState(media);

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home photographersDatas={photographersDatas} />}
				/>
				<Route
					path='/profil/:id'
					element={
						<Profile
							photographersDatas={photographersDatas}
							mediasDatas={mediasDatas}
						/>
					}
				/>
				<Route path='/test' element={<MediaSlider />} />
				<Route path='/*' element={<BadRequest />} />
			</Routes>
		</>
	);
}
