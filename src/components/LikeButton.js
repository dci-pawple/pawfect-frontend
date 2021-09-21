import React, { useState, useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { Link } from "react-router-dom";

const LikeButton = ( { pet } ) => {
	//console.log("pet.usersFavorite",pet.usersFavorite);
	const [likeIcon, setLikeIcon] = useState( "black" );
	const [loginText, setLoginText] = useState( "" )
	const { userId } = useContext( MyContext );
	const { login } = useContext( MyContext );
	const iconStyleFilled = "far fa-heart";
	const iconStyleBorder = "fas fa-heart";
	const { favouritePetsIds, setFavouritePetsIds } = useContext( MyContext );

	const btnStyle = {
		boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
		borderRadius: "10px",
		padding: "0.5rem",
		fontSize: "1rem",
	};

	const savePet = async pet => {
		try {
			const result = await fetch( `http://localhost:4000/users/save`, {
				method: "PATCH",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify( { user_id: userId, pet_id: pet._id } ),
			} )
			const data = await result.json();
			return data;

		}
		catch ( err ) {
			console.log( err.response );
			return;
		}
	};

	useEffect( () => {
		setLikeIcon( pet.usersFavorite === true ? "#f76c6c" : "black" )
	}, [pet] )




	return (
		<>
			{ login && login ? (
				<button
					className='card__like--icon'
					data-petid={ pet && pet._id }
					onClick={ async e => {
						likeIcon === "black"
							? setLikeIcon( "#f76c6c" )
							: setLikeIcon( "black" );
						const {savedFavorites} = await savePet( pet );

						console.log("savedFavorites",savedFavorites)
						// 							setTimeout(()=>{
						// 								console.log("waiting...")
						// 								
						// 
						// 							},4000)
						setFavouritePetsIds(savedFavorites)
						console.log( "petId: => ", pet._id )
						console.log( "userId: => ", userId )
					} }>


					<i className={ likeIcon === "black" ? iconStyleFilled : iconStyleBorder } style={ { color: likeIcon } }></i>
				</button>
			) : (
				<button
					className='card__like--icon'
					onClick={ () => setLoginText( "Login to like it" ) }>
					<i className='far fa-heart' style={ { color: likeIcon } }></i>
					<Link to='/login' className='card__login-btn'>
						<button style={ loginText === "" ? { display: "none" } : btnStyle }>
							{ loginText }
						</button>
					</Link>
				</button>
			) }
		</>
	);
};

export default LikeButton;
