import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Prueba } from './components/prueba/prueba'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola soy SIMP con <code>reactjs</code> 
        </p>
        <Prueba/>
      </header>
    </div>
  );
}

export default App;
