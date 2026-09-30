import type React from "react"

interface StepProps{
  step:number,
  setStep:React.Dispatch<React.SetStateAction<number>>
}

const Step = ({step,setStep}:StepProps) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"5px",marginTop:"20px",}}>
      <button style={{padding:"5px 8px"}} onClick={()=>{setStep((prev:number):number=>{
        if(prev===1){
          return 1
        }
       return prev-1
      })}}>-</button>
      <h3>Step: {step}</h3>
      <button style={{padding:"5px 8px"}} onClick={()=>{setStep((step+1))}}>+</button>
    </div>
  )
}

export default Step