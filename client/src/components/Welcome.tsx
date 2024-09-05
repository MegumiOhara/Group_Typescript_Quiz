import React from 'react';
import Button from '../components/Button'; //need to import the reusable button here to call the styling from the component of Button.tsx
import { useNavigate } from 'react-router-dom';


type WelcomeProps = {
   player: string;
   fontSize: number;
   backgroundColor: string;
}


const Welcome = ({ player, fontSize, backgroundColor }:WelcomeProps) => {
   const navigate = useNavigate();
   const handleButtonClick = () => {
      navigate("/quizTwo");
   }
   return (
      
      <div style={{ fontSize, backgroundColor}}>
         <h1 className="animate__animated animate__heartBeat animate__repeat-3	3">Welcome, {player}!</h1>
         <p>This is a Quiz to test  your Swedish skills!</p>
         <p>Choose one correct answer from 4 multiple choice.</p>


         <Button label="Choose the level" onClick={handleButtonClick}/>


      </div>
    
   );
};

export default Welcome;


//on App.tsx add 
// <Route path="/welcome" element={<Welcome player={registeredName} fontSize= {30} backgroundColor= "navy" />}/>