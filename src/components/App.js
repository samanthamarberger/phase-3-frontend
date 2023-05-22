import React, { useEffect, useState } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import NavBar from "./NavBar";
import MuscleGroups from "./MuscleGroups";
import Home from "./Home";
import AddMuscleGroup from "./AddMuscleGroup";

function App() {

    const [muscleGroups, setMuscleGroups] = useState([]);

    function handleAddMuscleGroup(newMuscleGroup) {
        setMuscleGroups([...muscleGroups, newMuscleGroup]);
    }

    useEffect(() => {
        fetch('http://localhost:9292/muscle_groups')
            .then((r) => r.json())
            .then((muscle_groups) => setMuscleGroups(muscle_groups));
    }, [])

    

    return (
        <div>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/muscle-groups/*" element={<MuscleGroups muscleGroups={muscleGroups} />} />
                    <Route path='/add-muscle-group' element={<AddMuscleGroup onAddMuscleGroup={handleAddMuscleGroup}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;