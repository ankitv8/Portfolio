import React from "react";
import CV from "../assets/resume.pdf";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faSheetPlastic,
  faCircleUser,faFile
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from "../assets/profile (2).jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="bg-slate-300 h-[100vh] lg:pt-16 flex flex-row justify-center items-center w-[100vw] md:p-4 mx-auto text-center">
      <div>

        <h1 className="text-2xl mt-4 md:text-4xl font-semibold">About Me</h1>
        <p className="md:text-xl md:mt-4 font-semibold text-slate-600">My Introduction</p>

        <div className="flex justify-around mx-auto container w-[90vw] mt-4 md:mt-12">
<motion.div
 initial={{ opactity: 0, x: -150 }}
 transition={{ duration: 1 }}
 animate={{}}
 whileInView={{ opactity: 1, x: 0 }}
 viewport={{ once:true, amount: 0.5 }}>
          <img
            src={profilePic}
            alt=""
            className="hidden lg:block md:h-96 md:w-96 object-cover hover:border-slate-500 shadow-xl rounded-3xl shadow-slate-600"
          /></motion.div>

          <div className="flex flex-col items-center">

            <motion.div className="flex justify-around md:w-[70vw] lg:w-[40vw] flex-wrap space-y-2"
             initial={{ opactity: 0., y: 100 }}
             transition={{ duration: 1 }}
             animate={{}}
             whileInView={{ opactity: 1, y: 0 }}
             viewport={{ once:true, amount: 0.5 }}>

                        <div className="flex flex-col p-2 md:p-4 shadow-2xl rounded-xl border-slate-700 hover:shadow-2xl hover:shadow-slate-700 hover:bg-slate-800 hover:text-slate-50">
                        <FontAwesomeIcon icon={faGraduationCap} className=" text-lg md:text-2xl" />
                        <h1 className=" mt-1 font-semibold">Student</h1>
                        <p>4th sem DTU</p>
                        </div>
                        {/* <div className="flex flex-col p-2 md:p-4 shadow-2xl rounded-xl border-slate-700 hover:shadow-2xl hover:shadow-slate-700 hover:bg-slate-800 hover:text-slate-50 ">
                        <FontAwesomeIcon icon={faCircleUser}className=" text-lg md:text-2xl" />
                        <h1 className=" mt-1 font-semibold">Experience</h1>
                        <p>2+ Internships</p>
                        </div> */}
                        
                        <div className="flex flex-col p-2 md:p-4 shadow-xl rounded-xl border-slate-700 hover:shadow-2xl hover:shadow-slate-700  hover:bg-slate-800 hover:text-slate-50 ">
                        <FontAwesomeIcon icon={faSheetPlastic}className=" text-lg md:text-2xl" />
                        <h1 className=" mt-1 font-semibold">Projects</h1>
                        <p>3+ projects</p>
                        </div>

                       
          </motion.div>

<motion.div initial={{ opactity: 0, y: 100 }}
             transition={{ duration: 1 }}
             animate={{}}
             whileInView={{ opactity: 1, y: 0 }}
             viewport={{ once:true, amount: 0.5 }}>
           <div className="w-[90vw] lg:w-[40vw] md:mt-12  md:text-lg">
            <p>
            Third-year Computer Science Engineering student at DTU with strong web development skills and proficiency in C++, DSA, OOPS, DBMS, CN and OS.   
            </p>
           <div className=" mt-2 md:mt-8"><a download="" href={CV} className= " bg-slate-800 text-slate-50 py-2 px-4 md:px-6 ,md:text-xl rounded-xl md:py-3  hover:text-slate-700 hover:bg-slate-300 hover:shadow-2xl hover:shadow-slate-900">
            Download CV <FontAwesomeIcon icon={faFile} />
             </a></div>
            
          </div>
          </motion.div>
          
          </div>
        
        </div>
      </div>

     
    </div>
  );
};

export default About;
