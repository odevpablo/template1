import { useState } from "react";
import { 
    AiOutlineInstagram,
    AiOutlineArrowsAlt } from "react-icons/ai"

function Openviewrc(){
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        <button className='btrc' onClick={toggleVisibility} ><AiOutlineArrowsAlt id='btrc' size={65}/></button>
        {isVisible && <div className='boxrc'>
        <a>
        Ricardo é um comunicador habilidoso que 
        explica as questões legais de maneira acessível. 
        Ele é conhecido por manter seus clientes bem informados e 
        tranquilos durante todo o processo jurídico.
        </a>
        <a href='https://www.instagram.com/ricardo.alvessf/'>
                  <AiOutlineInstagram id='igrc' size={30}/></a>
              </div>}
      </div>
    );
    
  }

export default Openviewrc