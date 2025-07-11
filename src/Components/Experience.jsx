import  { useState } from "react";
import {
  faUserGraduate,
  faUserTie,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const Experience = () => {
  const [aim, setAim] = useState(true);

  const Education = [
    {
      title: "Btech CSE",
      location: "Delhi Technolgical Univeristy",
      tenure: "2022-2026",
    },
    {
      title: "XII",
      location: "SCSD SV SEC-9,Rohini",
      tenure: "2020-2022",
      remark: "93.1%",
    },
    {
      title: "X",
      location: "IP Convent S S School",
      tenure: "2020-2022",
      remark: "91.8%",
    },
  ];

  const experience = [
    {
      title: "Campus Ambassdor",
      location: "Krayoonz",
      tenure: "2022",
    },
    {
      title: "Web Head",
      location: "Innova DTU",
      tenure: "2022-Present",
    },
    {
      title: "Web Dev Intern",
      location: "Lensroom",
      tenure: "1/2024-3/2024",
    },
    {
      title: "Web Dev Intern",
      location: "Dabotics",
      tenure: "4/2024-5/2024",
    }
  ];
  const [info, setInfo] = useState(Education);

  return (
    <div className="flex flex-col items-center pt-5 md:pt-20 p-4 bg-slate-300 h-auto">
      <h1 className="text-2xl md:text-4xl font-semibold p-4 md:p-6">
        Qualifications
      </h1>
      <p className="text-lg text-slate-500">My Personal Journey</p>

      <div className="flex md:mt-10 mt-5 md:space-x-10 space-x-5 md:text-2xl  ">
        <motion.h1
          initial={{ opactity: 0.25, x: 200 }}
          transition={{ duration: 0.5 }}
          animate={{}}
          whileInView={{ opactity: 1, x: 0 }}
          onClick={() => {
            setAim(true);
            setInfo(Education);
          }}
          viewport={{ once:true, amount: 0.5 }}
          className="bg-slate-700 text-slate-50 px-5 py-2 rounded-lg shadow-xl shadow-slate-600 hover:bg-slate-400 hover:text-slate-800"
        >
          <FontAwesomeIcon icon={faUserGraduate} className="" /> Education
        </motion.h1>
        <motion.h1
         initial={{ opactity: 0.25, x: -200 }}
         transition={{ duration: 0.5 }}
         animate={{}}
         whileInView={{ opactity: 1, x: 0 }}
          onClick={() => {
            setAim(false);
            setInfo(experience);
          }}
          viewport={{ once:true, amount: 0.5 }}
          className="bg-slate-700 text-slate-50 px-5 py-2 rounded-lg shadow-xl shadow-slate-600 hover:bg-slate-400 hover:text-slate-800"
        >
          <FontAwesomeIcon icon={faUserTie} /> Experience
        </motion.h1>
      </div>

      <motion.div
       initial={{ opactity: 0.25, y: 200 }}
       transition={{ duration: 0.5 }}
       animate={{}}
       whileInView={{ opactity: 1, y: 0 }}
       viewport={{ once:true, amount: 0.5 }}
       className=" flex flex-col  justify-around md:w-[100vw] w-[100vw] space-x-2  my-12 flex-wrap">
        {info.map((item, i) => (
         
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div>
              <h1>{item.title}</h1>
              <p>{item.location}</p>
              <p>{item.tenure}</p>
            </div>
           </TimelineContent>
        </TimelineItem>
          
         
        ))}
      </motion.div>

      <div></div>
    </div>
  );
};

export default Experience;
