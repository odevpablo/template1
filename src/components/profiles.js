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
        <FaWhatsapp id="wpp" size={30} />
      </div>
      <div className="profile">
        <img src={adv2} id='adv2' alt='logo' title='logo' width={200} />
        <span>Raphael Neto</span>
        <FaWhatsapp id="wpp" size={30} />
      </div>
    </div>
  );
};

export default Profiles;
