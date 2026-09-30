
interface setCounterprop {
    setCounter:React.Dispatch<React.SetStateAction<number>>
}
const Next = ({setCounter}:setCounterprop) => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",gap:"10px",marginTop:"20px"}}>
        <button onClick={()=>{setCounter((prev:number)=>{
            if(prev<1){
               return prev+2
            }
            else{
               return  prev-1
            }
        })}}>Previous</button>
        <button onClick={()=>{setCounter((prev:number)=>{
            if(prev>1){
               return prev-2
            }
            else{
               return  prev+1
            }
        })}}>Next</button>
    </div>
  )
}

export default Next