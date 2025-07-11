import React, { useState } from "react";
import { faBars ,faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
    const[open,setOpen]=useState(false)
  return (
    <div className=" flex py-2 top-0 left-0 justify-around shadow-md fixed w-full z-10 bg-slate-50 ">
      <div>
        <h1 className="text-xl pb-3 font-extrabold hover:text-orange-600 hover:drop-shadow-xl">Ankit</h1>
      </div>
      <div className="md:flex justify-around space-x-12 hidden  ">
        <a href="#home" className="hover:border-b-2 hover:text-slate-300 hover:drop-shadow-xl ">Home</a>
        <a href="#about"  className="hover:border-b-2 hover:text-slate-300 hover:drop-shadow-xl ">About</a>
        <a href="#skills"  className="hover:border-b-2 hover:text-slate-300 hover:drop-shadow-xl ">Skills</a>
        <a href="#experience"  className="hover:border-b-2 hover:text-slate-300 hover:drop-shadow-xl ">Experience</a>
        <a href="#portfolio"  className="hover:border-b-2 hover:text-slate-300 hover:drop-shadow-xl ">Portfolio</a>
        <a href="#contact"  className="hover:border-b-2 hover:text-slate-300 hover:drop-shadow-xl ">Contact</a>
      </div>

      <div>
        <button className="text-xl block md:hidden" onClick={()=>{setOpen(!open)}}>
        <FontAwesomeIcon icon={faBars} />
        </button>
        {open && (<div className="">
            
            <div className="flex flex-col fixed top-[15vh] left-[20vw] p-10 text-xl text-center text-slate-700 bg-slate-200 rounded-lg">
            <div><button className="text-xl text-slate-800  hover:text-slate-400 hover:drop-shadow-xl sticky top-5"onClick={()=>{setOpen(!open)}} ><FontAwesomeIcon icon={faXmark} /></button></div>
        <a href="#home" className="p-3 hover:text-slate-400 hover:drop-shadow-xl">Home</a>
        <a href="#about"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">About</a>
        <a href="#skills"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Skills</a>
        <a href="#experience"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Experience</a>
        <a href="#portfolio"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Portfolio</a>
        <a href="#contact"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Contact</a>
      </div>
        </div>)}
      </div>

    </div>
  );
};

export default Navbar;
