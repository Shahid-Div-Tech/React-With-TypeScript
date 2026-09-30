import { useState } from "react"
import TikToe from "./Components/TikToe"


const App= () => {

  


  const [tiktoe,settiktoe]=useState<string[]>(["","","","","","","","",""])
  return (
    <div style={{
      backgroundColor:"aqua",
      width:"100vw",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <TikToe tiktoe={tiktoe} settiktoe={settiktoe} />      
    </div>
  )
}

export default App 