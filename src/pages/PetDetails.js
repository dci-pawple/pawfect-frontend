import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import SharePopup from "../components/SharePopup";
import MyContext from "../context/MyContext";
import LikeButton from "../components/LikeButton";

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const PetDetails = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { petOwner, setPetOwner } = useContext(MyContext);
  const { pet, setPet } = useContext(MyContext);
  const { petId, setPetId } = useContext(MyContext);
  const { chatUsername, setChatUsername } = useContext(MyContext);

  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`http://localhost:4000/pets/${petId}`)
          .then((data) => data.json())
          .then((res) => {
            if (pet._id !== res.data._id) setPet(res.data);
          });
        console.log("pet =>", pet);
        pet &&
          fetch(`http://localhost:4000/users/${pet.userId}`)
            .then((data) => data.json())
            .then((res) => setPetOwner(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [petId, setPet, pet, setPetOwner]);

  return (
    <div className="app-container container pet__container">
      <button onClick={() => history.goBack()} className="btn-go-back">
        Go Back
      </button>

      <Carousel
        itemsToShow={3}
        breakPoints={breakPoints}
        className="pet__gallery-container"
      >
        {pet.photos &&
          pet.photos.map((photo, index) => (
            <div className="pet__image-container">
              <img src={photo.url} alt="a pet profile" key={index} />
            </div>
          ))}
      </Carousel>

      <div className="pet__content-container">
        <div className="pet__info-container">
          <h2>Hi, I am {pet && pet.name}</h2>
          <div className="pet__info-data-container">
            <p className="pet__info-data">Type of pet:</p>
            <p>{pet && pet.typeOfPet}</p>
          </div>
          <div className="pet__info-data-container">
            <p className="pet__info-data">Age:</p>
            <p>{pet && pet.age}</p>
          </div>
          <div className="pet__info-data-container">
            <p className="pet__info-data">Size:</p>
            <p>Small</p>
          </div>
          <div className="pet__info-data-container">
            <p className="pet__info-data">Gender:</p>
            <p>{pet && pet.gender}</p>
          </div>
          <div className={`pet__info-data-container ${pet && pet.dislikes ? "" : "hidden"}`}>
            <p className="pet__info-data">{pet && pet.likes ? "Likes:" : ""}</p>
            <p>{pet && pet.likes}</p>
          </div>
          <div className={`pet__info-data-container ${pet && pet.dislikes ? "" : "hidden"}`}>
            <p className="pet__info-data">{pet && pet.dislikes ? "Dislikes:" : ""}</p>
            <p>{pet && pet.dislikes}</p>
          </div>
          <div className={`pet__info-data-container ${pet && pet.dislikes ? "" : "hidden"}`}>
            <p className="pet__info-data">{pet && pet.habits ? "Habits:" : ""}</p>
            <p>{pet && pet.habits}</p>
          </div>
          <div className={`pet__info-data-container ${pet && pet.dislikes ? "" : "hidden"}`}>
            <p className="pet__info-data">{pet && pet.extras ? "About:" : ""}</p>
            <p>
              {pet && pet.extras}
            </p>
          </div>
        </div>

        <div className="owner__container">
          <div className="owner__icons">
            <div className="owner__icon-container">
              <LikeButton
                pet={pet}
              />
            </div>

            <div className="owner__icon-container">
              <button
                onClick={() => setButtonPopup(true)}
                className="owner__btn"
              >
                <i className="fas fa-share"></i>
              </button>
              <SharePopup
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
              ></SharePopup>
            </div>
          </div>

          <div className="owner__data-container">
            <div className="owner__image-container">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="owner__info-container">
              <p>Owner of {pet && pet.name}:</p>
              <h3>{petOwner && petOwner.firstName}</h3>
            </div>
          </div>

          <div className="owner__btn-container">
            <button className="btn__chat">
              <Link
                to="/messages"
                onClick={() => petOwner && setChatUsername(petOwner.email)}
              >
                Chat with {petOwner && petOwner.firstName}
              </Link>
              <i class="fas fa-comment-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
