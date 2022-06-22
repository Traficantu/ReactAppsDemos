import React from "react"
import './stylesheet.css';

export default function MainContent()
{
    return (
    <div className ="main-content">
        <h1>Fun facts about React</h1>
        <ul className ="main-content-list">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K starts on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}