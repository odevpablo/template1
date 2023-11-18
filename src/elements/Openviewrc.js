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
        
        </a>
        <a href='https://www.instagram.com/ricardo.alvessf/'>
                  <AiOutlineInstagram id='igrc' size={30}/></a>
              </div>}
      </div>
    );
    
  }

export default Openviewrc