import React from 'react'
import {Link} from 'react-router-dom'

const UserAccountNavbar = () => {
    return (
        <div>
            <h2>My Pawfect Profile</h2>
            <nav className="account-nav">
                <ul className="account-nav__list">
                    <li className="account-nav__list-item">
                        <Link to="/" className="account-nav__link">My profile</Link>
                    </li>
                    <li className="account-nav__list-item">
                        <Link to="/" className="account-nav__link">Messages</Link>
                    </li>
                    <li className="account-nav__list-item">
                        <Link to="/search-alerts" className="account-nav__link">My Favourites</Link>
                    </li>
                    <li className="account-nav__list-item">
                        {/* To change the email/password */}
                        <Link to="/" className="account-nav__link">Account Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default UserAccountNavbar
