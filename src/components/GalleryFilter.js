import React, { useState, useContext, useRef, useEffect } from 'react'
import { useFormik } from 'formik'
import '@fontsource/roboto'
import {
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  ButtonGroup
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import MyContext from '../context/MyContext'
import '../style/components/_galleryFilter.scss'

export default function GalleryFilter () {
  const [error, setError] = useState(null)

  const { filteredData, setFilteredData } = useContext(MyContext)
  /**
   * Define the Form for FORMIK
   */
  const formik = useFormik({
    initialValues: {
      type: 'all',
      age: '',
      favorites: false
    },
    onSubmit: async values => {
      //alert (JSON.stringify (values, null, 2));
      setError(null)

      alert(JSON.stringify(values, null, 2))
      try {
        console.log('formik.values.type', formik.values.type)
        console.log('formik.values.age', JSON.stringify(formik.values.age))
        const response = await fetch(
          `http://localhost:4000/pets/filter?type=${
            formik.values.type
          }&age=${JSON.stringify(formik.values.age)}&favorites=${formik.values.favorites}`,
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

  const toggleDropdown = filterType => {
    const dropdown = document.getElementById(filterType)
    console.log('in toggleDropdown')
    console.log('dropdown', dropdown)
    //change classes for visible and hide dropdown
    if (dropdown.classList.contains('filter-dropdown-hidden')) {
      dropdown.classList.remove('filter-dropdown-hidden')
    } else {
      dropdown.classList.add('filter-dropdown-hidden')
    }
  }

  //   useEffect( () => {
  //   console.log( 'in UseEffect formik' )
  //   formik.handleSubmit()
  // }, [formik.values] )

  return (
    <div>
      <form>
        <div className='filterContainer'>
          {/* <FilterElementAll filterText={"All Filters"}/> */}

          <FilterElementType
            filterText={'Type'}
            formik={formik}
            toggleDropdown={toggleDropdown}
          />

          <FilterElementAge
            filterText={'Age'}
            toggleDropdown={toggleDropdown}
            formik={formik}
          />

          <FilterFavorites filterText={'Favorites'} formik={formik} />
          {/* <FilterElementAll filterText={ 'All Filters' } /> */}
          <Button
            disableElevation
            color='primary'
            variant='contained'
            type='submit'
            onClick={formik.handleSubmit}
          >
            Filter
          </Button>
          <Button
            disableElevation
            color='grey'
            variant='contained'
            type='submit'
            onClick={()=>{

      formik.values.type= 'all'
      formik.values.age= ''
      formik.values.favorites= false

            }}
          >
            Clear
          </Button>
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
        variant='contained'
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

function FilterElementAge ({ filterText, formik }) {
  console.log('into FilterElementAge')
  const ref = useRef()

  const toggleDropdown = () => {
    const dropdown = document.getElementById('filterAge')
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
      <div id='filterAge' className='dropdown filter-dropdown-hidden'>
        <FormControl component='fieldset'>
          <FormGroup>
            {ageOptions.map(opt => (
              <FormControlLabel
                id={opt.value}
                value={opt.value}
                control={<Checkbox name='age' />}
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

function FilterElementAll ({ filterText, filterData }) {
  return (
    <div className='filterElement'>
      <span>
        {filterText} <i class='fas fa-sliders-h filtericon'></i>{' '}
      </span>
    </div>
  )
}

function FilterFavorites ({ filterText, formik }) {
  const [likeIcon, setLikeIcon] = useState('black')

  // useEffect( () => {
  //   console.log( 'in UseEffect formik' )
  //   formik.handleSubmit()
  // }, [formik.values] )

  const toggle = status => {
    console.log('toggle', status)
    if (status) return false
    if (!status) return true
  }
  return (
    <div
      onClick={() => {
        formik.values.favorites = toggle(formik.values.favorites)

        formik.values.favorites === false
          ? setLikeIcon('black')
          : setLikeIcon('#f76c6c')
      }}
      className='filterElement'
    >
      <span className=''>{filterText}</span>

      <i className='fas fa-heart' style={{ color: likeIcon }}></i>
    </div>
  )
}
