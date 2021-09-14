import React, {useEffect, useState} from 'react'
import PetCard from './PetCard'

const SavedSearches = () => {
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
			<h2>Saved Searches</h2>
			<div className='gallery__grid-container'>
				{petsList.map((pet, index) => (
					<PetCard pet={pet} petData={pet} key={pet._id} />
				))}
			</div>
		</div>
    )
}

export default SavedSearches
