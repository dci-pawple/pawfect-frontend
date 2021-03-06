import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import MyContext from "../context/MyContext";
import LikeButton from "../components/LikeButton";
import ShareDialog from "../components/ShareDialog";
import { Button } from "@material-ui/core";

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false, showArrows: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, showArrows: true },
  { width: 768, itemsToShow: 3, showArrows: true },
  { width: 1200, itemsToShow: 4, showArrows: true },
];

const PetDetails = () => {
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false);

  const { petOwner, setPetOwner } = useContext(MyContext);
  const { pet, setPet } = useContext(MyContext);
  const { petId } = useContext(MyContext);
  const { setChatUsername } = useContext(MyContext);
  const { user } = useContext(MyContext);

  let { id } = useParams();

  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // process.env.REACT_APP_BACKEND_URL
        // http://localhost:4000/
        await fetch(process.env.REACT_APP_BACKEND_URL + `pets/${id || petId}`)
          .then((data) => data.json())
          .then((res) => {
            if (pet._id !== res.data._id) setPet(res.data);
          });
        pet &&
          fetch(process.env.REACT_APP_BACKEND_URL + `users/${pet.userId}`)
            .then((data) => data.json())
            .then((res) => setPetOwner(res.data));
      } catch (err) {}
    };
    fetchData();
  }, [petId, setPet, pet]);

  useEffect(() => {
    if (user && petOwner) {
      if (user._id === petOwner._id) setDisable(true);
      else setDisable(false);
    }
  }, [petOwner, user]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="app-container container pet__container">
      <Button
        className="btn-go-back"
        disableElevation
        color="gray"
        variant="contained"
        // onClick={() => history.goBack()}
      >
        <Link to="/gallery">Go Back</Link>
      </Button>

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
          <div className={`pet__info-data-container ${
              pet && pet.size ? "" : "hidden"
            }`}>
            <p className="pet__info-data">Size:</p>
            <p>{pet && pet.size}</p>
          </div>
          <div className="pet__info-data-container">
            <p className="pet__info-data">Gender:</p>
            <p>{pet && pet.gender}</p>
          </div>
          <div
            className={`pet__info-data-container ${
              pet && pet.likes ? "" : "hidden"
            }`}
          >
            <p className="pet__info-data">{pet && pet.likes ? "Likes:" : ""}</p>
            <p>{pet && pet.likes}</p>
          </div>
          <div
            className={`pet__info-data-container ${
              pet && pet.dislikes ? "" : "hidden"
            }`}
          >
            <p className="pet__info-data">
              {pet && pet.dislikes ? "Dislikes:" : ""}
            </p>
            <p>{pet && pet.dislikes}</p>
          </div>
          <div
            className={`pet__info-data-container ${
              pet && pet.habbits ? "" : "hidden"
            }`}
          >
            <p className="pet__info-data">
              {pet && pet.habits ? "Habits:" : ""}
            </p>
            <p>{pet && pet.habits}</p>
          </div>
          <div
            className={`pet__info-data-container ${
              pet && pet.extras ? "" : "hidden"
            }`}
          >
            <p className="pet__info-data">
              {pet && pet.extras ? "About:" : ""}
            </p>
            <p>{pet && pet.extras}</p>
          </div>
        </div>

        <div className="owner__container">
          <div className="owner__icons">
            <div className="owner__icon-container">
              <LikeButton pet={pet} />
            </div>

            <div className="owner__icon-container">
              <button onClick={handleClickOpen} className="owner__btn">
                <i className="fas fa-share"></i>
              </button>

              <ShareDialog setOpen={setOpen} open={open} />
            </div>
          </div>

          <div className="owner__data-container">
            <div>
              {petOwner && petOwner.profilePhoto.length === 0 ? (
                <i class="fas fa-user-circle"></i>
              ) : (
                <div className="owner__image-container">
                  {petOwner &&
                    petOwner.profilePhoto.map((photo, i) => (
                      <img src={photo.url} alt="user " />
                    ))}
                </div>
              )}
            </div>
            <div className="owner__info-container">
              <p>Owner of {pet && pet.name}:</p>
              <h3>{petOwner && petOwner.firstName}</h3>
            </div>
          </div>

          <div className="owner__btn-container">
            <Link
              to="/messages"
              onClick={() => petOwner && setChatUsername(petOwner.email)}
            >
              <button className="btn__chat" disabled={disable}>
                Chat with {petOwner && petOwner.firstName}
                <i class="fas fa-comment-alt"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
