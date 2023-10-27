import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
const Navabr = () => {
    return (
        <div className="borderr">
            <div className="container">
                <nav className="navbar navbar-expand-lg py-4 ">
                    <div className="container-fluid ">
                        <Link className="navbar-brand" to="/">
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
                        <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0 text-center gap-4">
                                <li className="nav-item ">
                                    <Link className="nav-link position-relative active " aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link position-relative" to="/">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link position-relative" to="/">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link position-relative" to="/">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contain d-flex gap-4 align-items-center">
                        <div className="InputContainer">
                            <input
                                type="text"
                                name="text"
                                className="input"
                                id="input"
                                placeholder="What are you looking for?"
                            />
                            <label htmlFor="input" className="labelforsearch">
                                <svg viewBox="0 0 512 512" className="searchIcon">
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>
                            </label>
                        </div>
                        <div className="icons d-flex align-items-center gap-3">
                            <AiOutlineHeart />
                            <AiOutlineShoppingCart />
                            <BsPerson />
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Navabr;
