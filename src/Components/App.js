import '../styles/App.css';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import BadRequest from '../routes/BadRequest';

import { Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profil/:id' element={<Profile />} />
				<Route path='/*' element={<BadRequest />} />
			</Routes>
		</>
	);
}
