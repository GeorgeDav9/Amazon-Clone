import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutItem from './CheckoutItem';
import { Link } from "react-router-dom";


function Payment() {
    const [{ cart, user }, dispatch ] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (<Link to='/checkout'>{cart.length} items 
                    </Link>)
                </h1>

                {/* payment section - delivery address*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* payment section - review items*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {cart.map(item => (
                            <CheckoutItem
                                 id={item.id}
                                 title={item.title}
                                 image={item.image}
                                 price={item.price}
                                 rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                
                {/* payment section - payment method*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/* Stripe  magic */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
