import React from "react";
import { Link } from "react-router-dom";

function CardNavBar({ exercise, muscleGroup }) {
    // console.log(muscleGroup);
    return(
        <div className="cardNavbar"> 
            <nav>
                <Link to={`/muscle-groups/${muscleGroup.name}/${exercise.name}`} className={`${exercise.name}`}>{`${exercise.name}`}</Link>
            </nav>
        </div>
    )
}

export default CardNavBar