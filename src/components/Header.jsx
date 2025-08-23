import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="w-full flex py-2 border-b-1 border-[#e8e8e8e2] visible">
      <Link>
        <h1 className='text-black' style={{ fontFamily: "Pixelify Sans" }}>uizen</h1>
      </Link>
    </header>
  );
}
