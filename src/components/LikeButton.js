import React, { useState, useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

const LikeButton = ({ pet }) => {
  const [likeIcon, setLikeIcon] = useState("black");
  const { userId } = useContext(MyContext);
  const { login } = useContext(MyContext);
  const iconStyleFilled = "far fa-heart";
  const iconStyleBorder = "fas fa-heart";
  const { setFavouritePetsIds } = useContext(MyContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const savePet = async (pet) => {
    try {
      // process.env.REACT_APP_BACKEND_URL
      // http://localhost:4000/
      const result = await fetch(
        process.env.REACT_APP_BACKEND_URL + `users/save`,
        {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: userId, pet_id: pet._id }),
        }
      );
      const data = await result.json();
      return data;
    } catch (err) {

      return;
    }
  };

  useEffect(() => {
    setLikeIcon(pet.usersFavorite === true ? "#f76c6c" : "black");
  }, [pet]);

  return (
    <>
      {login && login ? (
        <button
          className="card__like--icon"
          data-petid={pet && pet._id}
          onClick={async (e) => {
            likeIcon === "black"
              ? setLikeIcon("#f76c6c")
              : setLikeIcon("black");
            const { savedFavorites } = await savePet(pet);
            setFavouritePetsIds(savedFavorites);

          }}
        >
          <i
            className={likeIcon === "black" ? iconStyleFilled : iconStyleBorder}
            style={{ color: likeIcon }}
          ></i>
        </button>
      ) : (
        <>
          <button className="card__like--icon" onClick={handleClickOpen}>
            <i className="far fa-heart" style={{ color: likeIcon }}></i>
          </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Join Pawfect to favorite pets"}
            </DialogTitle>
            <DialogContent>
              <Button
                variant="contained"
                sx={{ margin: 3 }}
                color="primary"
                href="/registration"
              >
                Create new Account
              </Button>

              <DialogContentText id="alert-dialog-description">
                Already have an account?
              </DialogContentText>
              <Button variant="outlined" color="primary" href="/login">
                Login
              </Button>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default LikeButton;
