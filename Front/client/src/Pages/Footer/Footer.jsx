import React from 'react';
import './Footer.css'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { RxInstagramLogo, RxTwitterLogo } from 'react-icons/rx';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container" style={{ padding: "80px" }}>
                <div className="row gap-4 gap-md-0">
                    <div className="col-md-3  d-flex flex-column gap-3 p-0" >
                        <h2>Market</h2>
                        <h4>Subscribe</h4>
                        <p>Get 10% off your first order</p>
                        <div className="InputContainer">
                            <input
                                type="text"
                                name="text"
                                className="input"
                                id="input"
                                placeholder="Enter your email"
                            />
                            <label htmlFor="input" className="labelforsearch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-check-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                                </svg>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column gap-3" >
                        <h4>Support</h4>
                        <p>111 Eltahreer street, cairo.</p>
                        <p>teem-ala-allah@gmail.com</p>
                        <p>010-1010-000-11</p>
                    </div>
                    <div className="col-md-3 d-flex flex-column gap-3" >
                        <h4>Account</h4>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                    </div>
                    <div className="col-md-3 d-flex flex-column gap-3" >
                        <h3>Download App</h3>
                        <p className='opacity-50'>Save $3 with App New User Only</p>
                        <div className="download d-flex w-100 gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-qr-code" viewBox="0 0 16 16">
                                <path d="M2 2h2v2H2V2Z" />
                                <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                                <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                                <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                                <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                            </svg>
                            <div className="google d-flex flex-column gap-3 mb-2">
                                <img src="Image-Source-PlusPNG.com.png" alt="" />
                                <img src="Image-Source-PlusPNG.com (1).png" alt="" />
                            </div>
                        </div>
                        <div className="social d-flex gap-4">
                            <BiLogoFacebook />
                            <RxTwitterLogo />
                            <RxInstagramLogo />
                            <BiLogoLinkedin />
                        </div>
                    </div>
                </div>
            </div>
            <div className="divide"></div>
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center gap-2 opacity-50 py-3">
                        <span>&copy;</span>
                        <p>Copyright ala_allah_teem 2023. All right reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;