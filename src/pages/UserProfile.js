import React from 'react'
import UserDetails from '../components/UserDetails'


const UserProfile = () => {
    return (

          <div className="app-container container"> 
            <div className="account__container">
            <h2>User Profile</h2>
              <UserDetails/>
            </div>
          </div>  

    )
}

export default UserProfile
