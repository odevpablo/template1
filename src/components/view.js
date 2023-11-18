import React from 'react';
import '../App.css';
import Options from './options';
import Profiles from './profiles';
import Map from './map';
import { GrLocation } from "react-icons/gr";


const View = () => {
  return (
    <div className="view">
        <h1>RP ADVOCACIA</h1>
          <p>Áreas de Atuação</p>
        <Options/>
        <Profiles/>
        <h8>
          <GrLocation />
          Localização
        </h8>
        <p id='location'>Praça do Centenário, 335 - CENTRO, São Francisco - MG</p>
        <Map/>
    </div>
  );
};

export default View;
