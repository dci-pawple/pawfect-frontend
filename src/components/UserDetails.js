import React from 'react'
import {Link} from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, createTheme, ThemeProvider, createStyles } from '@material-ui/core/styles';

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

    return (
        <ThemeProvider theme={theme}>
        <div className="user-form-container">
            <h2>Your profile:</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="standard-basic"
                        placeholder="First name"
                        label="First name"
                        variant="outlined"
                        color="secondary"
                        />
                </div>

                <div>
                    <TextField
                        placeholder="Last name"
                        id="standard-basic"
                        label="Last name"
                        variant="outlined"
                        color="secondary"
                        />
                </div>

                <div>
                    <TextField
                        placeholder="Your Phone Number"
                        id="standard-basic"
                        label="Phone number"
                        variant="outlined"
                        color="secondary"
                        />
                </div>

                <div>
                    <TextField
                        id="standard-basic"
                        placeholder="Country"
                        label="Country"
                        variant="outlined"
                        color="secondary"
                        />
                </div>
                 <div>
                     <TextField
                        id="standard-basic"
                        placeholder="City"
                        label="City"
                        variant="outlined"
                        color="secondary"
                        />
                 </div>
                <div>
                    <TextField
                        id="standard-basic"
                        placeholder="Street address"
                        label="Street address"
                        variant="outlined"
                        color="secondary"
                        />
                </div>
                <div>
                    <TextField
                        id="standard-basic"
                        label="ZIP code"
                        placeholder="ZIP code"
                        margin="normal"
                        variant="outlined"
                        color="secondary"
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
                        />
                </div>
            </form>
            <div className="button-container">
                <button className="btn__post">
                    <Link to="/">
                        SAVE CHANGES
                    </Link>
                </button>

                {/* <p>You may search our <Link to="/gallery">database of pets</Link> looking for homes. </p> */}

                <button className="btn__post">
                    <Link to="/"  >
                         POST AN AD
                     </Link>
                    <i class="fas fa-plus-circle"></i>
                 </button>
            </div>
        </div>
        </ThemeProvider>

    )
}

export default UserDetails
