import React, { useState, useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { Link } from "react-router-dom";

const LikeButton = ({ pet, favouritesList, clickFavourites }) => {
	const [likeIcon, setLikeIcon] = useState(
		pet.usersFavorite === true ? "#f76c6c" : "black"
	);
	const [loginText, setLoginText] = useState("");
	const { userId } = useContext(MyContext);
	const { login } = useContext(MyContext);

	const btnStyle = {
		boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
		borderRadius: "10px",
		padding: "0.5rem",
		fontSize: "1rem",
	};

	const savePet = pet => {
		fetch(`http://localhost:4000/users/save`, {
			method: "PATCH",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ user_id: userId, pet_id: pet._id }),
		})
			.then(data => data.json())
			.then(res => console.log("saving to favourites", res))
			.catch(err => console.log(err.response));
	};


	console.log("click favourites ", clickFavourites);
	
	return (
		<>
			{login && login ? (
				<button
					className='card__like--icon'
					data-petid={pet && pet._id}
					onClick={e=> {
						likeIcon === "black"
							? setLikeIcon("#f76c6c")
							: setLikeIcon("black");
							savePet(pet);
							clickFavourites();
					}}>
					<i className='fas fa-heart' style={{ color: likeIcon }}></i>
				</button>
			) : (
				<button
					className='card__like--icon'
					onClick={() => setLoginText("Login to like it")}>
					<i className='fas fa-heart' style={{ color: likeIcon }}></i>
					<Link to='/login' className='card__login-btn'>
						<button style={loginText === "" ? { display: "none" } : btnStyle}>
							{loginText}
						</button>
					</Link>
				</button>
			)}
		</>
	);
};

export default LikeButton;
