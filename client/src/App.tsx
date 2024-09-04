import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import RegisterForm from './components/NewReg';
import Navbar from './components/Navbar';
import QuizTwo from './components/Quiztwo';
import { useState } from 'react';

function App() {
  const [registeredName, setRegisteredName] = useState<string>('');
  
  const handleRegister = (player:string) => {
    setRegisteredName(player);
  };

  return (
    <BrowserRouter>
    <div>
      <Navbar />
    </div>
    <div>
        <Routes>
            <Route path="/" element={<RegisterForm onRegister={handleRegister} />}/>
            <Route path="/welcome" element={<Welcome player={registeredName} fontSize= {30} backgroundColor= "navy" />}/> 
            <Route path= "/quizTwo" element={<QuizTwo />}/>
          
        </Routes>
        
      </div>
    </BrowserRouter> 
  );
}

export default App
