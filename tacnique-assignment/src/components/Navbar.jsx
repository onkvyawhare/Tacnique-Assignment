import React from 'react';
import logo from "../assests/tacnique-logo.svg"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-18 w-full mx-auto bg-slate-900">
     
        <div className="ml-6">
          <img src={logo} className="h-14 w-28" alt="Logo" />
        </div>
      
      <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
        
        
      </div>
    </div>
  )
}

export default Navbar
