import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="header">
            {/* Logo on the left */}
            <Link to="/">
             <img className ="header_logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            
            {/* Search box */}
            {/* 3 links on the right */}
            {/* cart icon with number*/}
        </nav>
    )
}

export default Header
