import { foodItems, type DataType } from "../items/data"


interface FilterProps{
    
    setFilter:React.Dispatch<React.SetStateAction<DataType[]>>;
}


const Filter = ({setFilter}:FilterProps) => {


   function handleFilter(e: React.ChangeEvent<HTMLSelectElement>){
    const filterData:DataType[]=foodItems.filter((item)=>{
         return item.name.includes(e.target.value);
    })

    console.log(filterData)
     setFilter(filterData)
   }

   function handleSearch(e:React.ChangeEvent<HTMLInputElement>){
     const filterData:DataType[]=foodItems.filter((item)=>{
       return item.name.includes(e.target.value)
     })

     setFilter(filterData)
   }

  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <input type="text"  placeholder="Search by name" onChange={handleSearch}/>
        <select name="" id="" onChange={handleFilter}>
            <option value="Biryani">Biryani</option>
            <option value="Korma">Korma</option>
            <option value="Karahi">Karahi</option>
            <option value="Naan">Nan</option>
        </select>
    </div>
  )
}

export default Filter