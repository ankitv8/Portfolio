import React from 'react'
import {
  faWhatsapp,
    faGithub,
    faLinkedin,
    faGoogle,
  } from "@fortawesome/free-brands-svg-icons";
  import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {motion} from "framer-motion"

const Footer = () => {
  return (
    <div className='bg-slate-900'>
    <motion.div
  
     className='text-slate-100 mt-4 bg-slate-900 container mx-auto items-center text-center flex flex-col'>
      <h1 className='text-2xl md:text-4xl font-semibold m-8'>Ankit❣️</h1>
      <div className='flex md:space-x-7 space-x-3 mt-2 md:mt-7'>
        <a href="#about" className='text-lg md:text-xl hover:text-slate-400'>About</a>
        <a href="#portfolio" className='text-lg md:text-xl hover:text-slate-400'>Projects</a>
        <a href="#experience" className='text-lg md:text-xl hover:text-slate-400'>Qualification</a>
      </div>
      <div
        className="flex md:space-x-10 space-x-5 m-4 md:m-7 "
      >
        <a
           href="https://wa.me/919560149470/?text=Hello%20there!"
          className=" hover:drop-shadow-xl text-slate-900  text-2xl bg-slate-300 p-4 rounded-xl  md:text-3xl hover:text-slate-400  hover:shadow-xl shadow-slate-600"
        >
           <FontAwesomeIcon icon={faWhatsapp}/>
        </a>
        <a
           href="https://github.com/ankitv8"
          className=" hover:drop-shadow-xl text-slate-900 text-2xl bg-slate-300 p-4 rounded-xl  md:text-3xl hover:text-slate-400  hover:shadow-xl shadow-slate-600"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
           href="https://www.linkedin.com/in/ankit-verma-4479682a7/"
          className=" hover:drop-shadow-xl text-slate-900 text-2xl bg-slate-300 p-4 rounded-xl  md:text-3xl hover:bg-slate-600 hover:text-slate-950  hover:shadow-xl shadow-slate-600"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:ankittech.j@gmail.com"
          className=" hover:drop-shadow-xl text-slate-900 text-2xl bg-slate-300 p-4 rounded-xl  md:text-3xl hover:text-slate-400  hover:shadow-xl shadow-slate-600"
        >
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </div>
      <p>^_^Ankit. All rights reserved</p>

    </motion.div></div>
  )
}

export default Footer
