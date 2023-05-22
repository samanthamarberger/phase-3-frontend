import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddExercise() {
    return (
        <div className="form">
            <form>
                <label>
                    Exercise Name: 
                    <input type="text" name="Name" /*onChange={handleTitleAddition} value={paintingTitle}*/ />
                </label>
                <br />
                <label>
                    Image URL: 
                    <input type="text" name="Image" /*onChange={handleTitleAddition} value={paintingTitle}*/ />
                </label>
                <br />
                <label>
                    How to do: 
                    <input type="text" name="How to" /*onChange={handleTitleAddition} value={paintingTitle}*/ />
                </label>
                <br />
                <label>
                    Muscle Group Exercise belongs to: 
                    <input type="text" name="Muscle Group" /*onChange={handleTitleAddition} value={paintingTitle}*/ />
                </label>
            </form>
        </div>
    )
}

export default AddExercise