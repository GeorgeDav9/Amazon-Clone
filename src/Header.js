import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider"
import { auth } from './firebase'


function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuth = () => {
      if (user) {
        auth.signOut();
      }
    }

    return (
        <nav className="header">
            {/* Logo on the left */}
            <Link to="/">
             <img className ="header_logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            
            {/* Search box */}
            <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
            </div>

            {/* 3 links on the right */}
            <div className="header_nav">
              {/* 1st Link */}
        <Link to={!user && '/login'} className="header_link">
          <div onClick={handleAuth} className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

                {/* 2nd Link */}
                <Link to="/" className="header_link">
                  <div class="header_option"> 
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                  </div>
                  </Link>

                {/* 3rd Link */}
                <Link to="/" className="header_link">
                  <div class="header_option"> 
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                  </div>
                </Link>

                {/* 4th Link */}
                <Link to="/checkout" className="header_link">
                 <div class="header_optionCart">
                    {/* Shopping cart icon */}
                    <ShoppingCartIcon />
                    {/* Number of items in the cart */}
                    <span className="header_optionLineTwo header_cartCount">{cart?.length}</span>
                 </div>
                </Link>

            </div>


            {/* cart icon with number*/}
        </nav>
    )
}

export default Header
