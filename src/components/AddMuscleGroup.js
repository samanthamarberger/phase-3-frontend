import React, { useState } from "react";

function AddMuscleGroup({ onAddMuscleGroup }) {

    const [muscleName, setMuscleName] = useState("");
    const [muscleIamge, setMuscleImage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const newMuscleGroup = {
            name: muscleName,
            image_url: muscleIamge
        };

    fetch("http://localhost:9292/muscle_groups", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMuscleGroup),
        })
        .then((r) => r.json())
        .then((muscleGroup) => onAddMuscleGroup(muscleGroup));
    }
    
    return(
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)} className="NewMuscleGroup">
                <label>
                    Muscle Group Name:
                    <input type="text" name="name" />
                </label>
                <br />
            </form>
        </div>
    )
}

export default AddMuscleGroup