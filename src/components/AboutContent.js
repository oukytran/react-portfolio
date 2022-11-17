import "./AboutStyle.css"
import React1 from "../assets/bojji.jpg";
import { Link } from "react-router-dom";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>TRAN DAVID</h1>
          <h2 style= {{color: "white"}}><u>Développeur Web</u></h2>
          <p> Je suis un étudiant en Master Informatique à l'Université Claude Bernard Lyon 1.
          <br></br> Passionné par le développement Web, je propose mes services pour programmer des sites Web.
          <br></br> N'hésitez pas à me contacter !
          
           
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={React1} className="img" alt="true"></img>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent