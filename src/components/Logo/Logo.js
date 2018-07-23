import React from 'react';
import Tilt from 'react-tilt';
import tri from './Logo.png';
import './Logo.css';

const Logo = () => {
    return (
       <div className='ma4 mt0'>
           <Tilt className="Tilt shadow-1" options={{ min : 99555 }} style={{ height: 150, width: 150 }} >
            <span className="Tilt-inner pa1 h-50 "> 
            <img className='shadow-9' style={{ paddingTop: '0.5%', height:100 }} alt='logo' src={tri}/> 
            <p className='grow dib white dim shadow-3 '>OCTAROBO</p>
            </span>
           
            </Tilt>
           </div>
    );
}

export default Logo;