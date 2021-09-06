import React from 'react'
import EditUserProfile from '../components/EditUserProfile'
import NavbarLoggedUser from '../components/NavbarLoggedUser'
import UserAccountNavbar from '../components/UserAccountNavbar'

const UserProfile = () => {
    return (
        <>
          <NavbarLoggedUser/> 
          <div className="container"> 
            <div className="account__container">
              <UserAccountNavbar/>
              <EditUserProfile/>
            </div>
          </div>  
        </>
    )
}

export default UserProfile
