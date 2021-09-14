import React, { useState,useContext } from 'react'
import { useFormik } from 'formik'
import '@fontsource/roboto'
import { Button, FormControl,FormLabel,RadioGroup, FormControlLabel,Radio,} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Link, useHistory } from 'react-router-dom'
import MyContext from "../context/MyContext";


export default function GalleryFilter() {

    const [error, setError] = useState( null )
 
 const { filteredData, setFilteredData } = useContext(MyContext);
    /**
  * Define the Form for FORMIK
  */
    const formik = useFormik( {
        initialValues: {
          type:"all",
        },
        onSubmit: async values => {
            //alert (JSON.stringify (values, null, 2));
            setError( null )
            try {
                const response = await fetch( `http://localhost:4000/pets/filter?type=${formik.values.type}`, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                   
                } )

                const data = await response.json()
                setFilteredData(data.data)
               
                if ( !data.success ) {
                    setError( data.message )
                    console.log( 'error=>', error )
                } else {
                    console.log("filtered successful");

                }
            } catch ( err ) {
                console.log( 'Error while filtering =>', err )
            }
        }
    } )

    return (
        <div>
            <form

                onSubmit={ formik.handleSubmit }
                action='/'
                method='post'
            >

                <FormControl component="fieldset">
                    <FormLabel component="legend">Type</FormLabel>
                    <RadioGroup aria-label="type" name="type" value={ formik.values.type } onChange={ formik.handleChange }>
                        <FormControlLabel id="all" value="all" control={ <Radio /> } label="All" />
                        <FormControlLabel id="dog" value="dog" control={ <Radio /> } label="Dogs" />
                        <FormControlLabel id="cat" value="cat" control={ <Radio /> } label="Cats" />
                        <FormControlLabel id="other" value="other"  control={ <Radio /> } label="Others" />
                    </RadioGroup>
                </FormControl>

                { error ? <Alert severity='error'>{ error }</Alert> : null }

                <Button
                    disableElevation
                    color='primary'
                    variant='contained'
                    type='submit'
                >
                    Filter
                </Button>

            </form>
        </div>
    )
}
