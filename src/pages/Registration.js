import React, { useState } from "react";
import { useFormik } from "formik";
import "@fontsource/roboto";
import { Button, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";

/**
 * Styling the form (Material-ui)
 */
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  })
);

/**
 * Form Valitation
 */
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    //errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)
  ) {
    errors.password = "Invalid Character";
  } else if (values.password.length < 6) {
    errors.password = "Must be longer than 6 Characters";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Required";
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "Not the same Password";
  }

  return errors;
};

export default function Registration() {
  const [error, setError] = useState(null);

  let history = useHistory();
  // get the styling from global style theme
  const classes = useStyles();
  //const classes=useTheme();

  /**
   * Define the Form for FORMIK
   */
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
    },
    validate,
    onSubmit: async (values) => {
      //alert (JSON.stringify (values, null, 2));
      setError(null);
      try {
        // process.env.REACT_APP_BACKEND_URL
        // http://localhost:4000/
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "users/",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const data = await response.json();
        if (!data.success) {
          setError(data.message);
        } else {
          //redirect to login
          history.push("login");
        }
      } catch (err) {}
    },
  });

  return (
    <div className="container app-container">
      <div className="form-container">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <h1 className="text-center">Registration</h1>

        <form
          className={`form-style ${classes.root}`}
          onSubmit={formik.handleSubmit}
          action="/"
          method="post"
        >
          {/* FIRST NAME */}
          <div>
            <TextField
              label="First Name"
              fullWidth
              name="firstName"
              id="firstName"
              variant="outlined"
              color="secondary"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </div>

          {/* LAST NAME */}
          <div>
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              id="lastName"
              variant="outlined"
              color="secondary"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </div>

          {/* EMAIL */}
          <div>
            <TextField
              label="E-Mail"
              type="email"
              fullWidth
              name="email"
              id="email"
              variant="outlined"
              color="secondary"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <TextField
              label="Password"
              type="password"
              fullWidth
              name="password"
              id="password"
              variant="outlined"
              color="secondary"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>

          {/* PASSWORD CONFIRMATION */}
          <div>
            <TextField
              label="Password Confirmation"
              type="password"
              fullWidth
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
                formik.touched.passwordConfirm && formik.errors.passwordConfirm
              }
            />
          </div>

          {error ? <Alert severity="error">{error}</Alert> : null}

          <Button
            disableElevation
            color="primary"
            variant="contained"
            type="submit"
            size="large"
          >
            Register
          </Button>
          <p>
            Go to <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
