import React, {useState} from 'react'
import PetCard from './PetCard'

const SavedSearches = ({handleFavouritesClick}) => {

	const [favouriteList, setFavouriteList] = useState([]);

    return (
        <div className="app-container container">
            saved searches

            <PetCard/>
        </div>
    )
}

export default SavedSearches
