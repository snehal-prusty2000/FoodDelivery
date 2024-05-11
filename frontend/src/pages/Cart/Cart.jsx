import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

   const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div className="cart-items-title cart-items-item">
                                    {/* <p>{item.name}</p> */}
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            {/* <p>{0}</p> */}
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            {/* <p>${2}</p> */}
                            <p>${getTotalCartAmount()===0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            {/* <p>{0}</p> */}
                            {/* <p>${getTotalCartAmount()+2}</p> */}
                            <p>${getTotalCartAmount()===0 ? 0 : getTotalCartAmount()+2}</p>
                        </div>
                        <button onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
                    </div>
                    </div>
                    <div className="cart-promocode">
                        <div>
                            <p>If You Have Promocode , Enter it here</p>
                            <div className="cart-promocode-input">
                                <input type="text" placeholder='promo code 74$zaAWG' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Cart

