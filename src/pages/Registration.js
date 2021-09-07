import React from 'react'
import { useFormik } from 'formik'
import '@fontsource/roboto'
import { Button, TextField } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

/**
 * Styling the form (Material-ui)
 */
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        'font-size': '1.6rem',
        palette: {
          primary: {
            light: '#464646',
            main: '#1f1f1f',
            dark: '#000000',
            contrastText: '#fff'
          }
        }
      }
    }
  })
)

/**
 * Form Valitation
 */
const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    //errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)
  ) {
    errors.password = 'Invalid Character'
  } else if (values.password.length < 6) {
    errors.password = 'Must be longer than 6 Characters'
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required'
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Not the same Password'
  }

  return errors
}

export default function Registration () {
  // get the styling from global style theme
  const classes = useStyles()
  //const classes=useTheme();

  /**
   * Define the Form for FORMIK
   */
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: ''
    },
    validate,
    onSubmit: async values => {
      //alert (JSON.stringify (values, null, 2));
      try {
        const response = await fetch('http://localhost:4000/users/', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })

        console.log(response.json())
      } catch (err) {
        console.error('Error while fetching data for registration =>', err)
      }
    }
  })

  return (
    <div className='container'>
      <div className='form-container'>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <h1 className='text-center'>Registration</h1>

        <form
          className={`form-style ${classes.root}`}
          onSubmit={formik.handleSubmit}
          action='/'
          method='post'
        >
          {/* FIRST NAME */}
          <div>
            <TextField
              label='First Name'
              fullWidth
              name='firstName'
              id='firstName'
              variant='outlined'
              color='secondary'
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
              label='Last Name'
              name='lastName'
              fullWidth
              id='lastName'
              variant='outlined'
              color='secondary'
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </div>

          {/* EMAIL */}
          <div>
            <TextField
              label='E-Mail'
              type='email'
              fullWidth
              name='email'
              id='email'
              variant='outlined'
              color='secondary'
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <TextField
              label='Password'
              type='password'
              fullWidth
              name='password'
              id='password'
              variant='outlined'
              color='secondary'
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>

          {/* PASSWORD CONFIRMATION */}
          <div>
            <TextField
              label='Password Confirmation'
              type='password'
              fullWidth
              name='passwordConfirm'
              id='passwordConfirm'
              variant='outlined'
              color='secondary'
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

          <Button
            disableElevation
            color='primary'
            variant='contained'
            type='submit'
          >
            Register
          </Button>
          <p>
            Go to <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
