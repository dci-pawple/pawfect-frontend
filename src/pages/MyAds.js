import React, { useEffect, useState, useContext } from 'react'
import PetCard from '../components/PetCard'
import MyContext from '../context/MyContext'
import { Button, TextField } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import '../style/pages/_myAds.scss'

const SavedSearches = () => {
  const [adsList, setAdsList] = useState([])
  const { userId } = useContext(MyContext)
  const { pet,setPet } = useContext(MyContext)

  useEffect(() => {
    const fetchFavourites = () => {
      fetch(`http://localhost:4000/pets/userads`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId })
      })
        .then(data => data.json())
        .then(response => {
          console.log('MyAds response.data', response.data)
          setAdsList(response.data)
        })
        .catch(err => console.error('error while fetching user-ads =>', err))
    }

    fetchFavourites()
  }, [])

  return (
    <div className='app-container container'>
      <h2>Your Ads</h2>
      <div className='gallery__grid-container'>
        {adsList &&
          adsList.map((pet, index) => (
            <div className='ad-card'>
              <PetCard pet={pet} key={index} />
              <div className='ad-actions'>
               <Link to={`/edit-ad/${pet._id}`}>
                <Button
                  variant='contained'
                  color='primary'
                  className='ad-btn-edit'
                onClick={
                    setPet(pet)
                   
                }
                >
                  Edit
                </Button>
                </Link>
                <Button
                  variant='outlined'
                  color='secondary'
                  className='ad-btn-delete'
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SavedSearches
