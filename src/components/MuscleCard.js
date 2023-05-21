import React, { useEffect, useState } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import CardNavBar from "./CardNavBar";



function MuscleCard({ muscleGroup }) {
    const[individualMuscleGroup, setIndividualMuscleGroup] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9292/muscle_groups/${muscleGroup.id}`)
            .then((r) => r.json())
            .then((muscle) => setIndividualMuscleGroup(muscle))
    },[])

    function handleLinks(exercise, muscleGroup) {
        // console.log(muscleGroup);
        return(
            <div>
                <Routes>
                    <Route path={`/muscle-groups/${muscleGroup.name}/${exercise.name}`} element={<ExerciseCard exercise={exercise} />} />
                </Routes>

                <CardNavBar key={exercise.name} exercise={exercise} muscleGroup={muscleGroup}/>
            </div>
        )
    }
    
    if (individualMuscleGroup){
        return(
            <div className="card">
                <h2>{muscleGroup.name}</h2>
                <img src={muscleGroup.image_url} alt={muscleGroup.name}/>
                {individualMuscleGroup.exercises.map((exercise) => handleLinks(exercise, muscleGroup))}
            </div>
        )
    }
}

export default MuscleCard;