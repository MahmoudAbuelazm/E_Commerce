import React from 'react';
import { Link } from 'react-router-dom';
import style from './Contact.module.css';
const Contact = () => {
    return (
        <>
            <div className='container py-3  my-4'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" className='text-black opacity-50 text-decoration-none'>Home</Link></li>
                        <li className="breadcrumb-item active text-black" aria-current="page">Contact</li>
                    </ol>
                </nav>
                <div className="row flex-column flex-md-row py-4 justify-content-around">
                    <div id={style.contain} className="col-12 col-md-4 px-5 py-3 text-black rounded-4">
                        <div className="py-3">
                            <div className="d-flex gap-3 my-3 align-items-center text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-telephone ${style.call} `} viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <p className='m-0'>Call To Us</p>
                            </div>
                            <p>We are available 24/7, 7 days a week.</p>
                            <p>Phone: +010-1010-000-11</p>
                        </div>
                        <hr />
                        <div className="py-3">
                            <div className="d-flex gap-3 my-3 align-items-center text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-envelope ${style.call}`} viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                                <p className='m-0'>Write To US</p>
                            </div>
                            <p>Fill out our form and we will contact you within 24 hours.</p>
                            <p>Emails: teem-ala-allah@gmail.com</p>
                            <p>Emails: teem-ala-allah2@gmail.com</p>
                        </div>
                    </div>
                    <div id={style.contain} className="col-12 d-flex align-items-center col-md-7 mt-3 mt-md-0 rounded-4">
                        <div className={`py-5 px-4 ${style.inputs}`}>
                            <div className="d-flex  gap-3">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name " />
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email " />
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Your Phone " />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" placeholder='Your Message' id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                            </div>
                            <div style={{ background: '#912b22' }} className="btn w-25 text-white align-self-end py-3">send message</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;