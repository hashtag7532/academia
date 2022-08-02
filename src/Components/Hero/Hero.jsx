import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
        <h3>WELCOME TO ACADEMIA</h3>
        <h1>Best Online Education Expertise</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className="hero-buttons">
            <button>GET STARTED NOW </button>
            <button>VIEW COURSE </button>
        </div>
    </div>
  )
}

export default Hero;