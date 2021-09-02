import React from 'react'
import Carousel from "react-elastic-carousel";
import PetCard from './PetCard';
import Dog1 from '../dummy/images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg'
import Dog2 from '../dummy/images/alan-king-KZv7w34tluA-unsplash.jpg'
import Dog3 from '../dummy/images/charles-deluvio-Mv9hjnEUHR4-unsplash.jpg'
import Dog4 from '../dummy/images/charles-deluvio-pOUA8Xay514-unsplash.jpg'


const CarouselPets = () => {
    //for phone use a prop "verticalMode"
    return (
        <Carousel itemsToShow={3} itemsToScroll={2}>
            <PetCard src={Dog1}/>
            <PetCard src={Dog2}/>
            <PetCard src={Dog3}/>
            <PetCard src={Dog4}/>
            <PetCard src={Dog1}/>
            <PetCard src={Dog2}/>
            <PetCard src={Dog3}/>
            <PetCard src={Dog4}/>
            <PetCard src={Dog4}/>
            <PetCard src={Dog1}/>
            <PetCard src={Dog2}/>
            <PetCard src={Dog3}/>
            <PetCard src={Dog4}/>
        </Carousel>
    )
}

export default CarouselPets
