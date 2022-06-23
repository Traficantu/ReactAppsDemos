import ReactDOM from "react-dom/client";
import React from "react"
import './digitalBuisnessCard/stylesheet.css';
import Footer from "./digitalBuisnessCard/Footer" 
import Header from "./digitalBuisnessCard/Header" 
import MainContent from "./digitalBuisnessCard/MainContent" 

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page ()
{
    return(
        <div className="root-page">
            <Header />
            <MainContent />
            <Footer />

        </div>
    )
}

root.render(<Page tab="home" />);