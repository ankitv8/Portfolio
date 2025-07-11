import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,faArrowRight ,faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_h6cuwka', 'template_77oi3gg', form.current, 'vVQEJOINVsRSHZnWO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='bg-slate-300 lg:h-[110vh] h-auto] w-[100vw] md:p-10 flex flex-col container mx-auto items-center'>
      <h1 className='md:pt-2 text-2xl md:text-4xl font-semibold p-2 md:p-4'>Contact Me</h1>
      <p className='md:text-xl text-slate-500'>Get in touch</p>
      <div className='flex flex-col p-4 md:mt-5 space-x-4 md:space-x-16 md:flex-row '>
        <div >
            <h1 className='text-center text-xl md:text-3xl font-semibold  '>Talk to Me</h1>

            <div className='md:p-5 text-center md:justify-center justify-around flex-wrap space-x-5 flex flex-row md:flex-col  '>

                <motion.div
                 initial={{ opactity: 0.25, x: 200 }}
                 transition={{ duration: 0.5 }}
                 animate={{}}
                 whileInView={{ opactity: 1, x: 0 }}
                 viewport={{ once:true, amount: 0.5 }}

                 className='flex md:m-3 flex-col shadow-2xl w-[35vw] md:w-[18vw] rounded-xl hover:shadow-slate-600 '>
                <FontAwesomeIcon icon={faEnvelope} className='md:text-2xl text-lg font-semibold md:p-2'/>
                <h1 className='md:text-xl font-semibold'>Email</h1>
                <p className='hidden lg:block'>ankittech.j@gmail.com</p>
                <a href="mailto:ankittech.j@gmail.com" className='md:p-2 md:text-lg hover:space-x-4 space-x-1 flex justify-center '>
                <p>Write me</p>
                <FontAwesomeIcon icon={faArrowRight} className=' my-1 duration-200' /></a>
                </motion.div>

             
                    <motion.div 
                     initial={{ opactity: 0.25, x: -200 }}
                     transition={{ duration: 0.5 }}
                     animate={{}}
                     viewport={{ once:true, amount: 0.5 }}
                     whileInView={{ opactity: 1, x: 0 }}
                    className='flex md:m-3 flex-col shadow-2xl w-[35vw] md:w-[18vw] rounded-xl hover:shadow-slate-600 '>
                <FontAwesomeIcon icon={faWhatsapp}  className='md:text-2xl text-lg font-semibold md:p-2' />
                <h1 className='md:text-xl font-semibold'>Whatsapp</h1>
                <p className='hidden md:block'>95601-49470</p>
                <a href="https://wa.me/919560149470/?text=Hello%20there!" className='md:p-2 md:text-lg hover:space-x-4 space-x-1 flex justify-center '>
                    <p>Write me</p> <FontAwesomeIcon icon={faArrowRight}  className=' my-1 duration-200' />
                </a>
                
                </motion.div>

              
                <motion.div 
                 initial={{ opactity: 0.25, x: -200 }}
                 transition={{ duration: 0.5 }}
                 animate={{}}
                 whileInView={{ opactity: 1, x: 0 }}
                 viewport={{ once:true, amount: 0.5 }}
                className='flex md:m-3 flex-col shadow-2xl w-[35vw] md:w-[18vw] rounded-xl hover:shadow-slate-600 '>
                <FontAwesomeIcon icon={faLinkedin} className='md:text-2xl text-lg font-semibold md:p-2' />
                <h1 className='md:text-xl font-semibold'>LinkedIn</h1>
                <p className='hidden md:block'>Ankit Verma</p>
                <a href="https://www.linkedin.com/in/ankit-verma-4479682a7/" className='md:p-2 md:text-lg hover:space-x-4 space-x-1 flex justify-center '>
                <p>Write me</p> <FontAwesomeIcon icon={faArrowRight}  className=' my-1 duration-200' /></a>
               
                </motion.div>
            </div>
        </div>

        <div className=''>
            <h1  className='text-center md:mt-0 mt-5 md:text-3xl text-xl font-semibold '>Write me Mail</h1>
            <div>
                <motion.form
                 initial={{ opactity: 0.25, y: +200 }}
                 transition={{ duration: 0.5 }}
                 animate={{}}
                 whileInView={{ opactity: 1, y: 0 }}
                 viewport={{ once:true, amount: 0.5 }}
                
                ref={form} onSubmit={sendEmail} className='flex flex-col flex-center items-center   mt-5 md:mt-10'> 
                    <label htmlFor="name" className='md:text-xl font-semibold mb-1  '>Name</label>
                    <input type="text" placeholder=' Your Name' name='name' className='bg-slate-100 text-slate-900 text-center md:py-2 w-[90vw] md:w-[25vw] rounded-lg md:rounded-xl hover:bg-slate-200 duration-300 text-xl hover:shadow-xl'/>
                    
                    <label htmlFor="name" className=' mt-4 md:text-xl font-semibold mb-1 '>Email</label>
                    <input type="text" placeholder=' Your Email' name='email' className='bg-slate-100 text-slate-900 text-center  md:py-2 w-[90vw] md:w-[25vw] rounded-lg md:rounded-xll hover:bg-slate-200 duration-300 text-xl hover:shadow-xl ' />
                    
                    <label htmlFor="name" className=' mt-4 md:text-xl font-semibold mb-1 '>Thoughts</label>
                    <textarea  placeholder='Your Thoughts.' name="message" cols="30" rows="3" className='bg-slate-100 text-slate-900 text-center  md:py-2 w-[90vw] md:w-[25vw] rounded-lg md:rounded-xl hover:bg-slate-200 duration-300 text-xl hover:shadow-xl'></textarea>
                    <button type='submit' className='bg-slate-800 text-slate-100 mt-4 py-2 px-4 rounded-xl hover:shadow-xl hover:shadow-slate-600 hover:bg-slate-400 hover:text-slate-900'>Send Mail <FontAwesomeIcon icon={faPaperPlane} /></button>
                </motion.form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
