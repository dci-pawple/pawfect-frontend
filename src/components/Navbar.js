import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../dummy/pawfect-pink.png";
import MyContext from "../context/MyContext";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);
  const [display, setDisplay] = useState(false);
  const { login, setLogin } = useContext(MyContext);
  const { user } = useContext(MyContext);

  const changeBackground = () => {

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

  const toggleDisplay = () => setDisplay(!display);

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
                to="/gallery"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                See all pets
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
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </li>
            <li className="user list-item" onClick={toggleDisplay}>
              <button className="user-btn">
                <i className="fas fa-bars" />
                {!login ? (
                  <i className="fas fa-user-circle"></i>
                ) : (
                  <div>
                    {user &&
                    user.profilePhoto &&
                    user.profilePhoto.length > 0 ? (
                      user.profilePhoto.map((photo, i) => (
                        <div className="profile-pic-container">
                          <img
                            src={photo.url}
                            alt="profile"
                            className="profile-pic"
                          />
                        </div>
                      ))
                    ) : (
                      <i class="fas fa-user-circle"></i>
                    )}
                  </div>
                )}
              </button>

              <div
                className={display ? "dropdown dropdown-active" : "dropdown"}
              >
                {!login ? (
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
                      to="/user/profile"
                      className="drop-link"
                      onClick={closeMobileMenu}
                    >
                      Go to profile
                    </Link>
                    <Link
                      to="/myAds"
                      className="drop-link"
                      onClick={closeMobileMenu}
                    >
                      My Ads
                    </Link>
                    <Link
                      to="/createad"
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
                      to="/save"
                      className="drop-link"
                      onClick={closeMobileMenu}
                    >
                      My Favourites
                    </Link>
                    <Link
                      to="/"
                      className="drop-link"
                      onClick={() => {
                        closeMobileMenu();
                        localStorage.removeItem("user");
                        localStorage.removeItem("userId");
                        setLogin(false);
                      }}
                    >
                      Logout
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
