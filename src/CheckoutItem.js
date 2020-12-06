import React from 'react';
import './CheckoutItem.css';
import { useStateValue } from "./StateProvider";

function CheckoutItem({id, image, title, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        //remove the item from cart
        dispatch({
            type: 'REMOVE_FROM_CART',  
            id: id,
        })
    }

    return (
        <div className="checkout_item">
            <img className="checkoutItem_image" src={image} />

            <div className="checkoutItem_info">
                <p className="checkoutItem_title">{title}</p>
                <p className="checkoutItem_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutItem_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>⭐️</p>
                    ))}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem
