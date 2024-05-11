import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext)
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-field">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="text" placeholder='Email Address' />
                <input type="text" placeholder='Street' />
                <div className="multi-field">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-field">
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type='text' placeholder='Phone'></input>
            </div>
            <div className="place-order-right">
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
                        <button >PROCEED TO PAYMENT</button>
                    </div>
                    </div>
            </div>
        </form>
    )
}

export default PlaceOrder
