import './App.css';
import {SlLocationPin} from "react-icons/sl"
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"
import { Link } from 'react-router-dom';

import Logo from "./imgs/logorpadv.jpg"
import img1 from "./imgs/pf1.png"
import img2 from "./imgs/pf2.png"



function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1 className='title'>Advocacia 
         <br></br>e Consultoria Jurídica</h1>
         <img src={Logo} width={150} alt="RpAdvocacia" title='rp' id='logo'/>
         <div className='profile'>
          <div className='container'>
          <div className='bl1'>
          </div>
              <p className='text'>
                Ricardo Pereira Alves 
              </p>
              <p className='oab'>
              OAB/MG 153.242
              </p>
              <div className='icon-container'>
              <a className='emrf' href='mailto:rpadvocaciasf@gmail.com'><AiOutlineMail size={30}/></a>
              <a href='https://api.whatsapp.com/send/?1=pt_BR&phone=553899675176'><AiOutlineWhatsApp size={30}/></a>
              </div>
              </div>
          <div className='container-two'>
          <div className='bl2'>
          </div>
              <p className='textrf'>
              Raphael Simões de Moraes Neto
              </p>
              <p className='oabrf'>OAB/MG 220.210
              </p>
              <a href='mailto:raphaelnetoadv@gmail.com'><AiOutlineMail id='emailrf' size={30}/></a>
              <a href='https://api.whatsapp.com/send/?1=pt_BR&phone=553899675176'><AiOutlineWhatsApp id='wpprf'size={30}/></a>
         </div> 
         </div>
         
         <div className='rdp'>
            <SlLocationPin id='loc' size={20}/>
            <a className='loctxt'>
            Praça do Centenário, 
            nº 335 - CENTRO,
            <br/> São Francisco - MG</a>
          </div>
        <element class='header-container'>
          
        </element>
      </header>
    </div>
  );
}

export default App;
