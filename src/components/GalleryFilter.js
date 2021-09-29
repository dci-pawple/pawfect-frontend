import React, { useState, useContext, useRef, useEffect } from 'react'
import { useFormik } from 'formik'
import '@fontsource/roboto'
import {
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  ButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core'

import Alert from '@material-ui/lab/Alert'
import MyContext from '../context/MyContext'

export default function GalleryFilter ({ filter }) {
  const [error, setError] = useState(null)
  const { filteredData, setFilteredData } = useContext(MyContext)

  const sizeOptions = [
    {
      value: 'small',
      label: 'small (until 30cm)'
    },
    {
      value: 'medium',
      label: 'medium (until 50cm)'
    },
    {
      value: 'large',
      label: 'large (above 50cm)'
    }
  ]

  const ageOptions = [
    {
      label: 'Baby (0-6 months)',
      value: 'baby'
    },
    {
      label: 'Young (6-12 months)',
      value: 'young'
    },
    {
      label: 'Adult (1-7 years)',
      value: 'adult'
    },
    {
      label: 'Senior (7+ years)',
      value: 'senior'
    }
  ]

  const genderOptions = [
    {
      label: 'Female',
      value: 'female'
    },
    {
      label: 'Male',
      value: 'male'
    }
  ]

  /**
   * Define the Form for FORMIK
   */
  const formik = useFormik({
    initialValues: {
      type: 'all',
      age: '',
      size: '',
      gender: '',
      favorites: false
    },
    onSubmit: async values => {
      console.log('!!!!!!!!!>>>>> onsubmit')
      //alert (JSON.stringify (values, null, 2));
      setError(null)

      //alert(JSON.stringify(values, null, 2))
      try {
        const userId = JSON.parse(localStorage.getItem('userId'))
        console.log('formik.values.favorites==', formik.values.favorites)
        console.log('userId==', userId)
        // process.env.REACT_APP_BACKEND_URL
        // http://localhost:4000/
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL +
            `pets/filter?type=${formik.values.type}&age=${JSON.stringify(
              formik.values.age
            )}&size=${JSON.stringify(
              formik.values.size
            )}&gender=${JSON.stringify(
              formik.values.gender
            )}&favorites=${JSON.stringify(formik.values.favorites)}&userId=${
              userId ? userId : ''
            }`,
          {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        const data = await response.json()
        console.log('requested filteredData', data.data)
        setFilteredData(data.data)

        if (!data.success) {
          setError(data.message)
          console.log('error=>', error)
        } else {
          console.log('filtered successful')
        }
      } catch (err) {
        console.log('Error while filtering =>', err)
      }
    }
  })

  const toggleDropdown = (filterType, className = 'filter-dropdown-hidden') => {
    const dropdown = document.getElementById(filterType)
    console.log('in toggleDropdown')
    console.log('dropdown', dropdown)
    //change classes for visible and hide dropdown
    if (dropdown.classList.contains(className)) {
      dropdown.classList.remove(className)
    } else {
      dropdown.classList.add(className)
    }
  }

  useEffect(() => {
    console.log('!!!!!!!!!>>>>> useeffect')
    const getFirstGalleryData = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem('userId'))
        console.log('userId==', userId)
        console.log('Filter:', filter)
        // process.env.REACT_APP_BACKEND_URL
        // http://localhost:4000/
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL +
            `pets/filter?type=${filter || 'all'}&favorites=false&userId=${
              userId ? userId : ''
            }`,
          {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        const data = await response.json()
        console.log('requested  filteredData in useeffect', data.data)
        setFilteredData(data.data)

        if (!data.success) {
          setError(data.message)
          console.log('error=>', error)
        } else {
          console.log('filtered successful')
        }
      } catch (err) {
        console.log('Error while filtering =>', err)
      }
    }

    getFirstGalleryData()
  }, [])

  return (
    <div className='dusan'>
      <FilterElementAll
        filterText={'All Filters'}
        toggleDropdown={toggleDropdown}
      />
      <form
        id='filter'
        className='filter-dropdown-overlay filter-dropdown-hidden'
      >
        <div className='filterContainer'>
          <FilterElementType
            filterText={'Type'}
            formik={formik}
            toggleDropdown={toggleDropdown}
          />

          <FilterElement
            filterText={'Age'}
            toggleDropdown={toggleDropdown}
            filterOptions={ageOptions}
            formik={formik}
          />

          <FilterElement
            filterText={'Size'}
            filterOptions={sizeOptions}
            toggleDropdown={toggleDropdown}
            formik={formik}
          />

           <FilterElement
            filterText={'Gender'}
            filterOptions={genderOptions}
            toggleDropdown={toggleDropdown}
            formik={formik}
          />


          <FilterFavorites filterText={''} formik={formik} />
          <div className='filter-button'>
            <Button
              className='clear-btn'
              disableElevation
              color='gray'
              variant='contained'
              type='submit'
              onClick={() => {
                formik.values.type = 'all'
                formik.values.age = ''
                formik.values.favorites = false
                toggleDropdown('filter')
              }}
            >
              Clear
            </Button>
            <Button
              disableElevation
              color='primary'
              variant='contained'
              type='submit'
              onClick={e => {
                e.preventDefault() // because it refreshes the page and filter is not working anymore
                formik.handleSubmit()
                toggleDropdown('filter')
              }}
            >
              Set Filter
            </Button>
          </div>
        </div>
        {error ? <Alert severity='error'>{error}</Alert> : null}
      </form>
    </div>
  )
}

