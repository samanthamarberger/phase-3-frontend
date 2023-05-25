// import React, { useEffect, useState, useParams } from "react";
// import {
//     Routes,
//     Route,
// } from "react-router-dom";
// import NavBar from "./NavBar";
// import MuscleGroups from "./MuscleGroups";
// import Home from "./Home";
// import AddMuscleGroup from "./AddMuscleGroup";

// function App() {

//     const [muscleGroups, setMuscleGroups] = useState([]);
//      const { mid } = useParams() 
//      const { eid } = useParams()
    

//     function handleAddMuscleGroup(newMuscleGroup) {
//         setMuscleGroups([...muscleGroups, newMuscleGroup]);
//     }


//     useEffect(() => {
//         fetch('http://localhost:9292/muscle_groups')
//             .then((r) => r.json())
//             .then((muscle_groups) => setMuscleGroups(muscle_groups));
//     }, [])
    

//     return (
//         <div>
//             <div>
//                 <NavBar />
//                 {/* all routes should be here in my entire application */}
//                 <Routes>
//                     <Route path="/" element={<Home />}/>
//                     <Route path="/muscle-groups" element={<MuscleGroups muscleGroups={muscleGroups} />} />
//                     <Route path="/muscle-groups/:id" /*element={<MuscleGroups muscleGroups={muscleGroups} />}*/ />
//                     <Route path="/muscle-groups/:id/exercises" element={<MuscleGroups muscleGroups={muscleGroups} />} />
//                     <Route path="/muscle-groups/:id/exercises/:id" element={<MuscleGroups muscleGroups={muscleGroups} />} />
//                     <Route path="/muscle-groups/new" element={<AddMuscleGroup onAddMuscleGroup={handleAddMuscleGroup}/>}/>
//                 </Routes>
//             </div>
//         </div>
//     );
// }

// export default App;

import React, { useEffect, useState, useParams } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

function App() {

    const [muscleGroups, setMuscleGroups] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/muscle_groups')
            .then((r) => r.json())
            .then((muscle_groups) => setMuscleGroups(muscle_groups));
    }, [])

    const renderMuscleGroups = muscleGroups.map(muscleGroup => <h1>{muscleGroup.name}</h1>)

    return(
        <div>
            {renderMuscleGroups}
        </div>
    )

}

export default App;

