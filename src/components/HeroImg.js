import "./HeroImgStyle.css";

import React from 'react';

import IntroImg from "../assets/sadahru.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
          <p> Je suis TRAN David, un étudiant en informatique</p>
            <h1>Bienvenue sur mon site</h1>
            <div>
              <Link to="/about" className="btn">A propos</Link>
              <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg