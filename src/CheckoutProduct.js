import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromCart = () => {
        const index = basket.findIndex((item) => item.id === id);

        if (index !== -1) {
            dispatch({
                type: 'REMOVE_FROM_CART',
                index: index,
            });
        } else {
            console.error(`Failed to remove product with id ${id}: product not found in basket`);
        }
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt={title} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>INR </small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, index) => (
                        <p key={index}>⭐</p>
                    ))}
                </div>
                <FlipMove>
                {!hideButton && (
                    <button key={id} onClick={removeFromCart}>Remove from Cart</button>
                )}
                </FlipMove>
            </div>
        </div>
    );
}

export default CheckoutProduct;
