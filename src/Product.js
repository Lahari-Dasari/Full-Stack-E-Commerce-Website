import React, { useState } from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating}) {
  const [{basket}, dispatch] = useStateValue();
  const [showMessage, setShowMessage] = useState(false); // state to control the message display
  const addToCart = () =>{
    dispatch({
      type: 'ADD_TO_CART',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    setShowMessage(true); // set the state to show the message
    setTimeout(() => setShowMessage(false), 2000); // hide the message after 2 seconds
  };
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>INR </small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
              {Array(rating).fill().map((_, i)=>(
                  <p>⭐</p>
              ))}
            </div>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToCart}>Add to cart</button>
        {showMessage && <p>Item added to cart</p>} 
    </div>
  )
}

export default Product