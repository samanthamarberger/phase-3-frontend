import React, { useState } from "react";

function AddMuscleGroup({ onAddMuscleGroup }) {

    const [muscleName, setMuscleName] = useState("");
    const [muscleImage, setMuscleImage] = useState("");

    function handleNameAdd(e) {
        setMuscleName(e.target.value);
    }
    function handleImageAdd(e){
        setMuscleImage(e.target.value)
    }
 
    function handleSubmit(e){
        e.preventDefault();
        const newMuscleGroup = {
            name: muscleName,
            image_url: muscleImage
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
                    <input type="text" name="name" onChange={handleNameAdd} value={muscleName}/>
                </label>
                <br />
                <label>
                    Muscle Image:
                    <input type="text" name="Image" onChange={handleImageAdd} value={muscleImage}/>
                </label>
                <br />
                <button typr="submit">Add Muscle Group</button>
            </form>
        </div>
    )
}

export default AddMuscleGroup