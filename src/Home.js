import React from 'react';
import Product from './Product';
import './Home.css';


function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzExNTRjZmUt/YzExNTRjZmUt-N2ZkYTk2NzQt-w1500._CB414504256_.jpg" alt="" />
       
       
       {/* Product id, title, price, rating, image */}
      <div class="home_row">
      <Product 
         id="123321"
         title="JavaScript: Programming Basics for Absolute Beginners (Step-By-Step) (Volume 1)"
         price={16.38}
         rating={4}
         image="https://m.media-amazon.com/images/I/61Hr46zjSAL._AC_UY218_.jpg"
         /> 
      <Product 
         id="123321"
         title="JavaScript: Programming Basics for Absolute Beginners (Step-By-Step) (Volume 1)"
         price={16.38}
         rating={4}
         image="https://m.media-amazon.com/images/I/61Hr46zjSAL._AC_UY218_.jpg"
         /> 
      </div>
      <div className="home_row">
      <Product 
         id="123321"
         title="JavaScript: Programming Basics for Absolute Beginners (Step-By-Step) (Volume 1)"
         price={16.38}
         rating={4}
         image="https://m.media-amazon.com/images/I/61Hr46zjSAL._AC_UY218_.jpg"
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
         title="JavaScript: Programming Basics for Absolute Beginners (Step-By-Step) (Volume 1)"
         price={16.38}
         rating={4}
         image="https://m.media-amazon.com/images/I/61Hr46zjSAL._AC_UY218_.jpg"
         /> 
      </div>
      <div className="home_row">
      <Product 
         id="123321"
         title="JavaScript: Programming Basics for Absolute Beginners (Step-By-Step) (Volume 1)"
         price={16.38}
         rating={4}
         image="https://m.media-amazon.com/images/I/61Hr46zjSAL._AC_UY218_.jpg"
         /> 
      </div>

       {/* Product */}
       
        </div>
    )
}

export default Home
