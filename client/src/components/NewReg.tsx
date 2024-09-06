import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';

interface RegisterFormProps {
    onRegister: (player:string) => void
}

//useNavigate hook to pass the string and navigate/switch to the next page. Link didn't pass on
//the inputted player string. 


const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) =>{
   const [player, setPlayer] = useState<string>('');
   const navigate = useNavigate();


    const handleSubmit = () => 
        onRegister(player); //setting the player's name in the App component
        navigate('/welcome'); //redirect to Welcome page after submitting
        
    };

    return(
        <div className="container">
            <h1>Let's start!</h1>
            <form className="container-f" onSubmit={handleSubmit}>
                <label className="label-f">
                    Player Name:
                    <input
                    className="input-f"
                    type="text"
                    value={player}
                    onChange={(e) => setPlayer(e.target.value)}/>
                </label>
                <Button type="submit" label="Start" onClick={() => {}} />
            </form>

        </div>
    );
};

export default RegisterForm;
