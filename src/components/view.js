import React from 'react';
import '../App.css';
import Options from './options';
import Map from './map';


const View = () => {
  return (
    <div className="view">
        <h1>RP ADVOCACIA</h1>
        <Options/>
        <Map/>
    </div>
  );
};

export default View;
