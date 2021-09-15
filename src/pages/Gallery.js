import React, { useEffect, useState,useContext } from "react";
import GalleryFilter from "../components/GalleryFilter";
import PetCard from "../components/PetCard";
import MyContext from '../context/MyContext'

const Gallery = () => {
  const { filteredData, setFilteredData } = useContext(MyContext)

	const [petsList, setPetsList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				fetch(`http://localhost:4000/pets`)
					.then(data => data.json())
					.then(res => {
						setPetsList(res.data);
            
					});
			} catch (err) {
				  console.log('Error while filtering =>', err)
			}
		};
		fetchData();
	}, []);

	return (
		<div className='app-container container'>
			<h2>Pets available:</h2>
			<GalleryFilter/>
			<div className='gallery__grid-container'>

				{filteredData.length!==0?filteredData.map((pet, index) => (
					<PetCard pet={pet} petData={pet} key={pet._id} />
				)):petsList.map((pet, index) => (
					<PetCard pet={pet} petData={pet} key={pet._id} />
				))}
			</div>
		</div>
	);
};

export default Gallery
