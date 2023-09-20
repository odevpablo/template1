import { useState } from "react";

import {
    AiOutlineInstagram,
    AiOutlineArrowsAlt } from "react-icons/ai"



function Openviewrf(){
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className='btrf' onClick={toggleVisibility} ><AiOutlineArrowsAlt id='btrf' size={65}/></button>
      {isVisible && <div className='boxrf'>
     
      <a href='https://www.instagram.com/raphaelnetoadv/'>
                <AiOutlineInstagram id='igrc' size={30}/></a>
        </div>}
    </div>
  );

}

export default Openviewrf