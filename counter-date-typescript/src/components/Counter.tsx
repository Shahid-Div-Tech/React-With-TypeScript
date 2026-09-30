interface CountProps{
  count:number
  step:number,
  setCount:React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({step,count,setCount}:CountProps) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"5px",marginTop:"20px",}}>
      <button style={{padding:"5px 8px"}}  onClick={()=>{setCount((prev:number):number=>{
        if(prev<=1){
          return 1
        }

        return prev-step
      
      })}}>-</button>
      <h3> {count}</h3>
      <button style={{padding:"5px 8px"}} onClick={()=>{setCount(count+step)}}>+</button>
    </div>
  )
}

export default Counter