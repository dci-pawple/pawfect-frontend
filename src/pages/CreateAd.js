import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import "@fontsource/roboto";
import { Button, TextField } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";

/**
 * Styling the form (Material-ui)
 */
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

export default function CreateAd() {
  const classes = useStyles();

  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      typeOfPet: "",
      age: "",
      name: "",
      gender: "",
      breed: "",
      likes: "",
      dislikes: "",
      habits: "",
      size: "",
      health: "",
    },

    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="app-container">
      <div className="form-container">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <h1 className="text-center">Create an Ad</h1>

        <form
          className={`form-style ${classes.root}`}
          onSubmit={formik.handleSubmit}
          action="/"
          method="post"
        >
          {/* Type of pet */}
          <div>
            {/* <TextField
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
            /> */}
            {/* <FormControl component="fieldset">
              <FormLabel component="legend">Type of pet</FormLabel>
              <RadioGroup
                aria-label="typeOfPet"
                name="typeOfPet1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="Dog" control={<Radio />} label="Dog" />
                <FormControlLabel value="Cat" control={<Radio />} label="Cat" />
                <FormControlLabel
                  value="Bird"
                  control={<Radio />}
                  label="Bird"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl> */}

            {/*             
            <InputLabel id="label">Age</InputLabel>
            <Select labelId="label" id="select" value="20">
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
            </Select> */}
          </div>

          <Button
            disableElevation
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
          <p>
            Go to <Link to="/registration">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
