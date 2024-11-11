import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'
import Swal from 'sweetalert2';

function App() {

  const [workout, setWorkout] = useState(null)
  const [challenge, setChallenge] = useState(null)
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState(null)

  function updateWorkout() {
    if (!goals) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: 'Please choose an <span style="color: #3b82f6; text-shadow: 0 0 3px #3b82f6, 0 0 6px #3b82f6;">objective</span> first',
        width: '300px',
        customClass: {
          confirmButton: 'swal-custom-button'
        },
        didOpen: () => {
          const popup = Swal.getPopup();
          const confirmButton = Swal.getConfirmButton();
    
          if (popup) {
            popup.style.background = 'linear-gradient(to right, #1e293b, #0f172a)'; 
            popup.style.color = 'white'; 
          }
    
          if (confirmButton) {
            confirmButton.style.backgroundColor = 'black';
            confirmButton.style.border = '2px solid transparent';
            confirmButton.style.padding = '12px 16px'; 
            confirmButton.style.borderRadius = '0.5rem'; 
            confirmButton.style.color = 'white';
            confirmButton.style.transition = 'border-color 0.2s';
            
            confirmButton.onmouseover = () => {
              confirmButton.style.borderColor = '#3b82f6'; 
            };
            confirmButton.onmouseout = () => {
              confirmButton.style.borderColor = 'transparent';
            };
          }
        },
        buttonsStyling: false
      });
    } else {
      if (muscles.length < 1) { 
        return;
      }
      setWorkout(generateWorkout({ challenge, muscles, goals }));
      window.location.href = '#workout';
    }
  }
  

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text=base'>
      <Hero/>
      <Generator
        challenge={challenge}
        setChallenge={setChallenge}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout}/>)}
      <div className='grid grid-cols-2 md:grid-cols-3 items-center py-5'>
        <div className='pl-10 sm:pl-40 col-start-2 md:col-start-3 '> 
          <p className='text-slate-400 flex items-center'>&copy; {new Date().getFullYear()} Vedant_K</p>
        </div>
      </div>
      
    </main>
  )
}

export default App
