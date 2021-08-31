import React from 'react'
import { Heart, Location } from '../icons/icons'
// import Dog1 from '../images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg'

const PetCard = () => {
    return (
        <div className="container">
        {/* eslint-disable-next-line */}
        <a href="#" className="card">
            <div className="card__image">
                {/* <img src={Dog1} alt="dog wearing a rainjacket"/> */}
            </div> 
            <div className="card__content">
                <div className="card__content--top">
                    <div className="card__title">Lily</div>
                    <div className="card__like--icon">
                        <Heart/>
                    </div>
                </div>
                <div className="card__description">
                    <p>Female</p>
                    <p>1 year old</p>
                </div>
            </div> 
            <div className="card__location">
                 <div className="card__location--icon">
                    <Location/>
                 </div>
                <div className="card__location--name">
                      <p>Berlin, Germany</p>
                 </div>
            </div>       
        </a>
        </div>
    )
}

export default PetCard
