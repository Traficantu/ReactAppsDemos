import ReactDOM from "react-dom/client";
import React from "react"
import './travelJournal/stylesheet.css';
// import Footer from "./Footer" 
import Header from "./travelJournal/Header" 
//import MainContent from "./MainContent" 
import Card from "./travelJournal/Card";
import Data from "./travelJournal/data"

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page ()
{
    const aTravelCard = Data.map(item =>{
        return(<Card data={item} />)
    })
    return(
        <div className="root-page">
            <Header />
            {aTravelCard}
        </div>
    )
}

root.render(<Page tab="home" />);