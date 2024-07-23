// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/hero-image.jpeg'; // Pastikan path ini benar
import '../styles.css'; // Pastikan path ini benar

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] bg-gray-800 overflow-hidden">
      <img src={heroImage} alt="Hero" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl mb-4 text-neon">Welcome to TogelOn</h1>
        <p className="text-xl md:text-2xl mb-6 text-neon">Your gateway to the best online games</p>
        {/* Add any additional content or buttons here */}
      </div>
    </div>
  );
};

export default Hero;

