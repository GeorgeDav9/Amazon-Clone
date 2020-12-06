import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

       console.log("I'm in the cart", cart)
       
    const addToCart = () => { 
     // dispatch item to data layer
     dispatch({
         type: 'ADD_TO_CART',
         item: {
             id: id,
             title: title,
             image: image,
             price: price,
             rating: rating,
         },
     });
  };

    return (
        <div className="product">
          <div class="product_info">
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
             </div> 
          </div>
            
           <img src={image} alt="" />
           <button onClick={addToCart}>Add to cart</button>
        </div>
    );

}
export default Product
