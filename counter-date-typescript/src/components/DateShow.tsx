interface count{
  count:number
}

const DateShow = ({count}:count) => {
  const today:Date = new Date();
const futureDate: Date = new Date();
futureDate.setDate(today.getDate()+count)

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"5px",marginTop:"20px",}}>
  <h2>{futureDate.toLocaleDateString()}</h2> 



    </div>
  )
}

export default DateShow