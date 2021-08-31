import React from 'react'

const PetCard = () => {
    return (
        // eslint-disable-next-line
        <a href="#" className="card__container">
            <div className="card__image">
                {/* <img src="../images/charles-deluvio-pOUA8Xay514-unsplash.jpg" alt="a dog" /> */}
            </div> 
            <div className="card__content">
                <div className="card__content--top">
                    <div className="card__title">Lily</div>
                    <img src="../icons/heart-regular.svg" alt="heart icon" />
                </div>
                <div className="card__description">
                    <p>Female</p>
                    <p>1 year old</p>
                </div>
                <div className="card__location">
                    <div className="card__location--icon">
                        <img src="../icons/location-arrow-solid.svg" alt="location-icon" />
                    </div>
                    <div className="card__location--name">
                        <p>Berlin, Germany</p>
                    </div>
                </div>
            </div>        
        </a>
    )
}

export default PetCard
