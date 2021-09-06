import React from 'react'
import UserDetails from '../components/UserDetails'
// import NavbarLoggedUser from '../components/NavbarLoggedUser'
// import UserAccountNavbar from '../components/UserAccountNavbar'

const UserProfile = () => {
    return (
        <>
          {/* <NavbarLoggedUser/>  */}
          <div className="container"> 
            <div className="account__container">
            <h2>User Profile</h2>
              {/* <UserAccountNavbar/> */}
              <UserDetails/>
            </div>
          </div>  
        </>
    )
}

export default UserProfile
