import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../dummy/pawfect-pink.png";
import profilepic from "../dummy/images/profile-example.png";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);
  const [login, setLogin] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleClick = () => setClick(!click);

  const toggleClass = () => setActive(!active);

  const closeMobileMenu = () => setClick(false);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navigation">
      <header className={navbar ? "nav-active" : ""}>
        <Link to="/" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="logo"
            className="site-logo"
            onClick={backToTop}
          />
        </Link>
        <nav>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-list active" : "nav-list"}>
            <li className="list-item">
              <Link
                to="/community"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Community
              </Link>
            </li>
            <li className={`search list-item ${active ? "search-active" : ""}`}>
              <div
                onClick={toggleClass}
                className={active ? "icon" : "icon icon-active"}
              >
                <i class="fas fa-search"></i>
              </div>
              <form action="/gallery/">
                <div className="input">
                  <input type="text" name="search" placeholder="Search" />
                </div>
                <button className={active ? "submit" : ""}>
                  <i class="fas fa-arrow-right"></i>
                </button>
              </form>
            </li>
            <li className="user list-item">
              <button className="user-btn">
                <i className="fas fa-bars" />
                {setLogin ? (
                  <i class="fas fa-user-circle"></i>
                ) : (
                  // need to change this to users picture
                  <img src={profilepic} alt="profile" className="profile-pic" />
                )}
              </button>

              <div className="dropdown">
                {setLogin ? (
                  <div className="user-logout">
                    <Link
                      to="/login"
                      className="drop-link"
                      onClick={closeMobileMenu}
                    >
                      Login
                    </Link>
                    <Link
                      to="/registration"
                      className="drop-link"
                      onClick={closeMobileMenu}
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <div className="user-login">
                    <Link
                      to="/profile"
                      className="drop-link"
                      onClick={closeMobileMenu}
                    >
                      Go to profile
                    </Link>
                    <Link
                      to="/new-ad"
                      className="drop-link"
                      onClick={closeMobileMenu}
                    >
                      Place an ad
                    </Link>
                    <Link
                      to="/messages"
                      className="drop-link"
                      onClick={closeMobileMenu}
                    >
                      Messages
                    </Link>
                    <Link
                      to="/saved"
                      className="drop-link"
                      onClick={closeMobileMenu}
                    >
                      Saved searches
                    </Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
