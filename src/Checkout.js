import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutItem from "./CheckoutItem"

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></img>
                <div>
                <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">
                        Your Shopping Cart
                    </h2>

                        {cart.map(item => (
                            <CheckoutItem
                                 id={item.id}
                                 title={item.title}
                                 image={item.image}
                                 price={item.price}
                                 rating={item.rating}
                            />
                        ))}
                    {/* Checkout items */}
                    {/* Checkout items */}
                    {/* Checkout items */}
                    {/* Checkout items */}
                    
                </div>
            </div>
                <div class="checkout_right">
                    <Subtotal />
                </div>
            </div>
        
    )
}

export default Checkout
