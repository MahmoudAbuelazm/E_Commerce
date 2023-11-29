import React, { useEffect, useState } from 'react';
import style from './Cart.module.css';
import monitor from '../../Images/pngegg.png'
import controller from '../../Images/pngegg (1).png'
import { Link } from 'react-router-dom';
import { RiCoupon3Line } from "react-icons/ri";
import { useSelector } from 'react-redux';
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    return (
        <>

            <div className={`container `}>
                <nav aria-label={`breadcrumb `}>
                    <ol className={`breadcrumb m ${style.m}`}>
                        <Link to={"/home"} className={`breadcrumb-item ${style.home}`} aria-current="page">Home</Link>
                        <Link to={"/cart"} className={`breadcrumb-item active ${style.cart}`}>Cart</Link>
                    </ol>
                </nav>

                <div className ={`box container d-grid align-content-center ${style.box}`}  >
                    <div className='row d'>
                        <div className='col-3 d-flex justify-content-center align-items-center'>Product</div>
                        <div className='col-3 d-flex justify-content-center align-items-center'>Price</div>
                        <div className='col-3 d-flex justify-content-center align-items-center'>Quantity</div>
                        <div className='col-3 d-flex justify-content-center align-items-center'>Subtotal</div>
                    </div>
                </div>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <h1>{item.title}</h1>
                    </li>
                ))}
                <div className ={`box container d-grid align-content-center mt-5 ${style.box}`}  >
                    <div className='row'>
                        <div className='col-3 d-flex justify-content-center align-items-center'>
                            <img src={monitor} />
                            LCD Monitor
                        </div>

                        <div className='col-3 d-flex justify-content-center align-items-center  align-self-center'>$650</div>
                        <div className='col-3 d-flex justify-content-center align-items-center align-self-center'>
                            <input id="number" type="number" value={'01'} className={`${style.quant}`}/>
                        </div>
                        <div className='col-3 d-flex justify-content-center align-items-center align-self-center'>$650</div>
                    </div>
                </div>
                <div className ={`box container d-grid align-content-center mt-5 ${style.box}`}  >
                    <div className='row'>
                        <div className='col-3 d-flex justify-content-center align-items-center'>
                            <img src={controller} />
                            H1 Gamepad
                        </div>

                        <div className='col-3 d-flex justify-content-center align-items-center  align-self-center'>$550</div>
                        <div className='col-3 d-flex justify-content-center align-items-center align-self-center'>
                            <input id="number" type="number" value={'02'} />
                        </div>
                        <div className='col-3 d-flex justify-content-center align-items-center align-self-center'>$1110</div>
                    </div>
                </div>
                
                
            </div>
            <div className={`d-grid align-item-center col-2 mt-5 bton ${style.bton}`}>
                <Link to={'/home'} type="button" className={`btn btn-outline-danger p-3 ${style.bton}`}>Return To Shop</Link>   
            </div>
            <div className={`d-flex container mb ${style.mb}`}>
                <div className='d-flex'>
                    <input className={`copuon ${style.copuon}`} type='text'placeholder='Coupon code' />
                    <button type="button" className={`btn btn-outline-danger bton2 ${style.bton2}`}>Apply coupon</button>   
                </div>
                <div className={`d-flex flex-column container w2 ${style.w2}`}>
                    <p className={`total`}>
                        Cart total
                    </p>
                    <div className='totalP d-flex flex-column'>
                        <div className={`subtotal d-flex  ${style.subtotal}`}>
                            <label>Subtotal :</label>
                            <p >$1750</p>                            
                        </div>
                        <div className={`subtotal d-flex ${style.subtotal}`}>
                            <label>Shipping :</label>
                            <p >Free</p>
                        </div>
                        <div className={`subtotal d-flex  ${style.subtotal}`}>
                            <label>Total :</label>
                            <p>$1750</p> 
                        </div>
                    </div>
                    <button type="button" className={`btn btn-outline-danger bton3 ${style.bton3}`}>Proees to checkout</button>   
                </div>
            </div>
        </>
    );
};

export default Cart;