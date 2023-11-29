import React, { useState } from "react";
import Style from "./navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${Style.navbar}`}
      >
        <div className="container">
          <Link className={`navbar-brand ${Style.logo}`} to="/home">
            Market
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-md-auto">
              <li className="nav-item">
                <Link
                  onClick={() => {
                    handleLinkClick("home");
                  }}
                  className={`nav-link ${activeLink === "home" ? `${Style.active}` : ""
                    }`}
                  aria-current="page"
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    handleLinkClick("contact");
                  }}
                  className={`nav-link ${activeLink === "contact" ? `${Style.active}` : ""
                    }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    handleLinkClick("about");
                  }}
                  className={`nav-link ${activeLink === "about" ? `${Style.active}` : ""
                    }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    handleLinkClick("login");
                  }}
                  className={`nav-link ${activeLink === "login" ? `${Style.active}` : ""
                    }`}
                  to={"/login"}
                >
                  Login
                </Link>
              </li>
            </ul>
            <span className="d-flex align-items-center gap-3">
              <div className={Style.InputContainer}>
                <input
                  type="text"
                  name="text"
                  className={Style.input}
                  id="input"
                  placeholder="what are you looking for ?"
                />
                <label htmlFor="input" className={Style.InputContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </label>
              </div>
              <svg

                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000"
                className={`bi bi-heart`}
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              <Link
                onClick={() => {
                  handleLinkClick("cart");
                }}
                className={`nav-link ${activeLink === "cart" ? `${Style.active}` : ""
                  }`}
                to="/cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000"
                  style={{ marginBottom: '4px' }}
                  className={`bi bi-cart  `}

                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </Link>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-person-fill ${Style.avatar}`} viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
