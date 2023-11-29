// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import {
    A11y,
    FreeMode,
    Navigation,
    Pagination,
    Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
<<<<<<< Updated upstream
import axios from "axios";
const Home = () => {
    const [allProducts, setallProducts] = useState([]);
    const [newprice, setnewprice] = useState('')
    const navigate = useNavigate()
    const getProduccts = () => {
        axios.get("https://backend-kappa-beige.vercel.app/product?page=1")
            .then((respo) => {
                setallProducts(respo.data.result)
                setnewprice(respo.data.result)
                console.log(allProducts);
                console.log(newprice);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getProduccts()
    }, [])

=======
import Footer from "Pages/Footer/Footer";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../components/cartSlice';
const Home = ({ productData }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(productData));
    };
>>>>>>> Stashed changes
    return (
        <>
            <div className="container py-5">
                <div className="row flex-column flex-sm-row">
                    <div id="links" className="col-sm-2 d-flex flex-column gap-3 ">
                        <Link to={""}>Men’s fashion</Link>
                        <Link to={""}>Men’s fashion</Link>
                        <Link to={""}>Men’s fashion</Link>
                        <Link to={""}>Men’s fashion</Link>
                        <Link to={""}>Men’s fashion</Link>
                        <Link to={""}>Men’s fashion</Link>
                        <Link to={""}>Men’s fashion</Link>
                        <Link to={""}>Men’s fashion</Link>
                        <Link to={""}>Men’s fashion</Link>
                    </div>
                    <div className="col-sm-9 ps-sm-5 ms-sm-4">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            onSlideChange={() => console.log("slide change")}
                        >
                            <SwiperSlide>
                                <div className="text">
                                    <div className="one">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-apple"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                        </svg>
                                        <p>iPhone 14 Series</p>
                                    </div>
                                    <div className="tow">
                                        <p
                                            style={{
                                                fontSize: "48px",
                                                margin: "0",
                                                textAlign: "left",
                                            }}
                                        >
                                            Up to 10% off Voucher
                                        </p>
                                    </div>
                                    <div className="three">
                                        <Link to={""}>Shop Now</Link>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="im">
                                    <img
                                        src="IPhone-PNG-Photos-Transparent-PNG.png"
                                        alt=""
                                        width={500}
                                        height={350}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text">
                                    <div className="one">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-apple"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                        </svg>
                                        <p>iPhone 14 Series</p>
                                    </div>
                                    <div className="tow">
                                        <p
                                            style={{
                                                fontSize: "48px",
                                                margin: "0",
                                                textAlign: "left",
                                            }}
                                        >
                                            Up to 10% off Voucher
                                        </p>
                                    </div>
                                    <div className="three">
                                        <Link to={""}>Shop Now</Link>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="im">
                                    <img
                                        src="IPhone-PNG-Photos-Transparent-PNG.png"
                                        alt=""
                                        width={500}
                                        height={350}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text">
                                    <div className="one">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-apple"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                        </svg>
                                        <p>iPhone 14 Series</p>
                                    </div>
                                    <div className="tow">
                                        <p
                                            style={{
                                                fontSize: "48px",
                                                margin: "0",
                                                textAlign: "left",
                                            }}
                                        >
                                            Up to 10% off Voucher
                                        </p>
                                    </div>
                                    <div className="three">
                                        <Link to={""}>Shop Now</Link>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="im">
                                    <img
                                        src="IPhone-PNG-Photos-Transparent-PNG.png"
                                        alt=""
                                        width={500}
                                        height={350}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text">
                                    <div className="one">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-apple"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                        </svg>
                                        <p>iPhone 14 Series</p>
                                    </div>
                                    <div className="tow">
                                        <p
                                            style={{
                                                fontSize: "48px",
                                                margin: "0",
                                                textAlign: "left",
                                            }}
                                        >
                                            Up to 10% off Voucher
                                        </p>
                                    </div>
                                    <div className="three">
                                        <Link to={""}>Shop Now</Link>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="im">
                                    <img
                                        src="IPhone-PNG-Photos-Transparent-PNG.png"
                                        alt=""
                                        width={500}
                                        height={350}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text">
                                    <div className="one">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-apple"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                        </svg>
                                        <p>iPhone 14 Series</p>
                                    </div>
                                    <div className="tow">
                                        <p
                                            style={{
                                                fontSize: "48px",
                                                margin: "0",
                                                textAlign: "left",
                                            }}
                                        >
                                            Up to 10% off Voucher
                                        </p>
                                    </div>
                                    <div className="three">
                                        <Link to={""}>Shop Now</Link>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="im">
                                    <img
                                        src="IPhone-PNG-Photos-Transparent-PNG.png"
                                        alt=""
                                        width={500}
                                        height={350}
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div style={{ margin: "100px 0" }} className="category">
                    <div className="info mb-5">
                        <p>Categories</p>
                        <b>Browse By Category</b>
                    </div>
                    <div className="cards d-flex flex-wrap justify-content-center gap-5 mt-5">
                        <div className="item ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-phone"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <p>electronics</p>
                        </div>
                        <div className="item ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-phone"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <p>clothes</p>
                        </div>
                        <div className="item ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-phone"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <p>accessories</p>
                        </div>
                        <div className="item ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-phone"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <p>Phone</p>
                        </div>
                        <div className="item ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-phone"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <p>Phone</p>
                        </div>
                        <div className="item ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-phone"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <p>Phone</p>
                        </div>
                    </div>
                </div>
                <div style={{ margin: "100px 0" }} className="selling">
                    <div className="info d-flex justify-content-between align-items-center mb-5">
                        <div className="r">
                            <p>This Month</p>
                            <b>Best selling producte</b>
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
<<<<<<< Updated upstream
                                    <img
                                        src={require("../../Images/xbox-black front.jpg")}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="btn btn-dark">Add To Cart</div>
=======
                                    <img src="coat.png" className="card-img-top" alt="..." />
                                    <div onClick={handleAddToCart} className="btn btn-dark">Add To Cart</div>
>>>>>>> Stashed changes
                                    <AiOutlineHeart />
                                </div>
                                <div className="card-body">
                                    <p>coat canada</p>
                                    <span>
                                        300$ <b>360$</b>
                                    </span>
                                    <div className="star">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
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
                                    <div className="star">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
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
                                    <div className="star">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
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
                                    <div className="star">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="img_container">
                                    <img
                                        src={require("../../Images/spray front.jpg")}
                                        alt="..."
                                    />
                                    <div className="btn btn-dark">Add To Cart</div>
                                </div>
                                <div className="card-body">
                                    <p>coat canada</p>
                                    <span>
                                        300$ <b>360$</b>
                                    </span>
                                    <div className="star">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
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
                                    <div className="star">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
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
                                    <div className="star">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div style={{ margin: "100px 0" }} className="all_products">
                    <div className="info d-flex justify-content-between align-items-center mb-5">
                        <div className="r">
                            <p>Our productes</p>
                            <b>Explore Our Products</b>
                        </div>
                        <div className="buton">
                            <div className="btn">View all</div>
                        </div>
                    </div>
                    <div
                        className="row justify-content-center products"
                        style={{ gap: "30px" }}
                    >
                        {allProducts.map((prod, ind) => {
                            return (
                                <div className="col-3 card" style={{ width: "305px" }} key={ind}>
                                    <div className="img_container" onClick={() => navigate(`/view/${prod.id}`)}>
                                        <img src={prod.defaultImage.url} className="card-img-top" alt="..." />
                                        <div className="btn btn-dark">Add To Cart</div>
                                        <AiOutlineHeart />
                                        {prod.status === 'new' ? <div className="new">
                                            new
                                        </div> : ''}
                                    </div>
                                    <div className="card-body">
                                        <p>{prod.name}</p>
                                        <span>
                                            {prod.price - (prod.price * (prod.discount / 100))} <b>{prod.price} </b>
                                        </span>
                                        <span>availableItems : {prod.availableItems}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            {/* delivery  */}
            <div className="container py-5">
                <div className="delivery d-flex justify-content-center align-items-center gap-5">
                    <div className="first d-flex align-items-center flex-column">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 640 512"
                        >
                            <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                        </svg>
                        <p className="title">FREE AND FAST DELIVERY</p>
                        <p className="caption">Free delivery for all orders over $140</p>
                    </div>
                    <div className="medium d-flex align-items-center flex-column">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-headset"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                        </svg>{" "}
                        <p className="title">24/7 CUSTOMER SERVICE</p>
                        <p className="caption">Friendly 24/7 customer support</p>
                    </div>
                    <div className="last d-flex align-items-center flex-column">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-shield-check"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                            <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        </svg>{" "}
                        <p className="title">MONEY BACK GUARANTEE</p>
                        <p className="caption">We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
