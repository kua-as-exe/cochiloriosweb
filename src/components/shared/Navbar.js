import React, { useState } from 'react'

import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar({billCost}) {

    const [isActive, setIsActive] = useState(false)
    
    const ExpandButton = () => (
        <a role="button" 
            className="navbar-burger burger" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbarBasicExample"
            onClick={ () => setIsActive(!isActive) }>

            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    )

    const CostBadge = () => (
        <div className="navbar-item">
            <button class="button tag is-primary is-medium">
                ${billCost}
                <FaShoppingCart className="ml-1"/>
            </button>                    
        </div>
    )

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="img/logo-cochilorios.png" width="150"/>
                </a>

                <div className="navbar-end is-hidden-desktop">
                    <CostBadge/>
                </div>
                <ExpandButton/>
            </div>

            <div 
                id="navbarBasicExample" 
                className={`navbar-menu ${isActive? 'is-active': ''}`}>

                <div className="navbar-start">
                <a className="navbar-item">
                    Inicio
                </a>

                <a className="navbar-item">
                    Catálogo
                </a>

                <a className="navbar-item">
                    Sobre nosotros
                </a>

                
                </div>

                <div className="navbar-end is-hidden-tablet-only is-hidden-touch">
                    <CostBadge/>
                </div>
            </div>
            </nav>
    )
}
