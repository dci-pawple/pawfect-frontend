import React from 'react'
import UserDetails from '../components/UserDetails'


const UserProfile = () => {
    return (
        <>
          <div className="container"> 
            <div className="account__container">
            <h2>User Profile</h2>
              <UserDetails/>
            </div>
          </div>  
        </>
    )
}

export default UserProfile
