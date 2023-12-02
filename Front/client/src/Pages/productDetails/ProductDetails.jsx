// @ts-nocheck
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './products.css';
import axios from "axios";
const ProductDetails = () => {
    let { id } = useParams()
    const [item, setItem] = useState(null)
    const [value, setvalue] = useState(1)
    const [fav, setfav] = useState(false)
    const [image, setimage] = useState('one')
    const increse = () => {
        setvalue(value + 1)
    }
    const decrese = () => {
        setvalue((prevValue) => (prevValue >= 2 ? prevValue - 1 : 1));

    }
    useEffect(() => {
        const getProduct = () => {
            axios.get(`https://backend-kappa-beige.vercel.app/product/single/${id}`)
                .then((resp) => {
                    console.log(resp.data)
                    setItem(resp.data.result)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getProduct()
    }, [id])

    if (!item) {
        return <div>Loading...</div>
    }
    return (
        <div className="container py-3  my-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/" className="text-black opacity-50 text-decoration-none">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to="/" className="text-black opacity-50 text-decoration-none">
                            Products
                        </Link>
                    </li>
                    <li className="breadcrumb-item active text-black" aria-current="page">
                        {item.name}
                    </li>
                </ol>
            </nav>
            <div className="row gap-4">
                <div className="col-sm-4 col-md-2 mb-3 mb-sm-0">
                    <div className="card h-100 bg-transparent border-0">
                        <div className="card-body p-0 gap-3 d-flex flex-column ">
                            <img
                                src={item.image[0].url}
                                alt=""
                                width="100%"
                                height='200px'
                                onClick={() => setimage('two')}
                                style={{ cursor: "pointer", borderRadius: "7px" }}
                            />
                            <img
                                src={item.defaultImage.url}
                                alt=""
                                width="100%"
                                height='200px'
                                onClick={() => setimage('one')}
                                style={{ cursor: "pointer", borderRadius: "7px" }}
                            />
                            <img
                                src={item.image[1].url}
                                alt=""
                                width="100%"
                                height='200px'
                                onClick={() => setimage('three')}
                                style={{ cursor: "pointer", borderRadius: '7px' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5">
                    <div className="card h-100">
                        <div className="card-body d-flex align-items-center">
                            {image === 'one' ?
                                <img
                                    src={item.defaultImage.url}
                                    alt=""
                                    width="100%"
                                    height='600px'
                                />
                                : image === 'two' ?
                                    <img
                                        src={item.image[0].url}
                                        alt=""
                                        width="100%"
                                        height='600px'
                                    />
                                    :
                                    image === 'three' ?
                                        <img
                                            src={item.image[1].url}
                                            alt=""
                                            width="100%"
                                            height='600px'
                                        />
                                        : ''
                            }
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card bg-transparent border-0 h-100">
                        <div className="card-body">
                            <h3 className="card-title">{item.name}</h3>
                            <p
                                className="card-text pt-2"
                                style={{ color: "#00FF66", opacity: ".6" }}
                            >
                                in stock
                            </p>
                            <p className="card-text fs-4">
                                {item.price - (item.price * (item.discount / 100))} $
                                <s className="mx-3" style={{ color: "#7C7C7C" }}>
                                    {item.price} $
                                </s>
                            </p>
                            <p>
                                {item.description}
                            </p>
                            <hr />
                            <div className="mt-4 d-flex align-items-center gap-4">
                                <span className="border border-black rounded-1 d-flex align-items-center">
                                    <div onClick={() => decrese()} className="btn count">-</div>
                                    <big className="px-4 border-start border-end border-dark">
                                        {value}
                                    </big>
                                    <div onClick={() => increse()} className="btn count">+</div>
                                </span>
                                <span>
                                    <div
                                        className="btn  text-white"
                                        style={{ background: "var(--main-color)", minWidth: '100px' }}
                                    >
                                        buy now
                                    </div>
                                </span>
                                <span className=" border border-dark p-2 rounded-2" >
                                    {fav ?
                                        <svg onClick={() => setfav(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" style={{ fill: "var(--main-color)", cursor: 'pointer' }}>
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>
                                        :
                                        <svg
                                            onClick={() => setfav(true)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            fill="currentColor"
                                            className="bi bi-heart"
                                            viewBox="0 0 16 16"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                    }
                                </span>
                            </div>
                            <div className="border border-dark mt-4 rounded-2">
                                <div className="d-flex flex-column">
                                    <div className="d-flex gap-3 align-items-center p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="currentColor"
                                            className="bi bi-truck"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                        <div className="d-flex flex-column">
                                            <h5>Free Delivery</h5>
                                            <p>Enter your postal code for Delivery Availability</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3 align-items-center p-3 border-top border-dark ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="currentColor"
                                            className="bi bi-recycle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                                        </svg>
                                        <div className="d-flex flex-column">
                                            <h4>Free Delivery</h4>
                                            <p>Enter your postal code for Delivery Availability</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ margin: "100px 0" }} className="selling">
                <div className="info d-flex justify-content-between align-items-center mb-5">
                    <div className="r">
                        <p>Related Item</p>
                    </div>
                    <div className="buton">
                        <div className="btn">View all</div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3.5}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card">
                            <div className="img_container">
                                <img
                                    src={require("../../Images/xbox-black front.jpg")}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="btn btn-dark">Add To Cart</div>
                                <AiOutlineHeart />
                            </div>
                            <div className="card-body">
                                <p>coat canada</p>
                                <span>
                                    300$ <b>360$</b>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="img_container">
                                <img
                                    src={require("../../Images/xbox-blue front.jpg")}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="btn btn-dark">Add To Cart</div>
                            </div>
                            <div className="card-body">
                                <p>coat canada</p>
                                <span>
                                    300$ <b>360$</b>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="img_container">
                                <img
                                    src={require("../../Images/coat front.jpg")}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="btn btn-dark">Add To Cart</div>
                            </div>
                            <div className="card-body">
                                <p>coat canada</p>
                                <span>
                                    300$ <b>360$</b>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="img_container">
                                <img
                                    src={require("../../Images/lcd front.jpg")}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="btn btn-dark">Add To Cart</div>
                            </div>
                            <div className="card-body">
                                <p>coat canada</p>
                                <span>
                                    300$ <b>360$</b>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="img_container">
                                <img src={require("../../Images/spray front.jpg")} alt="..." />
                                <div className="btn btn-dark">Add To Cart</div>
                            </div>
                            <div className="card-body">
                                <p>coat canada</p>
                                <span>
                                    300$ <b>360$</b>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="img_container">
                                <img
                                    src={require("../../Images/watch front.jpg")}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="btn btn-dark">Add To Cart</div>
                            </div>
                            <div className="card-body">
                                <p>coat canada</p>
                                <span>
                                    300$ <b>360$</b>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="img_container">
                                <img src="coat.png" className="card-img-top" alt="..." />
                                <div className="btn btn-dark">Add To Cart</div>
                            </div>
                            <div className="card-body">
                                <p>coat canada</p>
                                <span>
                                    300$ <b>360$</b>
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ProductDetails;
