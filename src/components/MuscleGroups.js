// import React from "react";
// import MuscleCard from "./MuscleCard.js";

// function MuscleGroups({ muscleGroups }) {

//     return(
//         <div>
//             <h2>Muscle Group Page</h2>
//             <div className="container">
//                 {muscleGroups.map((muscleGroup) => <MuscleCard key={muscleGroup.id} muscleGroup={muscleGroup} muscleGroups={muscleGroups} />)}
//             </div>
//         </div>
        
//     );
// }

// export default MuscleGroups;


import React from "react";

function MuscleGroups({ muscleGroups }) {

    const renderMuscleGroups = muscleGroups.map(muscleGroup => <h1>{muscleGroup.name}</h1>)

    return(
        <div>
            {renderMuscleGroups}
        </div>
    )
}

export default MuscleGroups;