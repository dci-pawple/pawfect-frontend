import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../dummy/pawfect-pink.png";

export default function NavbarLoggedUser() {
    
  let user = true;

  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

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

  const handleSubmit = (e) => {
    // e.preventDefault();
    setSearch("");
  };

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
          <ul className={click ? "nav__list active" : "nav__list"}>
            <li
                className={`search nav__list-item ${
                    active ? "search-active" : ""
                }`}
                >
                <div
                    onClick={toggleClass}
                    className={active ? "icon" : "icon icon-active"}
                >
                    <i class="fas fa-search"></i>
                </div>
                <div className="input">
                    <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <span className={active ? "submit" : ""} onClick={handleSubmit}>
                    <i class="fas fa-arrow-right"></i>
                </span>
                </li>
            <li className="nav__list-item">
              <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                Community
              </Link>
            </li>

            {user ? (
                    <>
                        <li className="nav__list-item">
                        
                            <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                                Saved searches
                                <i class="far fa-heart"></i>
                            </Link>
                        </li>
                        <li className="nav__list-item">
                            
                            <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                                Messages
                                <i class="far fa-comments"></i>
                            </Link>
                        </li>

                        <li className="nav__list-item">
                            
                            <Link to="/" className="nav__link nav__link--highlighted" onClick={closeMobileMenu}>
                                Add a pet
                                <i class="fas fa-plus-circle"></i>
                            </Link>
                        </li>

                        <li className="nav__list-item">
                            <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                                Logout
                            </Link>
                        </li>
                       <div className="nav__user-info">
                            <img className="nav__user-image" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="an avatar" />
                            <p>User's name</p>

                       </div>
                    </>
                ) : (
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <Link className="nav__link" to="/login">LOGIN</Link>
                        </li>

                        <li className="nav__list-item">
                            <Link className="nav__link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            
          </ul>
        </nav>
      </header>
  );
}

