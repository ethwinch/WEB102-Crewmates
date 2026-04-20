import { Outlet, Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <nav style={{margin: "1em"}}>
            <Link style={{backgroundColor: "white", color: "navy",  margin: "1em", padding: "1em"}} to="/">Home</Link>
            <Link style={{backgroundColor: "white", color: "navy",  margin: "1em", padding: "1em"}} to="/create">Create a Crewmate</Link>
            <Link style={{backgroundColor: "white", color: "navy",  margin: "1em", padding: "1em"}} to="/gallery">Crewmate Gallery</Link>
        </nav>
        <Outlet />
        </>
    )
}

export default Header;