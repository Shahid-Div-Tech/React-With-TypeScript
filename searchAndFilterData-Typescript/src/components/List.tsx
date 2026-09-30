import Item from "./Item"
import {  type DataType } from "../items/data"

interface filterProps{
    filter:DataType[]
}


const List = ({filter}:filterProps) => {
  return (
 <div style={{display:"flex",flexWrap:"wrap"}}>
  {filter.map((item)=>{
return <Item item={item}/> 
  })}
  </div>   
  )
}

export default List