import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FaHamburger} from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  };
  return (
  <div className="navbar">
       <div className="leftSide" id={openLinks ? "open" : "close"}>
           <img src="" />
           <div className="hiddenLinks">
         <Link to="/"> Home </Link>
         <Link to="/recipes"> Recipes </Link>
         <Link to="/desserts"> Desserts </Link>
           </div>
       </div>
       <div className="rightSide">
         <Link to="/"> Home </Link>
         <Link to="/recipes"> Recipes </Link>
         <Link to="/desserts"> Desserts </Link>
         <button onClick={toggleNavbar}>
         <FaHamburger />
         </button>
       </div>
  </div>
  )
}

export default Navbar