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
// class import
import Photographer from '../Models/Photographer';

export default function App() {
	// accessing the data
	const { photographers } = data;

	console.log(data);

	const test = photographers.map((photographer) => {
		photographer = new Photographer();
	});

	console.log(test);

	// transfering the data as a State
	const [photographersDatas, setPhotographerList] = useState(photographers);

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home photographersDatas={photographersDatas} />}
				/>
				<Route
					path='/profil/:id'
					element={<Profile photographersDatas={photographersDatas} />}
				/>
				<Route path='/*' element={<BadRequest />} />
			</Routes>
		</>
	);
}
