import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
  createStyles,
} from "@material-ui/core/styles";
import { useFormik } from "formik";
import MyContext from "../context/MyContext";

//Form Valitation

const validate = (values) => {
  const errors = {};

  // if (values.firstName.length > 15) {
  //   errors.firstName = "Must be 15 characters or less";
  // }

  // if (values.lastName.length > 20) {
  //   errors.lastName = "Must be 20 characters or less";
  // }

  // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }
  // if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
  //   errors.password = "Invalid Character";
  // } else if (values.password.length < 6) {
  //   errors.password = "Must be longer than 6 Characters";
  // }

  // if (values.password !== values.passwordConfirm) {
  //   errors.passwordConfirm = "Not the same Password";
  // }

  return errors;
};

// Material-ui styling:

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        "font-size": "1.6rem",
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

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

const UserProfile = () => {
  const classes = useStyles();

  const { user, setUser } = useContext(MyContext);
  const { userId, setUserId } = useContext(MyContext);

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
    });
  }, [user]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validate,
    onSubmit: async (values) => {
      try {
        const response = await fetch(`http://localhost:4000/users/${userId}`, {
          //change to PATCH
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        console.log(response.json());
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
        <ThemeProvider theme={theme}>
          <div className="user-form-container">
            <h2>Your profile:</h2>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <TextField
                  style={{ marginRight: "1rem" }}
                  id="firstName"
                  placeholder="First name"
                  label="First name"
                  variant="outlined"
                  color="secondary"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />

                <TextField
                  placeholder="Last name"
                  id="lastName"
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

              <div>
                <TextField
                  style={{ marginRight: "1rem" }}
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

              <div>
                <TextField
                  style={{ marginRight: "1rem" }}
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
                  id="postalCode"
                  label="Postal code"
                  placeholder="Postal code"
                  variant="outlined"
                  color="secondary"
                  onChange={formik.handleChange}
                  value={formik.values.postalCode}
                  error={
                    formik.touched.postalCode &&
                    Boolean(formik.errors.postalCode)
                  }
                  helperText={
                    formik.touched.postalCode && formik.errors.postalCode
                  }
                />
              </div>
              <div>
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
                    formik.touched.streetName &&
                    Boolean(formik.errors.streetName)
                  }
                  helperText={
                    formik.touched.streetName && formik.errors.streetName
                  }
                />
              </div>
              <div>
                <TextField
                  style={{ marginRight: "1rem" }}
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
              <div>
                <TextField
                  style={{ marginRight: "1rem" }}
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
                  label="Confirm changed password"
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
            </form>

            <p>
              You may search our <Link to="/gallery">database of pets</Link>{" "}
              looking for homes.{" "}
            </p>

            <button className="btn btn__post">
              <Link to="/">POST AN AD</Link>
              <i class="fas fa-plus-circle"></i>
            </button>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default UserProfile;
