import React, { useEffect, useState } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import NavBar from "./NavBar";
import MuscleGroups from "./MuscleGroups";

function App() {

    const [muscleGroups, setMuscleGroups] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/muscle_groups')
            .then((r) => r.json())
            .then((muscle_groups) => setMuscleGroups(muscle_groups));
    }, [])

    return (
        <div>
            <h3>hello</h3>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/muscle-groups" element={<MuscleGroups />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;