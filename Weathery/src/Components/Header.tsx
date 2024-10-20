import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-gray-900/70 backdrop-blur-md">
      <h1 className="text-2xl font-bold">Oklahoma City, USA</h1>
      <div className="text-sm">
        <p>20°C / ± 3</p>
        <p>Wind: WSW 6 mph</p>
      </div>
    </div>
  );
};

export default Header;
