import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import "./Header.css";
function Header() {
  return (
    <div className='mainHeading'>
      <div className='navbar w-50 m-1 p-4 text-white text-xl font-AlbertSans rounded bg-[#5B63E6]'>Hangout Advisor</div>
    </div>
  )
}

export default Header