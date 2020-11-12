import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';

import { FaShoppingCart } from 'react-icons/fa';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { cochiloriosNavbarLogo } from '../../data';

const links = [
    {text:'Inicio', to:"/#"}, 
    {text:'Catálogo', to:"/#catalogo"}, 
    {text:'Mi pedido', to:"/#pedido"}, 
    //{text:'Galería', to:"/galeria"}, 
]

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
        <>{ 
            billCost !== undefined && 
            <div className="navbar-end navbar-item">
                <Link className="button tag is-primary is-medium" to="/#pedido">
                    ${billCost}
                    <FaShoppingCart className="ml-1"/>
                </Link>                                       
            </div>
        }</>
    )

    const exit = () => setIsActive(false);
    const Links = () => {
        return links.map( link => (
            <Link className="navbar-item" 
                to={link.to}
                key={link.to}
                onClick={exit}>
                {link.text}
            </Link>
        ))
    }

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/#" onClick={exit}>
                    <img src={cochiloriosNavbarLogo} width="150"/>
                </Link>

                <MobileView>
                    <CostBadge/>
                </MobileView>
                <ExpandButton/>
            </div>

            <div 
                id="navbarBasicExample" 
                className={`navbar-menu ${isActive? 'is-active': ''}`}>

                <div className="navbar-start">
                    <Links/>
                </div>

                <BrowserView>
                    <CostBadge/>
                </BrowserView>
            </div>
            </nav>
    )
}
