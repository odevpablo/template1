import React from 'react';
import '../App.css';
import Penal from '../imgs/penal.jpg';
import Civil from '../imgs/civil.jpg';
import Previdenciario from '../imgs/previdenciário.jpg';
import Trabalho from '../imgs/Trabalho.jpg';

const Options = () => {
  const buttonStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
   
  };

  return (
    <div className='opview'>
      <button className='option' style={{ ...buttonStyle, backgroundImage: `url(${Penal})` }}>
        <h2>Penal</h2>
      </button>
      <button className='option' style={{ ...buttonStyle, backgroundImage: `url(${Civil})` }}>
        <h3>Civil</h3>
      </button>
      <button className='option' style={{ ...buttonStyle, backgroundImage: `url(${Previdenciario})` }}>
        <h4>Previdenciário</h4>
      </button>
      <button className='option' style={{ ...buttonStyle, backgroundImage: `url(${Trabalho})` }}>
        <h5>Trabalho</h5>
      </button>
    </div>
  );
};

export default Options;
