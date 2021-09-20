import React, { useEffect, useState,useContext } from "react";
import GalleryFilter from "../components/GalleryFilter";
import PetCard from "../components/PetCard";
import MyContext from '../context/MyContext'

const Gallery = () => {
  const { filteredData, setFilteredData } = useContext(MyContext)
	const [petsList, setPetsList] = useState([]);
	 const {login, setLogin} = useContext(MyContext)



	return (
		<div className='app-container container'>
			<h2>Pets available:</h2>
			<GalleryFilter/>
			<div className='gallery__grid-container'>

				{filteredData && filteredData.map((pet, index) => (
					<PetCard pet={pet} petData={pet} key={pet._id} />
				))}
			</div>
		</div>
	);
};

export default Gallery
