import React from 'react'
import {Link} from 'react-router-dom'
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
              <p>You may search our <Link to="/gallery">database of thousands of pets</Link> looking for forever homes. </p>

              <section className="account__post-ad">
                <p>Your current pets:</p>
                <button className="btn__post">
                  <Link to="/"  >
                        Post an ad
                      <i class="fas fa-plus-circle"></i>
                  </Link>
                </button>
              </section>

            </div>
          </div>
        </>
    )
}

export default UserProfile
