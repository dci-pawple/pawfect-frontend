import React from 'react'
import { Heart, Location, FemaleGender } from '../icons/icons'
import {Link} from 'react-router-dom'

const PetCard = ({src,petData}) => {
    if(!petData)return 0;
    return (
        
        <Link to="#" className="card">
            <div className="card__image">
            {/* petData.photos[0].url */}
                <img src={petData.photos[0].url} alt="dog portrait"/>
            </div> 
            <div className="card__content">
                <div className="card__content--top">
                    <div className="card__name-with-gender">
                        <div className="card__title">{petData.name}</div>
                        <div className="card__gender--icon">
                            <FemaleGender/>
                        </div>
                    </div>
                    
                    <button className="card__like--icon">
                        <Heart/>
                    </button>
                </div>
                <div className="card__description">
                    <p>{petData.extras}</p>
                    <p>{petData.age} year old</p>
                </div>
                <div className="card__location">
                    <div className="card__location--icon">
                        <Location/>
                    </div>
                    <div className="card__location--name">
                        <p>Berlin, Germany (1,5km)</p>
                    </div>
                </div>  
                <button className="btn__call-to-action">
                    <Link to="/pet">Adopt me!</Link>
                </button>
            </div>           
        </Link>
    )
}

export default PetCard
