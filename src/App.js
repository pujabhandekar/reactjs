import React,{useState} from 'react'
import Products from "./Products"

const App = () => {
  const [search,setSearch]=useState()
  const [data,setData]=useState([])

  const YOUR_APP_ID="adb99c26"
  const  YOUR_APP_KEY= "6c399f456ac882ba77ebd80b04fcfb1c"	
const submitHandler=(e)=>{
e.preventDefault();
console.log(search);
fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
  response =>response.json()
).then(
 data =>setData(data.hits)
)
}

  return (
    <div>
      <center>
        <h3>Food Recipe App</h3>
        <form onSubmit={submitHandler} >

          <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/> <br/><br/>
          <input type="submit" className='btn btn-primary'/>
        </form><br/>
        {data.length>1?<Products data={data}/>:null}
      </center>
    </div>
  )
}

export default App