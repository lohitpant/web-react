import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

export default function Navbar(){

    const[click, setClick]=useState(false);
    const[button,setButton]=useState(true);

    const handleClick=()=>setClick(!click);    

    const closeMobileMenu=()=>setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true);
        }
    }

    useEffect(()=>{
        showButton();
    },[])

    window.addEventListener('resize', showButton);

    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}><i className="fas fa-heart"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click?"fas fa-times":"fas fa-bars"}/>
                </div>

                <ul className={click?"nav-menu active":"nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>My Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mywork" className="nav-links" onClick={closeMobileMenu}>My Work</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">Hire Me!</Button>}
            </div>
        </nav>
        </>
    );
}