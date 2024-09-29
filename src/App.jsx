import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Publications from './components/Publications'
import Patents from './components/Patents'
import Contact from './components/contact'
export default function App() {
  return (
    <div className='overflow-x-hidden text-color-neutral-300 antialiased slec selection:text-001F3F'>
      <div className='flixed top-0-z-10 h-full w-full'>
      <div className="relative w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className='container mx-auto px-8'>
          <Navbar/>
          <Hero/> 
          <About/>
          <Technologies/>
          <Publications/>
          <Patents/>
          <Contact/>
        </div>
        </div>
    </div>
    </div>
  )
}
