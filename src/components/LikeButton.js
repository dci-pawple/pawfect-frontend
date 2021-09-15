import React, { useState, useContext} from "react";
import MyContext from "../context/MyContext";

const LikeButton = ({ pet}) => {
	const [likeIcon, setLikeIcon] = useState("black");
	const { userId} = useContext(MyContext);

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
			.then(res => console.log("saving to favourites"))
			.catch(err => console.log(err.response));
	};

	return (
		<button
			className='card__like--icon'
			data-petid={pet && pet._id}
			onClick={e => {
                	likeIcon === "black"
			    ? setLikeIcon("#f76c6c")
			    : setLikeIcon("black");
				savePet(pet);
			}}>
			<i className='fas fa-heart' style={{ color: likeIcon }}></i>
		</button>
	);
};

export default LikeButton;
