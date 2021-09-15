import React, { useEffect, useState, useContext } from "react";
import PetCard from "./PetCard";
import MyContext from "../context/MyContext";

const SavedSearches = () => {
	const [favouritesList, setFavouritesList] = useState([]);
	// new use state of a pet object
	
	const { userId } = useContext(MyContext);

	useEffect(() => {
		console.log("userId => ", userId);
		const fetchFavourites = () => {
			fetch(`http://localhost:4000/users/${userId}`)
				.then(data => data.json())
				.then(res => {
					console.log("pet saved to favourites", res.data.savedFavorites);
					setFavouritesList(res.data.savedFavorites);
				})
				.catch(err => console.log(err.response));
		};
		fetchFavourites();
	}, []);

	return (
		<div className='app-container container'>
			<h2>Saved Searches</h2>
			<div className='gallery__grid-container'>
				{favouritesList.length &&
					favouritesList.map((petId, index) => {
						console.log("vgdgdfhg");
						return <PetCard pet={petId} key={index} />;
					})}
					{console.log("favourite List =>", favouritesList)}
			
			</div>
		</div>
	);
};

export default SavedSearches;
