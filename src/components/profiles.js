import React from "react";
import adv1 from '../imgs/pf1.png';
import adv2 from '../imgs/pf2.png';
import { FaWhatsapp } from "react-icons/fa";


const Profiles = () => {
  return (
    <div className="profiles">
        <h7>Consulte</h7>
      <div className="profile">
        <img src={adv1} id='adv1' alt='adv1' title='adv1' width={200} />
        <span>Ricardo Alves</span>
        <a href="https://api.whatsapp.com/send/?1=pt_BR&phone=5538999664763"><FaWhatsapp id="wpp" size={30} /></a>
      </div>
      <div className="profile">
        <img src={adv2} id='adv2' alt='logo' title='logo' width={200} />
        <span>Raphael Neto</span>
        <a href="https://api.whatsapp.com/send/?1=pt_BR&phone=553899675176"><FaWhatsapp id="wpp" size={30} /></a>
      </div>
    </div>
  );
};

export default Profiles;
