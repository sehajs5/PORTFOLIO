import React from 'react'
import picture from '../assets/about2.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full flex justify-center items-center'>
                <h1 
                className='tracking-tight font-light lg:mt-16 lg:text-2xl text-white'>
                <span className="mr-2">About</span>
                <span className='font-thin'>Me</span>
                </h1>
            </div>

            <div className='flex flex-wrap'>
                <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial= {{x: -100, opacity: 0}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 '>
                <div className='flex flex-col items-center lg:items-start lg:p-8'>
                <img 
                className='rounded-lg' src={picture} alt="Working Picture" />
                </div>
                </motion.div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial= {{x: 100, opacity: 0}}
                transition={{duration:0.5}}
                className='flex justify-center lg:justify-start'>
                <p className='my-2 max-w-xl font-light p-6 tracking-tighter text-white text-justify'>{ABOUT_TEXT}</p>
            </motion.div>
            </div>
            </div>

        </div>
        </div>
  );
}
