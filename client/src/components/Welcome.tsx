import Button from './Button';
import { useNavigate } from 'react-router-dom';


type WelcomeProps = {
   player: string;
   fontSize: number;
   backgroundColor: string;
}


const Welcome = ({ player, fontSize, backgroundColor }:WelcomeProps) => {
   const navigate = useNavigate();
   const handleButtonClick =() => {
      navigate("/quizTwo")
   };
   return (
      
      <div style={{ fontSize, backgroundColor}}>
         <h1>Welcome, {player}!</h1>
         <p>This is a Quiz to test  your Swedish skills!</p>
         <p>Choose one correct answer from 4 multiple choice.</p>
         <Button label='Start Game' onClick={handleButtonClick}></Button>
              
      </div>
    
   );
};

export default Welcome;

//on App.tsx add 
// <Route path="/welcome" element={<Welcome player={registeredName} fontSize= {30} backgroundColor= "navy" />}/>