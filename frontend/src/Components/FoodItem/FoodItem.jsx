import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../Assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
   // const [itemCount , setItemCount] =useState(0); 
    const {cartItems, addToCart , removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt='' />
            {/* {!itemCount 
            ? <img className='add' onClick={()=>setItemCount(prev =>prev + 1)} src={assets.add_icon_white} alt='' />
            :<div className='food-item-counter'>
                    <img onClick={()=>setItemCount(prev =>prev - 1)} src={assets.remove_icon_red} alt="" className="src" />
                    <p>{itemCount}</p>
                    <img onClick={()=>setItemCount(prev =>prev + 1)} src={assets.add_icon_green} alt="" className="src" />
                </div>
            } */}
             {!cartItems[id]
            ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' />
            :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" className="src" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" className="src" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" className="src" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>         
        </div>
    </div>
  )
}

export default FoodItem
