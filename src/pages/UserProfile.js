import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import MyContext from "../context/MyContext";
import Thumb from "../components/Thumb";

//Form Validation

const validate = (values) => {
  const errors = {};

  if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (values.email !== values.emailConfirm) {
    errors.emailConfirm = "Emails don't match";
  }

  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
    errors.password = "Invalid Character";
  } else if (values.password.length < 6) {
    errors.password = "Must be longer than 6 Characters";
  }

  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "Not the same Password";
  }

  return errors;
};

// Material-ui styling:

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        fontSize: "1.6rem",
        palette: {
          primary: {
            light: "#464646",
            main: "#1f1f1f",
            dark: "#000000",
            contrastText: "#fff",
          },
        },
      },
    },
  })
);

const UploadComponent = (props) => {
  const { setFieldValue, values } = props;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedPhotos) => {
      setFieldValue("profilePhoto", acceptedPhotos);
    },
  });
  return (
    <div>
      <div {...getRootProps({ className: "upload-text" })}>
        <input {...getInputProps()} />

        <span>Update photo</span>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const classes = useStyles();

  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState(null);

  const { user, setUser } = useContext(MyContext);
  const { userId } = useContext(MyContext);

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:4000/users/${userId}`)
        .then((data) => data.json())
        .then((res) => {
          setUser(res.data);
        });
    };

    fetchData();
  }, [setUser, userId]);

  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    postalCode: "",
    street: "",
    email: "",
    emailConfirm: "",
    password: "",
    passwordConfirm: "",
    profilePhoto: "",
  });

  useEffect(() => {
    setInitialValues({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      phoneNumber: user.phoneNumber || "",
      city: user.city || "",
      postalCode: user.postalCode || "",
      street: user.street || "",
      email: user.email || "",
      emailConfirm: "",
      password: user.password || "",
      passwordConfirm: "",
      profilePhoto: user.profilePhoto || "",
    });
  }, [user]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validate,
    onSubmit: async (values) => {
      const realValues = Object.keys(values)
        .filter((item) => values[item] !== "")
        .reduce((acc, item) => {
          return { ...acc, [item]: values[item] };
        }, {});
      setIsValidating(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:4000/users/${userId}`, {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(realValues),
        });

        const data = await response.json();
        console.log("data=>", data);
        // setIsValidating(true);


        if (!data.success) {
          setError(data.message);
          setIsValidating(false);
          console.log("error=>", error);
        }
      } catch (err) {
        console.error(
          "Error while fetching data for user profile update =>",
          err
        );
      }
    },
  });

  return (
    <div className="app-container container">
      <div className="account__container">
        <div className="user-form-container">
          <form
            className={classes.root}
            noValidate
            autoComplete="on"
            onSubmit={formik.handleSubmit}
          >
            <div className="profile-img-container">
              <h1>Your profile</h1>
              <div className="img-text-container">
                <div className="img-container">
                  {formik.values.profilePhoto === "" ? (
                    <i class="fas fa-user-circle"></i>
                  ) : (
                    <div>
                      {formik.values.profilePhoto &&
                        formik.values.profilePhoto.map((photo, i) => (
                          <Thumb key={i} file={photo} />
                        ))}
                    </div>
                  )}
                </div>
                <UploadComponent
                  setFieldValue={formik.setFieldValue}
                  values={formik.values}
                />
              </div>
            </div>
            <div className="one-line">
              <TextField
                id="firstName"
                placeholder="First name"
                label="First name"
                className="one-line-item"
                variant="outlined"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />

              <TextField
                placeholder="Last name"
                id="lastName"
                className="one-line-item"
                label="Last name"
                variant="outlined"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </div>

            <div className="one-line">
              <TextField
                placeholder="Your Phone Number"
                id="phoneNumber"
                label="Phone number"
                fullWidth
                variant="outlined"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </div>

            <div className="one-line">
              <TextField
                className="one-line-item"
                id="city"
                placeholder="City"
                label="City"
                variant="outlined"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />

              <TextField
                className="one-line-item"
                id="postalCode"
                label="Postal code"
                placeholder="Postal code"
                variant="outlined"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
                error={
                  formik.touched.postalCode && Boolean(formik.errors.postalCode)
                }
                helperText={
                  formik.touched.postalCode && formik.errors.postalCode
                }
              />
            </div>
            <div className="one-line">
              <TextField
                id="street"
                placeholder="Street name and number"
                label="Street name and number"
                variant="outlined"
                fullWidth
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.streetName}
                error={
                  formik.touched.streetName && Boolean(formik.errors.streetName)
                }
                helperText={
                  formik.touched.streetName && formik.errors.streetName
                }
              />
            </div>
            <div className="one-line">
              <TextField
                className="one-line-item"
                label="Change your e-mail"
                type="email"
                name="email"
                id="email"
                variant="outlined"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                className="one-line-item"
                label="Confirm your new e-mail"
                type="email"
                name="emailConfirm"
                id="emailConfirm"
                variant="outlined"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.emailConfirm}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className="one-line">
              <TextField
                className="one-line-item"
                label="Change password"
                type="password"
                name="password"
                id="password"
                variant="outlined"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <TextField
                className="one-line-item"
                label="Confirm new password"
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                variant="outlined"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
                error={
                  formik.touched.passwordConfirm &&
                  Boolean(formik.errors.passwordConfirm)
                }
                helperText={
                  formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm
                }
              />
            </div>
            <Button
              className="btn"
              disableElevation
              variant="contained"
              type="submit"
            >
              SAVE CHANGES
            </Button>

            {isValidating ? (
              <Alert severity="success">
                Your changes have been successfully saved
              </Alert>
            ) : null}

          </form>

          {/* let's decide if we want this here */}
          <p>
            You may search our <Link to="/gallery">database of pets</Link>
            looking for homes.
          </p>

          <button className="btn btn__post">
            <Link to="/">POST AN AD</Link>
            <i class="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
