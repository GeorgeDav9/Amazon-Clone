import React from 'react'
import "./Product.css"

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
             <div class="product_rating">
                  {Array(rating)
                   .fill()
                   .map((_) => (
                     <p>⭐️</p>
                  ))}
               }
             </div>
           <img src={image} alt="" />
           <button type="">Add to cart</button>
        </div>
    );
}

export default Product
