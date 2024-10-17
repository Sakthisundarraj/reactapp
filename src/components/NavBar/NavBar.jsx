import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle burger menu toggle

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen); // Toggle the burger menu
  };

  return (
    <div className='navBar'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-lg">
          <figure className='logo'>
            <img src={logo} alt="Logo" />
          </figure>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleBurgerMenu}
            aria-controls="navbarSupportedContent" 
            aria-expanded={isOpen} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navMenu ${isOpen ? 'show' : ''}`}>
            <Link activeClass='active' to='herosection' spy={true} offset={-100} duration={500} className='navItem'>Home</Link>
            <Link activeClass='active' to='aboutus' spy={true} offset={20} duration={500} className='navItem'>About</Link>
            <Link activeClass='active' to='portfolio' spy={true} offset={10} duration={500} className='navItem'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} offset={-100} duration={500} className='navItem'>Clients</Link>
          </div>
          <div className='navButton'>
            <button onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
