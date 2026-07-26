import "./Navbar.css";
import { useLocation } from "react-router-dom";
function Navbar(){
    const location = useLocation();
        return(
        <>
        <div className="navbar">
            <h2>
                {location.pathname==="/"?"Dashboard":
                location.pathname.slice(1)}
            </h2>
        <input type="text"
        placeholder="serach"/>
        </div>
        </>
    )
}
export default Navbar;