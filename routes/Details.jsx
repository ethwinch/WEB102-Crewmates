import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import supabase from "../client";

const Details = () => {
    const {crewmate} = useParams();
    const [crewmateDetails, setCrewmateDetails] = useState([]);

    useEffect(() => {
        getCrewmateDetails();
    }, []);

    async function getCrewmateDetails() {
        const { data } = await supabase.from("crewmates").select('*').eq('name', crewmate);
        setCrewmateDetails(data[0]);
    }

    return (
        <div className="crewmate-details">
            <h1>Crewmate {crewmate}</h1>
            {crewmateDetails && (
                <>
                <h4>Crewmate ID: {crewmateDetails.id}</h4>
                <h4>Time Created: {crewmateDetails.created_at}</h4>
                <h3>{crewmateDetails.speed} mph</h3>
                <h3>{crewmateDetails.color}</h3>
                </>
            )}
            <Link to="/gallery">Return to Gallery</Link>
            <br />
            <Link to={`/update/${crewmate}`}>Update Crewmate Info</Link>
        </div>
    )
}

export default Details;