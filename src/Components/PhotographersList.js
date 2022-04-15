import { useState } from 'react';
import data from '../data/photographers.json';
import PhotographersCards from './PhotographersCards';
import '../styles/PhotographersList.css';

export default function PhotographersList() {
	// accessing the wanted data
	const { photographers } = data;
	// transfering the data as a State
	const [photographersDatas, setPhotographerList] = useState(photographers);

	// looping through each data to render each PhotographersCards components
	const test = photographersDatas.map((photographerData) => (
		<PhotographersCards
			photographerData={photographerData}
			key={photographerData.id}
		/>
	));

	return <main className='photographersList'>{test}</main>;
}
