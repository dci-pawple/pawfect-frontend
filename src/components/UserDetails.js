import React from 'react'
import {Link} from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1.5),
        width: '25ch',
      },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    }, 

    inputLabel: {
        color:"red",
    }
  }));

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins"
    }
  });

const UserDetails = () => {

      const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="off">
                <p>Your name and last name</p>
                {/* <InputLabel htmlFor="my-input">Your name</InputLabel> */}
                <TextField 
                    id="standard-basic" 
                    placeholder="First name"
                    label="First name"
                    />

                <TextField
                    placeholder="Last name"
                    id="standard-basic" 
                    label="Last name"

                    />

                <p>Your phone number</p>
                <TextField
                    placeholder="Your Phone Number"
                    id="standard-basic" 
                    label="Phone number"
                    />


                <p>Your address:</p>
                <TextField 
                    id="standard-basic" 
                    placeholder="Country"
                    label="Country"
                    />
                <TextField
                    id="standard-basic" 
                    placeholder="Street address"
                    label="Street address"
                    />
                <TextField
                    id="standard-basic" 
                    label="ZIP code"
                    style={{ margin: 8 }}
                    placeholder="ZIP code"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}/>
            </form>

            <button className="btn__post">
                <Link to="/"  >
                    SAVE CHANGES
                </Link>
            </button>

            <p>You may search our <Link to="/gallery">database of thousands of pets</Link> looking for forever homes. </p>

            <section className="account__post-ad">
            <p>Your current pets:</p>
            <button className="btn__post">
                <Link to="/"  >
                    POST AN AD
                    <i class="fas fa-plus-circle"></i>
                </Link>
            </button>
            </section>
        </ThemeProvider>


        
    )
}

export default UserDetails
