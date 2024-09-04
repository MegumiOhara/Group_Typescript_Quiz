import React from 'react'
import { Link } from "react-router-dom";


type WelcomeProps = {
   player: string;
   fontSize: number;
   backgroundColor: string;
}


const Welcome = ({ player, fontSize, backgroundColor }:WelcomeProps) => {
   return (
      
      <div style={{ fontSize, backgroundColor}}>
         <h1 className="animate__animated animate__heartBeat animate__repeat-3	3">Welcome, {player}!</h1>
         <p>This is a Quiz to test  your Swedish skills!</p>
         <p>Choose one correct answer from 4 multiple choice.</p>
         <button><Link to="/quizTwo">Choose the level</Link></button>
      </div>
    
   );
};

export default Welcome;

//on App.tsx add 
// <Route path="/welcome" element={<Welcome player={registeredName} fontSize= {30} backgroundColor= "navy" />}/>