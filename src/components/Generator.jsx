import React, {useState} from 'react'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import SectionsWrapper from './SectionWrapper'
import Button from './Button'

function Header(props) {
  const { index, title, description } = props
  return (
      <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-2'>
              <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-300'>{index}</p>
              <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
          </div>
          <p className='text-sm sm:text-base mx-auto'>{description}</p>
      </div>
  ) 
}


export default function Generator(props) {

  const { muscles, setMuscles, challenge, setChallenge, goals, setGoals, updateWorkout } = props

  const [showModal, setShowModal] = useState(false)

  function toggleModal()
  {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
        setMuscles(muscles.filter(val => val !== muscleGroup))
        return
    }

    if (muscles.length > 2) {
        return
    }

    if (challenge !== 'individual') {
        setMuscles([muscleGroup])
        setShowModal(false)
        return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
        setShowModal(false)
    }

  }

  return (
    <SectionsWrapper id={'generate'} header={"Create your own workout-plan"} title={['Game', 'On']}>

      <Header index={'01'} title={'Choose Your Challenge'} description={"Choose the workout you dare to conquer."} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button onClick={()=>{
                setMuscles([])
                setChallenge(type)
              }} className={'bg-black border duration-200 px-4 hover:border-blue-400 py-3 rounded-lg ' + (type === challenge ? ' border-blue-400' : ' border-blue-900')} key={typeIndex}>
                <p className='uppercase'>{type.replaceAll('_', " ")}</p>
              </button>
            )
          })}
      </div>

      <Header index={'02'} title={'Aim & Attack'} description={"Pick the muscles set for domination."} />
      <div className='bg-black border border-blue-900 rounded-lg duration-300 hover:border-blue-400 flex flex-col'>
        <button onClick={toggleModal} className='relative flex items-center p-3 justify-center'>
          <p className='uppercase'>{muscles.length == 0 ? 'Select The muscle groups' : muscles.join(' & ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-chevron-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col px-3 pb-3'>
            {(challenge === 'individual' ? WORKOUTS[challenge] : Object.keys(WORKOUTS[challenge])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button onClick={()=>{
                  updateMuscles(muscleGroup)
                }} className={'hover:text-blue-400 duration-300' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')} key={muscleGroupIndex}>
                   <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <Header index={'03'} title={'Unleash Beast Mode'} description={"Define your supreme mission."} />
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button onClick={()=>{
                setGoals(scheme)
              }} className={'bg-black border duration-200 px-4 hover:border-blue-400 py-3 rounded-lg ' + (scheme === goals ? ' border-blue-400' : ' border-blue-900')} key={schemeIndex}>
                <p className='uppercase'>{scheme.replaceAll('_', " ")}</p>
              </button> 
            )
          })}
      </div>
       
      <Button func={updateWorkout}  text={"Formulate"}></Button>
    </SectionsWrapper>
  )
} 
 