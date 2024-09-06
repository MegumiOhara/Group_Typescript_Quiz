

import React from 'react';
import Button from '../components/Button'; //need to import the reusable button here to call the styling from the component of Button.tsx
import { useNavigate } from 'react-router-dom';


type WelcomeProps = {
   player: string;
   
}



const Welcome = ({ player }:WelcomeProps) => {
   const navigate = useNavigate();
   const handleButtonClick =() => {
      navigate("/quizTwo")
   };
   return (
      
      <div className="m-11 p-6 h-72 max-w-md mx-auto bg-blue-300 leading-10 rounded-xl shadow-md flex flex-col justify-center items-center" >
         <p className= "animate-bounce text-white font-semibold text-2xl drop-shadow-xl">Welcome, {player}!</p>
         <p>This is a Quiz to test  your Swedish skills!</p>
         <p>Choose one correct answer from 4 multiple choice.</p>

         <Button label='Start Game' onClick={handleButtonClick}></Button>

      </div>
     
   );

};

export default Welcome;



//on App.tsx add 
// <Route path="/welcome" element={<Welcome player={registeredName} fontSize= {30} backgroundColor= "navy" />}/>

