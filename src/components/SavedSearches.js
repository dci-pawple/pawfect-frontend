import React, {useEffect, useState} from 'react'
import PetCard from './PetCard'

const SavedSearches = () => {
	const [favouritesList, setFavouritesList] = useState([]);


	useEffect(() => {
		const fetchData = async () => {
			try {
				fetch(`http://localhost:4000/users`)
					.then(data => data.json())
					.then(res => {
						console.log("res.data =>", res.data)
						setFavouritesList(res.data);
					});
			} catch (err) {
				  console.log('Error while fetching favourite pets =>', err)
			}
		};
		fetchData();
	}, []);

    return (
        <div className='app-container container'>
			<h2>Saved Searches</h2>
			<div className='gallery__grid-container'>
				{favouritesList.map((pet, index) => (
					<PetCard pet={pet} petData={pet} key={pet._id} />
				))}
			</div>
		</div>
    )
}

export default SavedSearches
