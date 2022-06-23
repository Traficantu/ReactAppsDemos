import React from "react"
import './stylesheet.css';
import avatar from "./Assets/Images/avatar.jpg"

export default function Header()
{
   return( 
    <div className="header-items">
        <img className="header-avatar" src={avatar} />
        <h1>Alexandru Mihaila</h1>
        <p className="header-job-title">Backend Developer</p>
        <p className="header-job-subtitle">AlexM.website</p>
        <button className="header-email-btn"> Email </button>
        <button className="header-linkedin-btn"> Linkedin </button>
    </div>)
}