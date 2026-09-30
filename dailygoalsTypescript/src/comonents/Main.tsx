import { useState } from "react"
import Completed from "../Completed"
import ShowText from "./ShowText"
import Next from "./Next"


const Main = () => {
     const task:string[]=["go to gym","go to university","then sleep"]
     const [counter,setCounter]=useState<number>(0)
  return (
    <div style={{width:"600px",border:"1px solid black",height:"600px"}} >
    <Completed  counter={counter}/>
    <ShowText task={task} counter={counter}/>
    <Next setCounter={setCounter}/>
    </div>
  )
}

export default Main