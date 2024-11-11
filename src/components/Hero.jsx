import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span className='text-cyan-400'>HULK</span>IFIED</h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowledge the risks of becoming <span className='text-blue-400 font-medium'>ridiculously fit</span> and hereby accept all responsibilities of potentially <span className='text-blue-400 font-medium'>breaking through walls</span>.</p>
      <Button func={()=>{
        window.location.href = '#generate'
      }} text="Begin"></Button>
    </div>
  )
} 
