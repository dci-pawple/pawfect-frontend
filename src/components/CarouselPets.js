import React from 'react'
import Carousel from "react-elastic-carousel";
import PetCard from './PetCard';
import Dog1 from '../dummy/images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg'
import Dog2 from '../dummy/images/alan-king-KZv7w34tluA-unsplash.jpg'
import Dog3 from '../dummy/images/charles-deluvio-Mv9hjnEUHR4-unsplash.jpg'
import Dog4 from '../dummy/images/charles-deluvio-pOUA8Xay514-unsplash.jpg'

const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const CarouselPets = () => {
    //for phone use a prop "verticalMode"
    // itemsToScroll={2}

    return (
        <Carousel itemsToShow={3} breakPoints={breakPoints}>
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
