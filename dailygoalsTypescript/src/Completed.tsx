
interface taskProps{

    counter:number

}

const Completed = ({counter}:taskProps) => {
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"10px",marginTop:"30px"}}>
     <button style={{width:"50px",height:"50px",borderRadius:"50%", backgroundColor:counter===0?"blue":"white"}}>1</button>
     <button style={{width:"50px",height:"50px",borderRadius:"50%",backgroundColor:counter===1?"blue":"white"}}>2</button>
     <button style={{width:"50px",height:"50px",borderRadius:"50%",backgroundColor:counter===2?"blue":"white"}}>3</button>
      
    </div>
  )
}

export default Completed