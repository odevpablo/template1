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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <div className='opview'>
      <button className='option' style={{ ...buttonStyle, backgroundImage: `url(${Penal})` }}>
        <h2>Direito Penal</h2>
      </button>
      <button className='option' style={{ ...buttonStyle, backgroundImage: `url(${Civil})` }}>
        <h3>Direito Civil</h3>
      </button>
      <button className='option' style={{ ...buttonStyle, backgroundImage: `url(${Previdenciario})` }}>
        <h4>Direito <br/>Previdenciário</h4>
      </button>
      <button className='option' style={{ ...buttonStyle, backgroundImage: `url(${Trabalho})` }}>
        <h5>Direito do Trabalho</h5>
      </button>
    </div>
  );
};

export default Options;
