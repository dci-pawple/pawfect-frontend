import React from 'react'
import {Link} from 'react-router-dom'
import {Button, TextField} from '@material-ui/core';
import { makeStyles, createTheme, ThemeProvider, createStyles } from '@material-ui/core/styles';
import {useFormik} from 'formik';

//Form validation: 
/**
 * Form Valitation
 */
 const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    //errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test (values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test (values.password)
  ) {
    errors.password = 'Invalid Character';
  } else if (values.password.length < 6) {
    errors.password = 'Must be longer than 6 Characters';
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required';
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Not the same Password';
  }

  return errors;
};

const useStyles = makeStyles (theme =>
    createStyles ({
      root: {
        '& > *': {
          margin: theme.spacing (2),
          'font-size': '1.6rem',
          palette: {
            primary: {
              light: '#464646',
              main: '#1f1f1f',
              dark: '#000000',
              contrastText: '#fff',
            },
          },
        },
      },
    })
  );

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins"
    }
  });

const UserDetails = () => {

    const classes = useStyles();

    const formik = useFormik ({
      initialValues: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        country: '',
        city: '',
        streetName: '',
        postalCode: '',
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: '',
      },
      validate,
      onSubmit: values => {
        alert (JSON.stringify (values, null, 2));
      },
    });

    return (
        <ThemeProvider theme={theme}>
        <div className="user-form-container">
            <h2>Your profile:</h2>
            <form className={classes.root} noValidate autoComplete="off"
            onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        id="standard-basic"
                        placeholder="First name"
                        label="First name"
                        variant="outlined"
                        color="secondary"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        error={
                          formik.touched.firstName && Boolean (formik.errors.firstName)
                        }
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        />

                    <TextField
                        placeholder="Last name"
                        id="standard-basic"
                        label="Last name"
                        variant="outlined"
                        color="secondary"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        error={formik.touched.lastName && Boolean (formik.errors.lastName)
                        }
                        helperText={formik.touched.lastName && formik.errors.lastName}
          
                        />
                </div>

                <div>
                    <TextField
                        placeholder="Your Phone Number"
                        id="standard-basic"
                        label="Phone number"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        error={formik.touched.phoneNumber && Boolean (formik.errors.phoneNumber)
                        }
                        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        />
                </div>

                <div>
                    <TextField
                        id="standard-basic"
                        placeholder="Country"
                        label="Country"
                        variant="outlined"
                        color="secondary"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        error={formik.touched.country && Boolean (formik.errors.country)
                        }
                        helperText={formik.touched.country && formik.errors.country}
                        />
                
                     <TextField
                        id="standard-basic"
                        placeholder="City"
                        label="City"
                        variant="outlined"
                        color="secondary"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        error={
                          formik.touched.city && Boolean (formik.errors.city)
                        }
                        helperText={formik.touched.city && formik.errors.city}
                        />
                 </div>
                <div>
                    <TextField
                        id="standard-basic"
                        placeholder="Street name and number"
                        label="Street name and number"
                        variant="outlined"
                        color="secondary"
                        onChange={formik.handleChange}
                        value={formik.values.streetName}
                        error={
                          formik.touched.streetName && Boolean (formik.errors.streetName)
                        }
                        helperText={formik.touched.streetName && formik.errors.streetName}
                        />
                
                    <TextField
                        id="standard-basic"
                        label="Postal code"
                        placeholder="Postal code"
                        variant="outlined"
                        color="secondary"
                        onChange={formik.handleChange}
                        value={formik.values.postalCode}
                        error={
                          formik.touched.postalCode && Boolean (formik.errors.postalCode)
                        }
                        helperText={formik.touched.postalCode && formik.errors.postalCode}
                        />
                        
                </div>
                <div>

                        <TextField
                        label="Change your e-mail"
                        type="email"
                        name="email"
                        id="email"
                        variant="outlined"
                        color="secondary"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean (formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                        label="Confirm your e-mail"
                        type="email"
                        name="email"
                        id="email"
                        variant="outlined"
                        color="secondary"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean (formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        />
                </div>
                <div>
            <TextField
              label="Password"
              type="password"
              
              name="password"
              id="password"
              variant="outlined"
              color="secondary"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={
                formik.touched.password && Boolean (formik.errors.password)
              }
              helperText={formik.touched.password && formik.errors.password}
            />
              
                <TextField
                  label="Password Confirmation"
                  type="password"
                
                  name="passwordConfirm"
                  id="passwordConfirm"
                  variant="outlined"
                  color="secondary"
                  onChange={formik.handleChange}
                  value={formik.values.passwordConfirm}
                  error={
                    formik.touched.passwordConfirm &&
                      Boolean (formik.errors.passwordConfirm)
                  }
                  helperText={
                    formik.touched.passwordConfirm && formik.errors.passwordConfirm
                  }
                />
              </div>
                <Button className="btn" disableElevation  variant="contained" type="submit">
                  SAVE CHANGES
                </Button>
            </form>

                <p>You may search our <Link to="/gallery">database of pets</Link> looking for homes. </p>

                <button className="btn btn__post">
                    <Link to="/"  >
                         POST AN AD
                     </Link>
                    <i class="fas fa-plus-circle"></i>
                 </button>

        </div>
        </ThemeProvider>

    )
}

export default UserDetails
