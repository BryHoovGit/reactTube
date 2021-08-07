import React from 'react'
import '../stylesheets/Header.css'

const Header = () => {
    return (
        <div>
            <h2 className="header-top ui icon header">
                <i className="youtube icon"></i>
                <div className="content">
                ReactTube
                </div>
            </h2>
        </div>
    )
}

export default Header
