import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center px-3 md:px-3 py-5 text-sm">
      <div className="flex flex-row">
         <Link to="/"><h1 className='text-black'>uizen</h1></Link>
        <div className='flex flex-row justify-between'>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/contact" >Contact</NavLink>
        </div>
      </div>
    </header>
  );
}
