import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { DiNodejsSmall, DiMysql, DiMongodb, DiGo } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';
import {motion} from 'framer-motion';

const iconVariants = (duration) =>({
  inital: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
}
)
export default function Technologies() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap justify-center items-center '>
        {/* Title */}
        <div className='flex justify-center items-center w-full mb-6'>
          <motion.span 
          whileInView={{opacity:1, y:0}}
          initial= {{y: -100, opacity: 0}}
          transition={{duration: 1.5}}
          className='tracking-tight font-light lg:mt-16 lg:text-2xl text-white'>
            Technologies
          </motion.span>
        </div>

        {/* Icons */}
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial= {{x: -100, opacity: 0}}
        transition={{duration: 1.5}}
        className='flex gap-4 flex-wrap justify-center'>
          {/* React.js */}
          <motion.div 
          variants={iconVariants(2.3)}
          initial= "initial"
          animate= "animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-6xl text-cyan-400' />
          </motion.div>

          {/* Node.js */}
          <motion.div
          variants={iconVariants(2.7)}
          initial= "initial"
          animate= "animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiNodejsSmall className='text-6xl text-green-500' />
          </motion.div>

          {/* GoLang */}
          <motion.div 
          variants={iconVariants(2.9)}
          initial= "initial"
          animate= "animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiGo className='text-6xl text-blue-500' />
          </motion.div>
          <motion.div 
          variants={iconVariants(3)}
          initial= "initial"
          animate= "animate" 
          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiCplusplus className='text-6xl text-blue-600' />
          </motion.div>

          {/* MySQL */}
          <motion.div 
          variants={iconVariants(3.2)}
          initial= "initial"
          animate= "animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiMysql className='text-6xl text-orange-600' />
          </motion.div>

          {/* MongoDB */}
          <motion.div 
          variants={iconVariants(3.4)}
          initial= "initial"
          animate= "animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiMongodb className='text-6xl text-green-500' />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
