import React, {useState, useContext} from 'react'
import MyContext from "../context/MyContext";

const LikeButton = ({pet}) => {

    const [likeIcon, setLikeIcon] = useState("black");
    const { petId, setPetId } = useContext(MyContext);
    const { userId, setUserId } = useContext(MyContext);


    const savePet = (petId, userId) => {
        try {
            fetch(`http://localhost:4000/users/save`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
              body: JSON.stringify({user_id: userId, pet_id: petId})
            })
            .then(data=>data.json())
        }
        catch(err) {
            console.error('error => ', err)
        }
    }


    return (
        <button
            className="card__like--icon"
            // onClick={(e) => {
            //   likeIcon === "black"
            //     ? setLikeIcon("#f76c6c") 
            //     : setLikeIcon("black");
            // }}
            data-petid={pet && pet._id}
            onClick={(e) => {
              setPetId(pet && pet._id);
            }}
            
            >
            <i className="fas fa-heart" style={{ color: likeIcon }}></i>
          </button>
    )
}

export default LikeButton
