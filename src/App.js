import React, { useState } from 'react';
import './css/App.css';

import HomeCarousel from './components/HomeCarousel.js'
import Navbar from './components/shared/Navbar';
import ItemCard from './components/shared/ItemCard.js'
import TakeBill from './components/TakeBill';
import { products, sections, WhatsappNumber } from './data';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import HomePage from './pages/HomePage';
import GaleryPage from './pages/GaleryPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App() {
    /*
    return (<div>
        <HomePage/>
        <Footer/>
    </div>)
    */
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/galeria">
                        <GaleryPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>    
                <Footer/>
            </div>
        </Router>
    )
}
