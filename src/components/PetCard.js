import React, { useState } from "react";
import { Heart, Location, FemaleGender } from "../icons/icons";
import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
	// console.log("PET => ", pet)
	const [likeIcon, setLikeIcon] = useState("black");

	return (
        // Link to='/pet'
		<div className='card'>
			<div className='card__image'>
				<img src={pet.photos[0].url} alt='dog portrait' />
			</div>
			<div className='card__content'>
				<div className='card__content--top'>
					<div className='card__name-with-gender'>
						<div className='card__title'>{pet.name}</div>
						<div className='card__gender--icon'>
							{pet.gender === "male" ? (
								<i class='fas fa-mars'></i>
							) : (
								<i class='fas fa-venus'></i>
							)}
						</div>
					</div>

					<button
						className='card__like--icon'
						onClick={() => {
							likeIcon === "black"
								? setLikeIcon("#f76c6c")
								: setLikeIcon("black");
						}}>
						<i className='fas fa-heart' style={{ color: likeIcon }}></i>
					</button>

				</div>
				<div className='card__description'>
					<p><strong>habits:</strong> {pet.extras}</p>
					<p><strong>likes:</strong> {pet.likes}</p>
					<p><strong>dislikes:</strong> {pet.dislikes}</p>
					<p><strong>age:</strong> {pet.age}</p>
				</div>
				<div className='card__location'>
					<div className='card__location--icon'>
						<Location />
					</div>
					<div className='card__location--name'>
						<p>Berlin, Germany (1,5km)</p>
					</div>
				</div>
				<button
					onClick={e => console.log(e.target)}
					className='btn__call-to-action'>
					<Link to='/pet'>Adopt me!</Link>
				</button>
			</div>
		</div>
	);
};

export default PetCard;
