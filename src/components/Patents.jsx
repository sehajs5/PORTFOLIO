import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'
export default function Patents() {
  return (
    <div className='border-b border-neutral-900 pb-6 lg:mt-5'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial= {{y: -100, opacity:0}}
        transition={{duration:0.5}}
        className='text-center items-center text-white lg:text-2xl lg:mt-16 font-light'>Patents</motion.h1>
        <div>
        {PROJECTS.map((patent, index) => (
            <div key={index} className='mb-8 flex flex-wrap mb-8 lg:justify-center '>
              <motion.div 
              whileInView={{opacity:1, x:0}}
              initial= {{x: -100, opacity:0}}
              transition={{duration:0.5}}
              className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400 p-2'>{patent.number}</p>
              </motion.div>
              <motion.div 
              whileInView={{opacity:1, x:0}}
              initial= {{x: 100, opacity:0}}
              transition={{duration:0.5}}
              className='w-full max-w-xl lg:w-3/4 justify-center'>
                <p className='font-bold text-white p-2'>{patent.title}</p>
                <p className='text-gray-500 p-2'>{patent.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
    </div>
  )
}
