import ReactDOM from "react-dom";
import React from "react"
import './staticReactApp/stylesheet.css';
import Footer from "./staticReactApp/Footer.js" 
import Header from "./staticReactApp/Header" 
import MainContent from "./staticReactApp/MainContent" 

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page ()
{
    return(
        <div className="root-page">
            <Header />
            <MainContent />

        </div>
    )
}

root.render(<Page tab="home" />);