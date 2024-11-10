import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard' 
import Button from './Button'

export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"Welcome to"} title={['The', 'BURN', 'zone']}>
           <div className='flex flex-col gap-4'>
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