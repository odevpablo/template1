import React from 'react';
import '../App.css';
import Options from './options';
import Map from './map';


const View = () => {
  return (
    <div className="view">
        <p>Áreas de Atuação</p>
        <Options/>
        <Map/>
    </div>
  );
};

export default View;
