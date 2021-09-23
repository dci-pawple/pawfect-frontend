import React, { useContext } from "react";
// import { Location } from "../icons/icons";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";
import LikeButton from "./LikeButton";

const PetCard = ({ pet }) => {
  const { setPetId } = useContext(MyContext);

  return (
    <div className="card">
      <div className="card__image">
        <img src={pet && pet.photos[0].url} alt="dog portrait" />
      </div>
      <div className="card__content">
        <div className="card__content--top">
          <div className="card__name-with-gender">
            <div className="card__title">{pet && pet.name}</div>
            <div className="card__gender--icon">
              {pet && pet.gender === "male" ? (
                <i class="fas fa-mars"></i>
              ) : (
                <i class="fas fa-venus"></i>
              )}
            </div>
          </div>
          <LikeButton pet={pet} />
        </div>

        <div className="card__description">
          <p>
            <strong>{pet && pet.habits ? "Habits:" : ""}</strong>{" "}
            {pet && pet.extras}
          </p>
          <p>
            <strong>{pet && pet.likes ? "Likes:" : ""}</strong>{" "}
            {pet && pet.likes}
          </p>
          <p>
            <strong>{pet && pet.dislikes ? "Dislikes:" : ""}</strong>{" "}
            {pet && pet.dislikes}
          </p>
          <p>
            <strong>Age category:</strong> {pet && pet.age}
          </p>
        </div>
        {/* <div className="card__location">
          <div className="card__location--icon">
            <Location />
          </div>
          <div className="card__location--name">
            <p>Berlin, Germany (1,5km)</p>
          </div>
        </div> */}
        <Link to="/pet">
          <button
            data-petid={pet && pet._id}
            onClick={(e) => {
              setPetId(pet && pet._id);
            }}
            className="btn__call-to-action"
          >
            Adopt me!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
