import React from "react";
import { NavLink } from "react-router-dom";

function CardNavBar({ exercise, muscleGroup }) {
    return(
        <div className="cardNavbar"> 
      <nav>
        <NavLink
          to={`/muscle-groups/${muscleGroup.name}/${exercise.name}`}
          className={`${exercise.name}`}
        >
          {`${exercise.name}`}
        </NavLink>
      </nav>
    </div>
    )
}

export default CardNavBar