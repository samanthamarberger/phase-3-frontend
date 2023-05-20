import React from "react";
import MuscleCard from "./MuscleCard.js";

function MuscleGroups({ muscleGroups }) {

    return(
        <div>
            <h2>Muscle Group Page</h2>
            <div className="container">
                {muscleGroups.map((muscleGroup) => <MuscleCard key={muscleGroup.id} muscleGroup={muscleGroup} />)}
                This is a container for the muscle groups
            </div>
        </div>
    );
}

export default MuscleGroups;