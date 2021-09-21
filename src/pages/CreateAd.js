import React, { useState,useContext } from 'react'
import { useFormik } from 'formik'
import { useDropzone } from 'react-dropzone'
import { useHistory } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import {
  Select,
  InputLabel,
  Button,
  FormControl,
  TextField,
  FormHelperText
} from '@material-ui/core'
import Thumb from '../components/Thumb'
import MyContext from '../context/MyContext'

/* Styling the form (Material-ui) */
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        fontSize: '1.6rem',
        palette: {
          primary: {
            light: '#464646',
            main: '#1f1f1f',
            dark: '#000000',
            contrastText: '#fff'
          }
        }
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
)

// for uploading images
const UploadComponent = props => {
  const { setFieldValue, values } = props

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedPhotos => {
      if (values.photos) {
        setFieldValue('photos', values.photos.concat(acceptedPhotos))
      } else {
        setFieldValue('photos', acceptedPhotos)
      }
    }
  })
  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />

        <p>Drop some photos here or click to select photos</p>
      </div>
      <FormHelperText>Optional</FormHelperText>
    </div>
  )
}

export default function CreateAd () {
  const classes = useStyles()
  let history = useHistory()
  const [error, setError] = useState(null)
  const {userId, setUserId}=useContext(MyContext)
  const { pet, setPet } = useContext(MyContext);
   const { petId, setPetId } = useContext(MyContext);


  const formik = useFormik({
    initialValues: {
      typeOfPet: '',
      age: '',
      name: '',
      gender: '',
      // breed: "",
      likes: '',
      dislikes: '',
      habits: '',
      size: '',
      extras: '',
      photos: ''
    },

    onSubmit: async values => {
      setError(null)
      console.log('values=>', values.photos)
      let fd = new FormData()
      fd.append('name', values.name)
      fd.append('age', values.age)
      fd.append('typeOfPet', values.typeOfPet)
      fd.append('gender', values.gender)
      fd.append('likes', values.likes)
      fd.append('dislikes', values.dislikes)
      fd.append('habits', values.habits)
      fd.append('size', values.size)
      fd.append('extras', values.extras)
      fd.append('userId', userId)

      if (values.photos) {
        values.photos.forEach(file => fd.append('photos', file))
        console.log('fd=>', fd)
        fd.append('photos', values.photos)
      }

      try {
        const response = await fetch('http://localhost:4000/pets/newpet', {
          method: 'POST',
          mode: 'cors',
          // headers: {
          //   "Content-Type": "multipart/form-data",
          //   "charset":"utf-8",
          // },
          body: fd
        })

        const data = await response.json()
        console.log('data=>', data)

        if (!data.success) {
          console.log('Error with uploading')
          setError(data.message)
        } else {
          console.log('Upload completed successfully')
          setPetId(pet && pet._id);
          history.push('/pet')
          setPet(data.data)
          
        }

      } catch (err) {
        console.log('Error while uploadting data for new ad =>', err)
      }
    }
  })

  return (
    <div className='app-container'>
      <div className='form-container'>
        <h1 className='text-center'>Create an Ad</h1>

        <form
          className={`form-style ${classes.root}`}
          action='/'
          onSubmit={formik.handleSubmit}
        >
          {/* Type of pet */}
          <FormControl
            className={classes.formControl}
            variant='outlined'
            fullWidth
            required
          >
            <InputLabel htmlFor='type-native-simple'>Type of pet</InputLabel>
            <Select
              native
              label='Type of pet'
              value={formik.values.typeOfPet}
              onChange={formik.handleChange}
              inputProps={{
                name: 'typeOfPet',
                id: 'type-native-simple'
              }}
            >
              <option aria-label='None' value='' />
              <option value={'dog'}>Dog</option>
              <option value={'cat'}>Cat</option>
              <option value={'other'}>Other</option>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          {/* Age */}
          <FormControl
            className={classes.formControl}
            variant='outlined'
            fullWidth
            required
          >
            <InputLabel htmlFor='age-native-simple'>Age</InputLabel>
            <Select
              native
              value={formik.values.age}
              onChange={formik.handleChange}
              label='Age'
              inputProps={{
                name: 'age',
                id: 'age-native-simple'
              }}
            >
              <option aria-label='None' value='' />
              <option value={'baby'}>Baby (0-6 months)</option>
              <option value={'young'}>Young (6-12 months)</option>
              <option value={'adult'}>Adult (1-7 years)</option>
              <option value={'senior'}>Senior (7+ years)</option>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          {/* Size should only be shown when DOG is selected !!!!!!!!!!!!!!!!! */}

          {/* Size */}
          {formik.values.typeOfPet === "dog" && (
            <FormControl
              className={classes.formControl}
              variant="outlined"
              fullWidth
              required
            >
              <InputLabel htmlFor="size-native-simple">Size</InputLabel>
              <Select
                native
                label="Size"
                value={formik.values.size}
                onChange={formik.handleChange}
                inputProps={{
                  name: "size",
                  id: "size-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"small"}>small (until 30cm)</option>
                <option value={"medium"}>medium (until 50cm)</option>
                <option value={"large"}>large (above 50cm)</option>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          )}

          {/* Gender */}
          <FormControl
            className={classes.formControl}
            variant='outlined'
            fullWidth
            required
          >
            <InputLabel htmlFor='gender-native-simple'>Gender</InputLabel>
            <Select
              label='Gender'
              native
              value={formik.values.gender}
              onChange={formik.handleChange}
              inputProps={{
                name: 'gender',
                id: 'gender-native-simple'
              }}
            >
              <option aria-label='None' value='' />
              <option value={'female'}>Female</option>
              <option value={'male'}>Male</option>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          {/* Name */}
          <FormControl fullWidth>
            <TextField
              label='Name'
              name='name'
              required
              id='name'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          {/* Likes */}
          <FormControl fullWidth>
            <TextField
              label='Likes'
              name='likes'
              id='likes'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.likes}
            />
            <FormHelperText>Optional</FormHelperText>
          </FormControl>

          {/* Dislikes */}
          <FormControl fullWidth>
            <TextField
              label='Dislikes'
              name='dislikes'
              id='dislikes'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.dislikes}
            />
            <FormHelperText>Optional</FormHelperText>
          </FormControl>

          {/* Habits */}
          <FormControl fullWidth>
            <TextField
              label='Habits'
              name='habits'
              id='habits'
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.habits}
            />
            <FormHelperText>Optional</FormHelperText>
          </FormControl>

          {/* Extras */}
          <FormControl fullWidth>
            <TextField
              label='Anything else you would like to tell future pawrents...'
              name='extras'
              id='extras'
              variant='outlined'
              multiline
              rows={4}
              onChange={formik.handleChange}
              value={formik.values.extras}
            />
            <FormHelperText>Optional</FormHelperText>
          </FormControl>

          {/* image upload */}
          <UploadComponent
            setFieldValue={formik.setFieldValue}
            values={formik.values}
          />

          <div className='image-preview'>
            {formik.values.photos &&
              formik.values.photos.map((photo, i) => (
                <Thumb key={i} file={photo} />
              ))}
          </div>

          {error ? <Alert severity='error'>{error}</Alert> : null}

          {/* submit button */}
          <Button
            disableElevation
            color='primary'
            variant='contained'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
