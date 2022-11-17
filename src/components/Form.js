import "./FormStyle.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Votre nom</label>
            <input type = "text"></input>
            <label>Email</label>
            <input type = "text"></input>
            <label>Objet</label>
            <input type = "text"></input>
            <label>Message</label>
            <textarea 
// @ts-ignore
            rows='6' placeholder="Tapez votre message ici."/>
            <button className="btn">Envoyer</button>
            </form>
    </div>
  )
}

export default Form