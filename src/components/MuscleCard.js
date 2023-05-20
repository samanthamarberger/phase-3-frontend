import React from "react";

function MuscleCard({ muscleGroup }) {
    return(
        <div className="card">
            <h2>{muscleGroup.name}</h2>
            <img src={muscleGroup.image_url} alt={muscleGroup.name}/>
        </div>
    )
}

export default MuscleCard;