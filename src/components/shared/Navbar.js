import React, { useState } from 'react'

export default function Navbar() {

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

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>

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

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
    )
}
