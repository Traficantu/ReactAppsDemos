import React from "react"
import './stylesheet.css';
import reactLogo from "./Assets/Images/react-icon-small.png"

export default function Header()
{
    return(
    <header>
        <nav className="nav-items">
            <img className="nav-logo" src={reactLogo}/>
            <h3>ReactFacts</h3>
            <h4> React Course - Project 1</h4>
        </nav>
    </header>
    )
}