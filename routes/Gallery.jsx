import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import supabase from "../client.js"

const Gallery = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        getCrewmates();
    }, []);

    async function getCrewmates() {
        const { data } = await supabase.from("crewmates").select();
        setCrewmates(data);
    }

    return (
        <>
        <h1>GALLERY</h1>
        <ul className="gallery">
            {crewmates.map((crewmate) => (
                <div key={crewmate.name} className={"crewmate-card " + (crewmate.color === "rainbow" ? "rainbow" : "")} style={crewmate.color === 'rainbow' ? {} : {backgroundColor: crewmate.color}}>
                    <li key={crewmate.name}><h3>{crewmate.name}</h3><br />{crewmate.speed} mph<br />{crewmate.color}<br /></li>
                    <Link to={`/crewmate/${crewmate.name}`}>View Details</Link>
                    <br />
                    <Link to={`/update/${crewmate.name}`}>Update Crewmate Info</Link>
                </div>
            ))}
        </ul>
        </>
    )
}

export default Gallery;