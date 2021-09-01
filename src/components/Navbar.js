import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../dummy/pawfect-pink.png";

export default function Navbar() {
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
        {/* <li className="nav__list-item">
          <form action="/search/">
            <input
              type="text"
              name="search"
              placeholder="search"
              className="nav__link nav__link--input"
            />
          </form>
        </li> */}
        <nav>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav__list active" : "nav__list"}>
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
            {/* <li>
              <i class="fas fa-search"></i>
            </li> */}
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
          </ul>
        </nav>
      </header>
    </div>
  );
}
