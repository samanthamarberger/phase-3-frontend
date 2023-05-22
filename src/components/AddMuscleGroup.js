import React, { useState } from "react";

function AddMuscleGroup({ onAddMuscleGroup }) {

    const [muscleName, setMuscleName] = useState("");
    const [paintingIamge, setPaintingImage] = useState("");


    fetch("http://localhost:9292/muscle_groups", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMuscleGroup),
        })
        .then((r) => r.json())
        .then((muscleGroup) => onAddMuscleGroup(muscleGroup));
    return(
        <div className="form">
            <form >
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