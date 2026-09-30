
interface taskProp{
    task :string[]
    counter:number
}

const ShowText = ({task,counter}:taskProp) => {
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"10px",marginTop:"30px"}}>
        <h1>{task[counter]}</h1>
    </div>
  )
}

export default ShowText