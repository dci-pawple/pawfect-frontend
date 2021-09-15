import React, { useState, useContext, useRef, useEffect } from 'react'
import { useFormik } from 'formik'
import '@fontsource/roboto'
import {
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormGroup,
  ButtonGroup,
  CheckboxWithLabel,
  Radio
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Link, useHistory } from 'react-router-dom'
import MyContext from '../context/MyContext'
import '../style/components/_galleryFilter.scss'

export default function GalleryFilter () {
  const [error, setError] = useState(null)

  const { filteredData, setFilteredData } = useContext(MyContext)
  const { userId, setUserId } = useContext(MyContext)
  const [openFilter, setOpenFilter] = useState(false)
  /**
   * Define the Form for FORMIK
   */
  const formik = useFormik({
    initialValues: {
      type: 'all',
      age: '',
    
    },
    onSubmit: async values => {
      //alert (JSON.stringify (values, null, 2));
      setError(null)

      alert(JSON.stringify(values, null, 2))
      try {
        console.log('formik.values.type', formik.values.type)
        const response = await fetch(
          `http://localhost:4000/pets/filter?type=${formik.values.type}`,
          {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        const data = await response.json()
        console.log('filteredData', data.data)
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
    console.log('toggle')
    console.log('dropdown', dropdown)
    //change classes for visible and hide dropdown
    if (dropdown.classList.contains('filter-dropdown-hidden')) {
      dropdown.classList.remove('filter-dropdown-hidden')
    } else {
      dropdown.classList.add('filter-dropdown-hidden')
    }
  }

  return (
    <div>
      <form action='/' method='post'>
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
          <FilterElementAll filterText={'All Filters'} />
        </div>

        {error ? <Alert severity='error'>{error}</Alert> : null}

        {/* <Button
          disableElevation
          color='primary'
          variant='contained'
          type='submit'
        >
          Filter
        </Button> */}
      </form>
      {/* <Button
          disableElevation
          color='grey'
          variant='contained'
          onClick={() => {
            setFilteredData(null)
          }}
          type='submit'
        >
          Clear
        </Button> */}
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
            formik.handleSubmit()
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
            formik.handleSubmit()
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
            formik.handleSubmit()
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
            formik.handleSubmit()
          }}
        >
          Others
        </Button>
      </ButtonGroup>
    </div>
  )
}

function FilterElementAge ({ filterText, toggleDropdown, formik }) {
  const ref = useRef()

  useEffect(() => {
    const eventlistener = document.body.addEventListener('click', e => {
      console.log('eventhandler')
      // if the e.target is still the same like before than nothing should happen
      if (ref.current && ref.current.contains(e.target)) {
        console.log("the same");
        return //do nothing
      } else {
        //close it, because u clicked on other element
        const dropdown = document.querySelector(`#filterAge`)
        console.log(dropdown)
        dropdown && dropdown.classList.add('filter-dropdown-hidden')
           console.log("not the same");
      }
    })

    //unmount remove eventlistener
    return () => {
      document.body.removeEventListener('click', eventlistener)
    }
  }, [])

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
    }, {
      label: 'Senior (7+ years)',
      value: 'senior'
    }
  ]

  return (
    <div
      className='filterElement'
      ref={ref}
      onClick={() => {
        toggleDropdown('filterAge')
      }}
    >
      <span>
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
