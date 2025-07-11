import React from "react";
import "./Home.css";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faGoogle,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from "../assets/profile (2).jpg"
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="md:flex justify-around w-[100vw] md:w-[85vw] lg:w-[70vw] mt-20 md:mt-32 items-center mx-auto  ">
      
<div className="flex space-x-6"><motion.div
        className="flex flex-col space-y-2 md:space-y-10"
        initial={{ opactity: 0.25, x: -200 }}
        transition={{ duration: 0.5 }}
        animate={{}}
        whileInView={{ opactity: 1, x: 0 }}
        viewport={{ once:true, amount: 0.5 }}
      >
        <a
          href="https://github.com/A-n-ki-t7"
          className=" hover:drop-shadow-xl text-xl md:text-3xl hover:text-slate-400  hover:shadow-xl shadow-slate-600"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/ankit-verma4479682a7/"
          className=" hover:drop-shadow-xl text-xl md:text-3xl hover:text-slate-400  hover:shadow-xl shadow-slate-600"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:ankit78409560@gmail.com"
          className="0 hover:drop-shadow-xl text-xl md:text-3xl hover:text-slate-400  hover:shadow-xl shadow-slate-600"
        >
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </motion.div>

      <div className="flex flex-col">
      <motion.div
      >
        <img
          src={profilePic}
          alt=""
          className=" md:hidden profile-img h-[16rem] w-[16rem] md:h-96 md:w-96 object-cover hover:border-slate-500 shadow-xl shadow-slate-600"
        />
      </motion.div>

      <motion.div
        className="w-[80vw]  md:w-[33vw] mt-1 "
        initial={{ opactity: 0.25, y: -200 }}
        transition={{ duration: 0.5 }}
        animate={{}}
        whileInView={{ opactity: 1, y: 0 }}
        viewport={{ once:true, amount: 0.5 }}
      >
        <h1 className="text-3xl md:text-[3.2rem] lg:text-[4rem] md:w-[50vw] lg:w-auto font-extrabold hover:text-slate-500">Ankit</h1>
        <p className="text-2xl text-center md:mt-8">Web Developer</p>
        <p className="md:text-lg w-[70vw] lg:w-[25vw] md:w-[30vw] md:ml-5 text-center mt-2">
          I'm creative Web Developer in Delhi,and I'm Very Passionate and
          dedicated to my work
        </p>
        <button className="md:mt-10 md:w-36 md:ml-32  text-center px-4 py-2 bg-slate-700 rounded-lg text-white text-xl hover:shadow-xl shadow-slate-600 hover:bg-slate-300 hover:text-slate-700">
          Say Hello <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </motion.div>
      </div>

      </div>
      
      <motion.div
      >
        <img
          src={profilePic}
          alt=""
          className=" hidden md:block profile-img h-[16rem] w-[16rem] lg:h-96 lg:w-96 object-cover hover:border-slate-500 shadow-xl shadow-slate-600"
        />
      </motion.div>
    </div>
  );
};

export default Home;
