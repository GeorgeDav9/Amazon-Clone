import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"

function Header() {
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
            <div className="headerNav">
                {/* 1st Link */}
                <Link to="/login" className="header_link">
                  <div class="header_option"> 
                    <span>Hello u</span>
                    <span>Sign In</span>
                  </div>
                </Link>
                {/* 2nd Link */}
                
                {/* 3rd Link */}
                
                {/* 4th Link */}
            </div>


            {/* cart icon with number*/}
        </nav>
    )
}

export default Header
