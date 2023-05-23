import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddExercise({ muscleGroups, onAddExercise }) {

    const [exerciseName, setExerciseName] = useState("");
    const [exerciseImage, setExerciseImage] = useState("");
    const [exerciseHowTo, setExerciseHowTo] = useState("");
    const [muscleGroupBelong, setMuscleGroupBelong] = useState("");

    function handleNameAdd(e) {
        setExerciseName(e.target.value);
    }
    function handleImageAdd(e) {
        setExerciseImage(e.target.value);
    }
    function handleHowToAdd(e) {
        setExerciseHowTo(e.target.value);
    }
    function handleMuscleGroupBelong(e){
        const muscleBelongsTo = muscleGroups.find((muscle) => muscle.name.toLowerCase() === e.target.value.toLowerCase());
        const idBelongsTo = muscleBelongsTo ? muscleBelongsTo.id : '';
        if (idBelongsTo === ''){
            return "Error Muscle Group Not found"
        }
        else {
            setMuscleGroupBelong(idBelongsTo);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newExercise = {
            name: exerciseName,
            image_url: exerciseImage,
            how_to_do: exerciseHowTo,
            muscle_group_id: muscleGroupBelong
        };
        fetch("http://localhost:9292/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExercise),
        })
        .then((r) => r.json())
        .then((exercise) => onAddExercise(exercise));
    }
    return (
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)} className="NewExercise">
                <label>
                    Exercise Name: 
                    <input type="text" name="Name" onChange={handleNameAdd} value={exerciseName} />
                </label>
                <br />
                <label>
                    Image URL: 
                    <input type="text" name="Image" onChange={handleImageAdd} value={exerciseImage} />
                </label>
                <br />
                <label>
                    How to do: 
                    <input type="text" name="How to" onChange={handleHowToAdd} value={exerciseHowTo} />
                </label>
                <br />
                <label>
                    Muscle Group Exercise belongs to: 
                    <input type="text" name="Muscle Group" onChange={handleMuscleGroupBelong} value={muscleGroupBelong} />
                </label>
                <button type="submit">Add Exercise</button>
            </form>
        </div>
    )
}

export default AddExercise