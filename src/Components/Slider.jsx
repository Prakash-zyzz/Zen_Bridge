import React from 'react';
import Orion from "../assets/orion.png";


const IMGS = [
  Orion,
  Orion,
  Orion,
  Orion,
  Orion,
  Orion,
  Orion,
  Orion,
];

const Slider = () => {
  const sliderWrapperStyle = {
    display: 'flex',
    width: 'max-content',
    animation: 'slide 20s linear infinite'
  };

  const sliderContainerStyle = {
    backgroundColor: '#170524',
    height: '160px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    
   
  };

  const gradientBackgroundStyle = {
    height: '160px',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(to right, #E91E63, #CE9FFC)',
    opacity: 0.45
  };

  const keyframes = `
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-25%);
      }
    }
  `;

  return (
    <div className="sm:pt-6 lg:pt-0" style={sliderContainerStyle}>
      <style>
        {keyframes}
      </style>
      <div style={gradientBackgroundStyle}>
        <div style={sliderWrapperStyle}>
          {IMGS.map((logo, key) => (
            <img
              key={key}
              src={logo}
              alt={`logo-${key}`}
              className="mx-5 h-18"
            />
          ))}
          {IMGS.map((logo, key) => (
            <img
              key={`duplicate-${key}`}
              src={logo}
              alt={`logo-duplicate-${key}`}
              className="mx-5 h-18"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
