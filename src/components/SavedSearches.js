import React, { useEffect, useState, useContext } from "react";
import PetCard from "./PetCard";
import MyContext from "../context/MyContext";

const SavedSearches = () => {
	const [favouritesList, setFavouritesList] = useState([]);
	const { renderFavourite } = useContext(MyContext);
	const { userId } = useContext(MyContext);

	useEffect(() => {
		const fetchFavourites = () => {
			fetch(`http://localhost:4000/pets/filter?favorites=true&userId=${userId}`)
				.then(data => data.json())
				.then(response => {
					console.log("response in favourites =>", response);
					setFavouritesList(response.data);
				})
				.catch(err => console.error("error in favourites =>", err));
		};

		fetchFavourites();
	}, [userId, renderFavourite]);

	return (
		<div className='app-container container'>
			<h2>Saved Searches</h2>
			<div className='gallery__grid-container'>
				{favouritesList &&
					favouritesList.map((favouritePet, index) => (
						<PetCard
							favouritesList={favouritesList}
							pet={favouritePet}
							key={index}
						/>
					))}
			</div>
		</div>
	);
};

export default SavedSearches;
