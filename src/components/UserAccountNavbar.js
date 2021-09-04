import React from 'react'
import {Link} from 'react-router-dom'

const UserAccountNavbar = () => {
    return (
        <nav className="account-nav">
            <ul className="account-nav__list">
                <li className="account-nav__list-item">
                    <Link to="/" className="account-nav__link">About me</Link>
                </li>
                <li className="account-nav__list-item">
                    <Link to="/" className="account-nav__link">Adopter Profile</Link>
                </li>
                <li className="account-nav__list-item">
                    <Link to="/" className="account-nav__link">Account Settings</Link>
                </li>
                <li className="account-nav__list-item">
                    <Link to="/search-alerts" className="account-nav__link">Saved Searches</Link>
                </li>
            </ul>
        </nav>
    )
}

export default UserAccountNavbar
