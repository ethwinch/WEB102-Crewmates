import { useState } from "react"

import supabase from "../client.js"

const Create = () => {
    const [crewmateName, setCrewmateName] = useState("")
    const [crewmateSpeed, setCrewmateSpeed] = useState(0)
    const [crewmateColor, setCrewmateColor] = useState("red")

    const [crewmate, setCrewmate] = useState([])

    const submitCrewmate = async () => {
        const {data, error} = await supabase.from("crewmates").insert([{name: crewmateName, speed: crewmateSpeed, color: crewmateColor}]);
        if (error) {
            console.error(error.message)
        }else{
            setCrewmate([...crewmate, data[0]]);
        }
    }

    return (
        <>
        <h1>CREATE A CREWMATE</h1>
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

        <button onClick={submitCrewmate}>Create Crewmate</button>
        </>
    )
}

export default Create;