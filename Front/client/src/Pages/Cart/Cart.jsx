import style from './Cart.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteFromCart } from '../../components/cartSlice'
function Cart() {
    

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [quantities, setQuantities] = useState(cart.map((prod) => prod.quantity));
    const totalPrice = cart.reduce((acc, product, index) => {
        acc += product.price * quantities[index];
        return acc;
    }, 0)

    const increaseQuantity = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const decreaseQuantity = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] = Math.max(1, newQuantities[index] - 1);
        setQuantities(newQuantities);
    };
    return (
        <>
            <div className={`container `}>
                <nav aria-label={`breadcrumb `}>
                    <ol className={`breadcrumb m ${style.m}`}>
                        <Link to={"/home"} className={`breadcrumb-item ${style.home}`} aria-current="page">Home</Link>
                        <Link to={"/cart"} className={`breadcrumb-item active ${style.cart}`}>Cart</Link>
                    </ol>
                </nav>

                <div className={`box container d-grid align-content-center ${style.box}`}  >
                    <div className='row d'>
                        <div className='col-3 d-flex flex-start align-items-center'>Product</div>
                        <div className='col-3 d-flex justify-content-center align-items-center'>Price</div>
                        <div className='col-3 d-flex justify-content-center align-items-center'>Quantity</div>
                        <div className={`col-2 d-flex justify-content-center align-items-center`}>Subtotal</div>
                        <div className={`col-1 d-flex justify-content-center align-items-center`}></div>
                    </div>
                </div>
                {cart.map((prod, index) => (
                    <div className={`box container d-grid align-content-center mt-5 ${style.box}`} key={prod.id} >
                        <div className='row'>


                            <div className='col-3 d-flex flex-start align-items-center'>
                                <img src={prod.defaultImage.url} className={`${style.image}`} alt="..." />
                                {prod.name}
                            </div>
                            <div className='col-3 d-flex justify-content-center align-items-center  align-self-center'>
                                ${prod.price}
                            </div>
                            <div className='col-3 d-flex justify-content-center align-items-center align-self-center'>
                                <span className="border border-black rounded-1 d-flex align-items-center">
                                    <div onClick={() => decreaseQuantity(index)} className="btn count">-</div>
                                    <big className="px-4 border-start border-end border-dark">
                                        {quantities[index]}
                                    </big>
                                    <div onClick={() => increaseQuantity(index)} className="btn count">+</div>
                                </span>
                            </div>
                            <div className='col-2 d-flex justify-content-center align-items-center align-self-center'>
                                ${prod.price * quantities[index]}
                            </div>
                            <div className='col-1 d-flex justify-content-center align-items-center align-self-center'>
                                <FaRegTrashAlt className={`${style.can}`} onClick={() => dispatch(deleteFromCart(prod))} />
                            </div>
                        </div>
                    </div>
                ))}



            </div>
            <div className={`d-grid align-item-center col-2 mt-5 bton ${style.bton}`}>
                <Link to={'/home'} type="button" className={`btn btn-outline-danger p-3 ${style.bton}`}>Return To Shop</Link>
            </div>
            <div className={`d-flex container mb ${style.mb}`}>
                <div className='d-flex'>
                    <input className={`copuon ${style.copuon}`} type='text' placeholder='Coupon code' />
                    <button type="button" className={`btn btn-outline-danger bton2 ${style.bton2}`}>Apply coupon</button>
                </div>
                <div className={`d-flex flex-column container w2 ${style.w2}`}>
                    <p className={`total`}>
                        Cart total
                    </p>
                    <div className='totalP d-flex flex-column'>
                        <div className={`subtotal d-flex  ${style.subtotal}`}>
                            <label>Subtotal :</label>
                            <p >{totalPrice}</p>
                        </div>
                        <div className={`subtotal d-flex ${style.subtotal}`}>
                            <label>Shipping :</label>
                            <p >Free</p>
                        </div>
                        <div className={`subtotal d-flex  ${style.subtotal}`}>
                            <label>Total :</label>
                            <p>{totalPrice}</p>
                        </div>
                    </div>
                    <button type="button" className={`btn btn-outline-danger bton3 ${style.bton3}`}>Procees to checkout</button>
                </div>
            </div>
        </>
    );
};

export default Cart;