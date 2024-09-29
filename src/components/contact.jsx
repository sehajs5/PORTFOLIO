import React from 'react'
import {motion} from 'framer-motion'
export default function contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.div 
        whileInView= {{opacity: 1, y:0}}
        initial= {{y:-100, opacity:0}}
        transition={{duration: 0.5}}
        className='m-10'>
        <h1 className='text-center items-center text-2xl text-white'>Get in Touch</h1>
        </motion.div>
        <motion.div 
        whileInView= {{opacity: 1, x:0}}
        initial= {{x:-100, opacity:0}}
        transition={{duration: 0.5}}
        className='text-center items-center text-light text-gray-500 px-2 m-2'>
            <p className='m-3'>Chandigarh University, Mohali, India, 140413</p>
            <p className='m-3 underline'>sehajinsan07@gmail.com</p>
        </motion.div>
    </div>
  )
}
