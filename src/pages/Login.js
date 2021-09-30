import React, { useState, useContext } from "react";
import MyContext from "../context/MyContext";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import "@fontsource/roboto";
import { Button, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles, createStyles } from "@material-ui/core/styles";

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
  }

  return errors;
};

export default function Login() {
  const [error, setError] = useState(null);
  const { setLogin } = useContext(MyContext);
  const { setUserId } = useContext(MyContext);
  const { setUser } = useContext(MyContext);

  const history = useHistory();

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

      try {
        // process.env.REACT_APP_BACKEND_URL
        // http://localhost:4000/
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "users/login",
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
          setLogin(true);
          setUserId(data.data._id);
          setUser(data.data);
          localStorage.setItem("user", JSON.stringify(data.data));
          localStorage.setItem("userId", JSON.stringify(data.data._id));
          history.push("/");
        }
      } catch (err) {}
    },
  });

  return (
    <div className="app-container container">
      <div
        className="form-container"
        // style={{ minWidth: "maxContent" }}
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <h1 className="text-center">Login</h1>

        <form
          className={`form-style ${classes.root}`}
          onSubmit={formik.handleSubmit}
          action="/"
          method="post"
        >
          {/* EMAIL */}
          <div>
            <TextField
              label="E-Mail"
              type="email"
              fullWidth
              name="email"
              id="email"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              color="secondary"
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
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              color="secondary"
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
            Login
          </Button>
          <p>
            Go to <Link to="/registration">Sign-up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
