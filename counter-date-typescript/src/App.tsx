
import Counter from './components/Counter'

import Step from './components/Step'
import "./App.css"
import DateShow from './components/DateShow'
import { useState } from 'react'

const App = () => {
   const [step,setStep]=useState<number>(1)
  const [count,setCount]=useState<number>(0)
 
  return (
    <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center"}}>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"400px",height:"300px",backgroundColor:"beige"}}>
      <Step step={step}  setStep={setStep} />
      <Counter count={count}  setCount={setCount} step={step}/>
      <DateShow count={count}/>
    </div>
    </div>
  )
}

export default App