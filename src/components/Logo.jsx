import React from 'react';
import logo from '../assets/mega-blog-logo.png'; // Adjust the path as needed

function Logo({ width = '100px', height = '70px' }) {
  return (
    <div className="flex items-center">
      <img 
        src={logo} // Use the imported logo here
        alt="Company Logo" 
        style={{ width, height }} 
        className="object-contain"
      />
    </div>
  );
}

export default Logo;
