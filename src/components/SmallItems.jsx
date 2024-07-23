// src/components/SmallItems.jsx
import React from 'react';

const SmallItems = () => {
  const items = ['Casino', 'Game', 'Togel', 'Dadu', 'Poker'];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {items.map(item => (
        <div
          key={item}
          className="bg-white text-black rounded-lg shadow-lg p-4 text-center flex-1 min-w-[100px] h-[100px] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-300"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SmallItems;

