import React, { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
// import Dog3 from '../dummy/images/charles-deluvio-Mv9hjnEUHR4-unsplash.jpg'

const Gallery = () => {

	const [petsList, setPetsList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await fetch(`http://localhost:4000/pets`)
					.then(data => data.json())
					.then(res => {
						setPetsList(res.data);
					});
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	return (
		<div className='app-container container'>
			<h2>Pets available:</h2>
			<div className='gallery__grid-container'>
				{/* {[...Array(30).keys()].map((card, index) => (
        <PetCard src={Dog3} key={index}/>
      ))} */}

				{petsList.map((pet, index) => (
					<PetCard pet={pet} key={pet._id} />
				))}
			</div>
		</div>
	);
};

export default Gallery;
