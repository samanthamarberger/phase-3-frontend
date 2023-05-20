import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";



function MuscleCard({ muscleGroup }) {
    const[individualMuscleGroup, setIndividualMuscleGroup] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9292/muscle_groups/${muscleGroup.id}`)
            .then((r) => r.json())
            .then((muscle) => setIndividualMuscleGroup(muscle))
    },[])
    console.log(individualMuscleGroup)

    return(
        <div className="card">
            <h2>{muscleGroup.name}</h2>
            <img src={muscleGroup.image_url} alt={muscleGroup.name}/>
            {/* <h2>{individualMuscleGroup.exercises}</h2> */}
            {/* {individualMuscleGroup.exercises.map((exercise) => <ExerciseCard exercise={exercise}/>)} */}
        </div>
    )
}

export default MuscleCard;