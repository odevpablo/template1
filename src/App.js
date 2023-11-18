import React from 'react';
import './App.css';
import View from './components/view';
import Logo from "./imgs/logorpadv.png"


function App() {
  return (
    <div className="App">
        <img src={Logo} id='logo' alt='logo' title='logo' width={200} />
        <View/>
    </div>
  );
}

export default App;
