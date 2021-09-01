import React from 'react'
import Carousel from "react-elastic-carousel";
import PetCard from './PetCard';


const CarouselPets = () => {
    return (
        <Carousel>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
            <PetCard/>
        </Carousel>
    )
}

export default CarouselPets
