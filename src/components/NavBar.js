import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="navbar">
            <nav>
                <Link to="/muscle-groups" className="muscle-groups">Muscle Groups</Link>
            </nav>
        </div>
    )
}

export default NavBar;