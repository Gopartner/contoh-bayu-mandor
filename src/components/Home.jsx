// src/components/Home.jsx
import React from 'react';
import Hero from './Hero';
import SmallItems from './SmallItems';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="p-4">
        <SmallItems />
      </div>
    </div>
  );
};

export default Home;

