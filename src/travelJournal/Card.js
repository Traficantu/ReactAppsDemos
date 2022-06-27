import React from "react";
import coverImg from "./Assets/Images/pic1.png"

export default function Card(props)
{
    return(
        <section className="card">
            <img className="card-coverImg" src={props.data.imageUrl}/>
            <div className="card--details">
                <div className="card--location"> 
                 <p className="card-location-country">{props.data.location}</p>
                 <a className="card-location-mapsLink" href={props.data.googleMapsUrl}>
                    View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.data.title}</h2>
                <p className="card-date">{props.data.startDate + 
                " - " + props.data.endDate}</p>
                <p className="card-desc">{props.data.description}</p>
            </div>
        </section>
    )
}