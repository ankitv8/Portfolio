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

export default function OutlinedTimeline() {
  const [aim, setAim] = useState(true);
  const Education = [
    {
      title: "Btech CSE",
      location: "Delhi Technolgical Univeristy",
      tenure: "2023-2027",
    },
    {
      title: "XII",
      location: "GOVT. Co-ed Sarvodaya vidyalaya,Rohini sec-4",
      tenure: "2022",
      remark: "87.4%",
    },
    {
      title: "X",
      location: "CIAT Convent School",
      tenure: "2020",
      remark: "79.2%",
    },
  ];
  const experience = [
    
    {
      title: "Web Dev Intern",
      location: "Interview Pro",
      tenure: "2025-Present",
    }
  ];
  const [info, setInfo] = useState(Education);
 
  return (
    <div className=' flex flex-col justify-center items-center h-[140vh] lg:h-auto'>

      <motion.h1
       initial={{ opactity: 0.25, y:100 }}
       transition={{ duration: 1 }}
       animate={{}}
       whileInView={{ opactity: 1, y:0 }}
       viewport={{ once:true, amount: 0.5 }}
       className="text-2xl md:text-4xl font-semibold p-4 md:p-6 mt-14">
        Qualifications
      </motion.h1>
      <motion.p
       initial={{ opactity: 0.25, y:100 }}
       transition={{ duration: 1,delay:.1 }}
       animate={{}}
       whileInView={{ opactity: 1, y:0 }}
       viewport={{ once:true, amount: 0.5 }}
       className="text-lg text-slate-500">My Personal Journey</motion.p>
      <div className="flex mt-5 space-x-10 lg:space-x-16  ">
       <motion.button
         initial={{ opactity: 0.25, x:100 }}
         transition={{ duration:.75,delay:0.15 }}
         animate={{}}
         whileInView={{ opactity: 1, x:0 }}
         viewport={{ once:true, amount: 0.5 }}
        className="lg:text-2xl bg-slate-900 text-slate-50 px-3 py-2 rounded-2xl" onClick={()=>{setInfo(Education)}}> <FontAwesomeIcon icon={faUserGraduate} className="" /> Education
       </motion.button>
       <motion.button
       initial={{ opactity: 0.25, x:-100 }}
       transition={{ duration:.75,delay:.15 }}
       animate={{}}
       whileInView={{ opactity: 1, x:0 }}
       viewport={{ once:true, amount: 0.5 }}
         className="lg:text-2xl bg-slate-900 text-slate-50 px-3 py-2 rounded-2xl" onClick={()=>{setInfo(experience)}}> <FontAwesomeIcon icon={faUserTie} /> Experience
       </motion.button>
      </div>

    <Timeline position="alternate">
{info.map((item, i) => (
          <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="w-[90vw] md:w-[55vw] lg:w-[26vw]">
            <motion.div
            initial={{ opactity: 0.25, y:100 }}
            transition={{ duration:.75 }}
            animate={{}}
            whileInView={{ opactity: 1, y:0 }}
            viewport={{ once:true, amount: 0.5 }}
             className="flex flex-col bg-slate-400 px-6 rounded-xl w-[40vw] md:w-[25vw] lg:w-[12vw]">
              <h1 className="md:text-2xl font-light text-slate-950 pt-3">{item.title}</h1>
              <p className="font-light text-slate-700 pt-3">{item.location}</p>
              <p className="text-slate-950 pb-2">{item.tenure}</p>
            </motion.div>
           </TimelineContent>
        </TimelineItem>
        ))}
    </Timeline>

    </div>
  );
}