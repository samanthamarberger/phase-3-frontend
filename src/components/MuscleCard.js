import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ExerciseCard from "./ExerciseCard";



function MuscleCard({ muscleGroup }) {
    const[individualMuscleGroup, setIndividualMuscleGroup] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9292/muscle_groups/${muscleGroup.id}`)
            .then((r) => r.json())
            .then((muscle) => setIndividualMuscleGroup(muscle))
    },[])
    // console.log(individualMuscleGroup)
    
    if (individualMuscleGroup){
        return(
            <div className="card">
                <h2>{muscleGroup.name}</h2>
                <img src={muscleGroup.image_url} alt={muscleGroup.name}/>
                {/* <a> {exercise.name} onClick => <ExerciseCard /> 
                <nav>
                    <Link to="/exercises/:id" className="exercises">{}</Link>
                    <Link to="/muscle-groups" className="muscle-groups">Muscle Groups</Link>
                </nav>
            */}
                {individualMuscleGroup.exercises.map((exercise) => <ExerciseCard key={exercise.name} exercise={exercise}/>)}
            </div>
        )
    }
}

export default MuscleCard;