import "./FooterStyle.css"
import React from 'react'
import { FaGit, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={25} style={{ color: 
                    "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Villeurbanne, 69100.</p>
                        <p>France.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={25} style={{ color:
                    "#fff", marginRight: "2rem"}} />
                    07 68 21 93 27</h4>
                </div>
                <br></br>
                <div className="email">
                    <h4><FaMailBulk size={25} style= {{color:
                    "#fff", marginRight: "2rem"}} />
                    pro.david.tran@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                
                <div className="social">
                    <br></br>
                    <a href ="https://github.com/oukytran" target="_blank"><FaGit size={40} style={{ color: 
                    "#fff", marginRight: "2rem"}} /></a>
                    <FaTwitter size={40} style={{ color: 
                    "#fff", marginRight: "2rem"}} />
                    <a href = "https://www.linkedin.com/in/david-tran-209a68229/" target="_blank"><FaLinkedin size={40} style={{ color: 
                    "#fff", marginRight: "2rem"}} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer