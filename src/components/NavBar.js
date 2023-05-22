import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="navbar">
            <nav>
                <Link to="/" className='navBarLink'>Home</Link>
                <Link to="/muscle-groups" className='navBarLink'>Muscle Groups</Link>
                <Link to='/add-muscle-group' className='navBarLink'> Add Muscle Group</Link>
                <Link to='/add-exercise' className='navBarLink'> Add Exercise</Link>
                <Link to='/add-stretch' className='navBarLink'> Add Stretch</Link>
            </nav>
        </div>
    )
}

export default NavBar;