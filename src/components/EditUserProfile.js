import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    }
  }));

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins"
    }
  });

const EditUserProfile = () => {

      const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="off">
                <p>Your name and last name</p>
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

                <p>How can you be reached?</p>
                <TextField
                    placeholder="Your Phone Number"
                    id="standard-basic" 
                    label="Last name"
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
        </ThemeProvider>
        
    )
}

export default EditUserProfile
