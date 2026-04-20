import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import supabase from "../client";

const Update = () => {
    const {crewmate} = useParams();
    const [crewmateDetails, setCrewmateDetails] = useState([]);

    const [crewmateName, setCrewmateName] = useState("")
    const [crewmateSpeed, setCrewmateSpeed] = useState(0)
    const [crewmateColor, setCrewmateColor] = useState("red")

    useEffect(() => {
        getCrewmateDetails();
    }, [crewmate]);

    async function getCrewmateDetails() {
        const { data } = await supabase.from("crewmates").select('*').eq('name', crewmate);
        setCrewmateDetails(data[0]);

        setCrewmateName(data[0].name)
        setCrewmateSpeed(data[0].speed)
        setCrewmateColor(data[0].color)
    }

    const updateCrewmate = async () => {
        const {data, error} = await supabase.from("crewmates").update([{name: crewmateName, speed: crewmateSpeed, color: crewmateColor}]).eq('id', crewmateDetails.id).select();
        if (error) {
            console.error(error.message)
        }else{
            setCrewmateDetails([data[0]]);

            setCrewmateName(data[0].name)
            setCrewmateSpeed(data[0].speed)
            setCrewmateColor(data[0].color)
        }
    }
    const deleteCrewmate = async () => {
        const {error} = await supabase.from("crewmates").delete().eq('id', crewmateDetails.id);
        if (error) {
            console.error(error.message)
        }else{
            setCrewmateDetails.filter(item => item !== crewmateDetails);
        }
    }

    return (
        <>
        <h1>Update Crewmate</h1>
            {crewmateDetails && (
                <>
                <h3>Name: {crewmateDetails.name}</h3>
                <h3>Speed: {crewmateDetails.speed} mph</h3>
                <h3>Color: {crewmateDetails.color}</h3>
                </>
            )}

            <p>-------------------------------------</p>

            <div className="form-card">
                <h3>Name</h3>
                <input type="text" id="crewmate-name" name="crewmate-name" value={crewmateName} onChange={(e) => setCrewmateName(e.target.value)}></input>
            </div>
            <div className="form-card">
                <h3>Speed (mph)</h3>
                <input type="text" id="crewmate-speed" name="crewmate-speed" value={crewmateSpeed} onChange={(e) => setCrewmateSpeed(Number(e.target.value))}></input>
            </div>
            <div className="form-card">
                <h3>Color</h3>
                <input type="radio" id="crewmate-color" name="crewmate-color" value="red" checked={crewmateColor === 'red'} onChange={(e) => setCrewmateColor(e.target.value)}/>Red <br />
                <input type="radio" id="crewmate-color" name="crewmate-color" value="green" checked={crewmateColor === 'green'} onChange={(e) => setCrewmateColor(e.target.value)}/>Green <br />
                <input type="radio" id="crewmate-color" name="crewmate-color" value="blue" checked={crewmateColor === 'blue'} onChange={(e) => setCrewmateColor(e.target.value)}/>Blue <br />
                <input type="radio" id="crewmate-color" name="crewmate-color" value="purple" checked={crewmateColor === 'purple'} onChange={(e) => setCrewmateColor(e.target.value)}/>Purple <br />
                <input type="radio" id="crewmate-color" name="crewmate-color" value="yellow" checked={crewmateColor === 'yellow'} onChange={(e) => setCrewmateColor(e.target.value)}/>Yellow <br />
                <input type="radio" id="crewmate-color" name="crewmate-color" value="orange" checked={crewmateColor === 'orange'} onChange={(e) => setCrewmateColor(e.target.value)}/>Orange <br />
                <input type="radio" id="crewmate-color" name="crewmate-color" value="pink" checked={crewmateColor === 'pink'} onChange={(e) => setCrewmateColor(e.target.value)}/>Pink <br />
                <input type="radio" id="crewmate-color" name="crewmate-color" value="rainbow" checked={crewmateColor === 'rainbow'} onChange={(e) => setCrewmateColor(e.target.value)}/>Rainbow <br />
            </div>

            <button onClick={updateCrewmate}>Update Crewmate Info</button>

            <button onClick={deleteCrewmate}>Delete Crewmate</button>

            <Link to="/gallery">Return to Gallery</Link>
        </>
    )
}

export default Update;