function FilterElementType ({ filterText, toggleDropdown, formik }) {
  const [selectedBtn, setSelectedBtn] = useState(1)

  return (
    <div>
      <ButtonGroup
        disableElevation
        color='primary'
        aria-label='outlined primary button group'
        size='large'
        variant='outlined'
      >
        <Button
          id='all'
          color={selectedBtn === 1 ? 'secondary' : 'primary'}
          value={'all'}
          onClick={() => {
            setSelectedBtn(1)
            formik.values.type = 'all'
          }}
        >
          All
        </Button>
        <Button
          id='dog'
          color={selectedBtn === 2 ? 'secondary' : 'primary'}
          value={'dog'}
          onClick={() => {
            setSelectedBtn(2)
            formik.values.type = 'dog'
          }}
        >
          Dogs
        </Button>
        <Button
          id='cat'
          color={selectedBtn === 3 ? 'secondary' : 'primary'}
          value={'cat'}
          onClick={() => {
            setSelectedBtn(3)
            formik.values.type = 'cat'
          }}
        >
          Cats
        </Button>
        <Button
          id='other'
          color={selectedBtn === 4 ? 'secondary' : 'primary'}
          name='other'
          value={'other'}
          onClick={() => {
            setSelectedBtn(4)
            formik.values.type = 'others'
          }}
        >
          Others
        </Button>
      </ButtonGroup>
    </div>
  )
}

function FilterElement ({ filterText, formik, filterOptions }) {
  console.log('into FilterElementAge')
  const ref = useRef()

  const toggleDropdown = () => {
    const dropdown = document.getElementById(`filter${filterText}`)
    console.log('in toggleDropdown')
    console.log('dropdown', dropdown)

    //change classes for visible and hide dropdown
    if (dropdown.classList.contains('filter-dropdown-hidden')) {
      dropdown.classList.remove('filter-dropdown-hidden')
      console.log('open dropdown')
    } else {
      dropdown.classList.add('filter-dropdown-hidden')
      console.log('close dropdown')
    }
  }

  //   useEffect( () => {
  //     console.log( 'in UseEffect' )
  //     let eventlistener = document.body.addEventListener( 'click', e => {
  //       e.stopPropagation()
  //       console.log( 'into eventhandler' )
  //
  //       // if the e.target is still the same like before than nothing should happen
  //       if ( ref.current && ref.current.contains( e.target ) ) {
  //         console.log( 'the same e target:', e.target )
  //         return //do nothing
  //       } else {
  //         //close it, because u clicked on other element
  //         console.log( 'not the same e target:', e.target )
  //         const dropdown = document.querySelector( `#filterAge` )
  //         dropdown && dropdown.classList.add( 'filter-dropdown-hidden' )
  //       }
  //     } )
  //     //unmount remove eventlistener
  //     return () => {
  //       console.log( 'close eventhandler' )
  //       document.body.removeEventListener( 'click', eventlistener )
  //     }
  //   }, [] )

  

  console.log('render')
  return (
    <div className='filterElement' ref={ref}>
      <span
        onClick={() => {
          toggleDropdown()
        }}
      >
        <span className=''>{filterText}</span>
        <i className='fas fa-chevron-down filtericon'></i>{' '}
      </span>
      <div id={`filter${filterText}`} className='dropdown filter-dropdown-hidden'>
        <FormControl component='fieldset'>
          <FormGroup>
            {filterOptions.map(opt => (
              <FormControlLabel
                id={opt.value}
                value={opt.value}
                control={<Checkbox name={filterText.toLowerCase()} />}
                label={opt.label}
                onChange={formik.handleChange}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  )
}

function FilterElementAll ({ filterText, filterData, toggleDropdown }) {
  return (
    <div
      className='filterElement filterElement-white'
      onClick={() => {
        toggleDropdown('filter', 'filter-dropdown-hidden')
      }}
    >
      <span>
        {filterText} <i class='fas fa-sliders-h filtericon'></i>{' '}
      </span>
    </div>
  )
}

function FilterFavorites ({ filterText, formik }) {
  console.log('in FilterFavorites')
  const [likeIcon, setLikeIcon] = useState('black')
  const { login, setLogin } = useContext(MyContext)
  const [open, setOpen] = useState(false)
  const iconStyleFilled = 'far fa-heart'
  const iconStyleBorder = 'fas fa-heart'

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const toggle = status => {
    console.log('toggle', status)
    if (status) return false
    if (!status) return true
  }

  const normalFunctionality = () => {
    formik.values.favorites = toggle(formik.values.favorites)

    formik.values.favorites === false
      ? setLikeIcon('black')
      : setLikeIcon('#f76c6c')
  }

  return (
    <>
      <div
        onClick={login ? normalFunctionality : handleClickOpen}
        className='filterElement'
      >
        <span className=''>{filterText}</span>

        <i
          className={likeIcon === 'black' ? iconStyleFilled : iconStyleBorder}
          style={{ color: likeIcon }}
        ></i>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Join Pawfect to favorite pets'}
        </DialogTitle>
        <DialogContent>
          <Button
            variant='contained'
            sx={{ margin: 3 }}
            color='primary'
            href='/registration'
          >
            Create new Account
          </Button>

          <DialogContentText id='alert-dialog-description'>
            Already have an account?
          </DialogContentText>
          <Button variant='outlined' color='primary' href='/login'>
            Login
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false)
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
