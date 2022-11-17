import "./NavbarStyle.css";

import React, { useState } from 'react';
import {Link} from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";
import { click } from "@testing-library/user-event/dist/click";

const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100) {
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);

  return (
    <div className ={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>OukyTran</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/about">A propos</Link>
            </li>
            <li>
                <Link to="/experience">Experience</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="menu" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{ color: "#fff"}
            } />
            ) : (
            <FaBars size={20} style={{ color: "#fff"}
            } />
            )}
                   
        </div>
    </div>
  )
}

export default Navbar