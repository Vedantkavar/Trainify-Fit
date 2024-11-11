import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard' 
import Button from './Button'

export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"Welcome To"} title={['The', 'BURN', 'Zone']}>
          <p className='text-slate-400'>*Note1 - <span className='text-blue-400'>REPS</span> refers to how many times you repeat the exercise, <span className='text-blue-400'>REST</span> is the break (in seconds) between sets, and <span className='text-blue-400'>TEMPO</span> indicates time (in seconds) spent on each phase of movement: lowering - holding - lifting.</p>
          <p className='text-slate-400'>*Note2 - The <span className='text-blue-400'>Sets Completed</span> Button can be used multiple times, click it for more then 5 and it will restart from Zero(0).</p>
          <p className='text-slate-400'>Select a weight that challenges you but lets you maintain good form for all repetitions.</p>
          <p className='text-slate-400'>Enjoy your workout!</p>

           <div className='flex flex-col gap-10'>
              {workout.map((exercise, i ) => {
                return (
                  <ExerciseCard exercise={exercise} i={i} key={i}/>
                )
              })}
           <Button func={()=>{
             window.location.href = '#generate'
          }} text="Go Up"></Button>
           </div>
        </SectionWrapper>
    )  
} 