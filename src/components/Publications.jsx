import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from 'framer-motion'
export default function Publications() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap justify-center items-center'>
       <div className='flex justify-center items-center w-full mb-6'>
          <motion.span 
          whileInView={{opacity:1, y:0}}
          initial= {{y: -100, opacity:0}}
          transition={{duration:0.5}}
          className='tracking-tight font-light lg:mt-16 lg:text-2xl text-white'>
            Publications
          </motion.span>
        </div>

        <div>
          {/* Assuming EXPERIENCES is an array of publication objects */}
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className='mb-8 flex flex-wrap mb-8 lg:justify-center'>
              <motion.div 
              whileInView={{opacity:1, x:0}}
              initial= {{x: -100, opacity:0}}
              transition={{duration:0.5}}
              className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400 p-2'>{experience.year}</p>
              </motion.div>
              <motion.div 
              whileInView={{opacity:1, x:0}}
              initial= {{x: 100, opacity:0}}
              transition={{duration:0.5}}
              className='w-full max-w-xl lg:w-3/4'>
                <p className='font-bold text-white p-2'>{experience.role} - {experience.company}</p>
                <p className='text-gray-500 p-2'>
                  {experience.description.length>300?`${experience.description.substring(0,300)}...`: experience.description}
                  {experience.description.length>300 && (
                    <a href={experience.url}
                    target='_blank'
                    rel= 'noopener noreffer'
                    className='text-purple-600 underline ml-1'>more</a>
                  )}</p>
                {experience.technologies.map((tech, index)=>(
                    <span 
                    key={index} 
                    className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                        {tech}
                        </span>
                ))}

              </motion.div>
            </div>
          ))}
        </div>
        </div>
        </div>
  )
}
