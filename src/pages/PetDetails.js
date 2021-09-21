import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory,useParams } from "react-router-dom";
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
  const [favourite, setFavourite] = useState("Add to favourites");
  // const [petOwner, setPetOwner] = useState(null);
  const { petOwner, setPetOwner } = useContext(MyContext);
  const { pet, setPet } = useContext(MyContext);
  const { petId, setPetId } = useContext(MyContext);
  const { chatUsername, setChatUsername } = useContext(MyContext);

  let { id } = useParams();
  console.log({id});

 


  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`http://localhost:4000/pets/${id || petId}`)
          .then((data) => data.json())
          .then((res) => {
            if (pet._id !== res.data._id) setPet(res.data);
          });
        console.log("pet =>", pet);
        fetch(`http://localhost:4000/users/${pet.userId}`)
          .then((data) => data.json())
          .then((res) => setPetOwner(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [petId, setPet,pet]);

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
          <div className="pet__info-data-container">
            <p className="pet__info-data">Likes:</p>
            <p>{pet && pet.likes}</p>
          </div>
          <div className="pet__info-data-container">
            <p className="pet__info-data">Dislikes:</p>
            <p>{pet && pet.dislikes}</p>
          </div>
          <div className="pet__info-data-container">
            <p className="pet__info-data">Habits:</p>
            <p>{pet && pet.habits}</p>
          </div>
          <div className="pet__info-data-about">
            <p className="pet__info-data">About:</p>
            <p>
              {pet && pet.name} enjoys playing in the yard and going for walks
              around the neighborhood. Her foster is working on her leash
              training so an adopter would need to be committed to continuing to
              work with her to walk nicely on leash when she sees squirrels.{" "}
              {pet && pet.name} also must be the only pet in the home, she
              cannot live with other dogs or cats. {pet && pet.name} would love
              an adopter where she was the central pet in their lives and would
              much prefer to be with her people than other animals so she will
              not be a dog park or play date type dog but will love you
              endlessly if you do the same!
            </p>
          </div>
        </div>

        <div className="owner__container">
          <div className="owner__icons">
            <div className="owner__icon-container">
              {/* <button
                className="owner__btn"
                onClick={() => {
                  likeIcon === "black"
                    ? setLikeIcon("#f76c6c")
                    : setLikeIcon("black");
                  favourite === "Add to favourites"
                    ? setFavourite("Remove from favourites")
                    : setFavourite("Add to favourites");
                }}
              >
                <i className="fas fa-heart" style={{ color: likeIcon }}></i>
                <p className="hidden">{favourite}</p>
              </button> */}

              <LikeButton
                pet={pet}
                favourite={favourite}
                setFavourite={setFavourite}
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
              <p>Owner of {pet && pet.name}</p>
              <h5>name: {petOwner && petOwner.firstName}</h5>
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
