import logo from './assets/logo.jpg'
import React from "react";
import './navbar.css'

const Navigation=()=>{
return (
       

    <div className='navigation-body'>
        <header>
        <div id="topnav" className="navigation-navbar" >
        <a className="navigation-navbar-brand" href="/" >
        <div className="navigation-logo-image">
        <img src={logo}  className="navigation-img-responsive" alt='' />
        </div>
         </a>
        <div className="navigation-navbar-right-menu" >
             <a href="/" className="active" >
               Home
                </a>
                <a href="/page2">
               Destination
                </a>
                <a href="/about-us">
               About us
                </a>
                <a href='/Products'>Products</a>
                <div className='navigation-bar-button'>

               <button type="button" className="btn btn-dark" >
                <a href='/signup'>
                Signup
                </a>
                </button>
                </div>
               
         </div>
         </div>
        
            
            </header>
        </div>
     )}
     export default Navigation