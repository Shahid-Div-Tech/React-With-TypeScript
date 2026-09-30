import Discription from "./components/Discription"
import Filter from "./components/Filter"
import List from "./components/List"
import Logo from "./components/Logo"
import { foodItems } from "./items/data"
import type{ DataType } from "./items/data"
import { useState } from "react"


const App = () => {
   const [filter,setFilter]=useState<DataType[]>(foodItems)
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",rowGap:"20px"}}>
      <Logo/>
      <Discription/> 
      <Filter  setFilter={setFilter}/>
      <List filter={filter}/>
    </div>
  )
}

export default App