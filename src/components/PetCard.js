import React from 'react'
import { Heart, Location } from '../icons/icons'
import {Link} from 'react-router-dom'

const PetCard = ({src}) => {
    return (
        <Link to="#" className="card">
            <div className="card__image">
                <img src={src} alt="dog portrait"/>
            </div> 
            <div className="card__content">
                <div className="card__content--top">
                    <div className="card__title">Lily</div>
                    <button className="card__like--icon">
                        <Heart/>
                    </button>
                </div>
                <div className="card__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>1 year old</p>
                </div>
                <div className="card__location">
                    <div className="card__location--icon">
                        <Location/>
                    </div>
                    <div className="card__location--name">
                        <p>Berlin, Germany (1,5km)</p>
                    </div>
                </div>  
            </div>           
        </Link>
    )
}

export default PetCard
