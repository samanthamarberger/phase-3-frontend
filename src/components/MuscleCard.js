import React, { useEffect, useState } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import CardNavBar from "./CardNavBar";
import AddExercise from "./AddExercise";



function MuscleCard({ muscleGroup, muscleGroups }) {
    
    const[exercises, setExercises] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:9292/muscle_groups/${muscleGroup.id}`)
            .then((r) => r.json())
            .then((muscle) => setExercises(muscle.exercises))
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
    function handleAddExercise(newExercise) {
        setExercises(...exercises, newExercise);
    }
    
    if (exercises){
        return(
            <div className="card">
                <h2>{muscleGroup.name}</h2>
                <img src={muscleGroup.image_url} alt={muscleGroup.name}/>
                {exercises.map((exercise) => handleLinks(exercise, muscleGroup))}
                <Routes >
                    <Route path="/add-exercise" element={<AddExercise muscleGroups={muscleGroups} onAddExercise={handleAddExercise}/>}/>
                </Routes>
            </div>
        )
    }
}

export default MuscleCard;