import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

interface RegisterFormProps {
  onRegister: (player: string) => void;
}

//useNavigate hook to pass the string and navigate/switch to the next page. Link didn't pass on
//the inputted player string.

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [player, setPlayer] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault(); //this function is for stopping 
    //default action of submitting the form and refreshing the page. 
    //Small form so maybe no need for now. 
     onRegister(player); //setting the player's name in the App component
     navigate('/welcome'); //redirect to Welcome page after submitting
  }
  return (
    <div className="m-11 p-6 h-72 max-w-md mx-auto bg-blue-300 leading-10 rounded-xl shadow-md flex flex-col justify-evenly items-center">
      <p className= " text-white font-semibold text-2xl drop-shadow-xl">Let's start!</p>
      <form className="flex flex-column flex-wrap justify-center" onSubmit={handleSubmit}>
        <label className="text-white text-shadow p-5">
          Player Name:
          <input
            className="ml-1 bg-[#dcecf7] text-black rounded-md focus:bg-indigo-100 hover:bg-sky-200"
            type="text"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </label>
        <Button type="submit" label="Start" onClick={() => {}} />
      </form>
    </div>
  );
};

export default RegisterForm;
