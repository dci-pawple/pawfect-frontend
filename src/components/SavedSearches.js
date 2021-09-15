import React, {useEffect, useState, useContext} from 'react'
import PetCard from './PetCard'
import MyContext from "../context/MyContext";

const SavedSearches = () => {
	const [favouritesList, setFavouritesList] = useState([]);

	const { userId} = useContext(MyContext);


	useEffect(() => {
		const fetchFavourites = () => {
			fetch(`http://localhost:4000/users/${userId}`)
			// , {
			// 	method: "GET",
			// 	mode: "cors",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: JSON.stringify({ savedFavourites: favouritesList }),
			// }
			// )
				.then(data => data.json())
				.then(res => {
					console.log("pet saved to favourites", res.data.savedFavourites)
					setFavouritesList(res.data.savedFavourites)
				})
				.catch(err => console.log(err.response));
		};
		fetchFavourites()
	}, []);

    return (
        <div className='app-container container'>
			<h2>Saved Searches</h2>
			<h2>JSON stringify: {JSON.stringify({ savedFavourites: favouritesList })}</h2>
			<div className='gallery__grid-container'>
				{favouritesList.map((pet, index) => (
					<PetCard pet={pet} key={pet._id} />
				))}
			</div>
		</div>
    )
}

export default SavedSearches
