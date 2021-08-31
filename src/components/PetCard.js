import React from 'react'
import { Heart, Location } from '../icons/icons'

const PetCard = () => {
    return (
        // eslint-disable-next-line
        <a href="#" className="card">
            <div className="card__image">
                {/* <img src="../images/charles-deluvio-pOUA8Xay514-unsplash.jpg" alt="a dog" /> */}
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
    )
}

export default PetCard
