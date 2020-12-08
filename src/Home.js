import React from 'react';
import Product from './Product';
import './Home.css';


function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3196_HOL20_Acquisition/Amazon_GW_DesktopTallHero_ENG_RB-3196_HOL20_v2_Acquisition_1500x600._CB415330765_.jpg" alt="" />
       
       
       {/* Product id, title, price, rating, image */}
      <div class="home_row">
      <Product 
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
         /> 
      <Product 
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
         /> 
      </div>
      <div className="home_row">
      <Product 
         id="112234"
         title="Playstation 5 console"
         price={499.99}
         rating={5}
         image="https://m.media-amazon.com/images/I/31Tu93a7ZkL._AC_SY200_.jpg"
         /> 
         <Product 
         id="123321"
         title="JavaScript: Programming Basics for Absolute Beginners (Step-By-Step) (Volume 1)"
         price={16.38}
         rating={4}
         image="https://m.media-amazon.com/images/I/61Hr46zjSAL._AC_UY218_.jpg"
         /> 
         <Product 
         id="123321"
         title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage) - Space Gray"
         price={2199.00}
         rating={4}
         image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg"
         /> 
      </div>
      <div className="home_row">
      <Product 
         id="90829332"
         title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
         price={1094.98}
         rating={4}
         image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
         /> 
      </div>

       {/* Product */}
       
        </div>
    )
}

export default Home
