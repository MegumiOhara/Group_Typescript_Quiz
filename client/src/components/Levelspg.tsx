import { Link } from "react-router-dom";
import React from "react";

//type LevelsProps ={
//   backgroundColor: string;
//   flex: string;
//   textColor: string;
//   margin: number;
//}
//On App.tsx add <Route path = levels
//...fixed top-0 w-16 m-0 flex-col 

function Levels() {

    return (
        <div className="container">
        <div className="levels">
            <h1>Choose the level</h1>
                <button><Link to="/quiz"> Level 1</Link></button>
                <button><Link to="/quizTwo">Level 2</Link></button>
            </div>
            <div>
                <button><Link to="/welcome">Exit to Welcome Page</Link></button>
            </div>
        </div>
    )
}

export default Levels

