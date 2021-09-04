import React from 'react'
import NavbarLoggedUser from '../components/NavbarLoggedUser'
import UserAccountNavbar from '../components/UserAccountNavbar'

const UserProfile = () => {
    return (
        <>
          <NavbarLoggedUser/>  

          <div className="container">
            <div className="account__container">
              <h2>My Pawfect Profile</h2>
              <UserAccountNavbar/>
              
            </div>
          </div>
        </>
    )
}

export default UserProfile
