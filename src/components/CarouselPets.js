import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Carousel from "react-elastic-carousel";
import PetCard from './PetCard';


const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const CarouselPets = () => {
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
        <div className="carousel-container container">
            <h2>
                Pets Available for adoption
            </h2>
                <Carousel itemsToShow={3} breakPoints={breakPoints}>
                    {petsList.map(pet => (
                        <PetCard pet={pet} key={pet._id}/>
                    ))}
                </Carousel>


                <button className="btn__see-all">
                    <Link to="/gallery">See all</Link>
                </button>

        </div>
    )
}

export default CarouselPets
