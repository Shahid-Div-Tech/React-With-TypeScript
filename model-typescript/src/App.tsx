
import { useState } from 'react'
import Model from './Components/Model'

const App = () => {
  const [isOpen,setIsOpen]=useState<boolean>(false)
  return (
    <div style={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"}}>
     
    <Model isOpen={isOpen} setIsOpen={setIsOpen} />

      <button style={{marginTop:"100px" ,padding:"5px 10px",backgroundColor:"aqua"}} onClick={()=>{setIsOpen(true)}}>Say Hello</button>
    
    </div>
  )
}

export default App