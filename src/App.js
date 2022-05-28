import React,{useState} from 'react'
import Print from './Print';

const App = () => {
  const [task,setTask]=useState("")
  const [todos,setTodos]=useState([]);
  const changeHandler=e=>{
    setTask(e.target.value)
    
  }
  const submitHandler=e=>{
    e.preventDefault()
  
    const newTodos=[...todos,task];
    setTodos(newTodos)
    setTask("")

  }
  const deleteHandler=(indexvalue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexvalue)
    setTodos(newTodos)
  }
  return (
    <div>
      <div className="card">
        <div className='card-body'>
      <center>
        <h5 className='card-title'>TODO MANAGEMENT</h5><br/>
        <form onSubmit={submitHandler}>
          <input type="text" value={task} onChange={changeHandler} />&nbsp;&nbsp;
          <input type='submit'  value="ADD"/> 
        </form><br/><br/><br/>

         <div>
          <Print  todoList={todos} deleteHandler={deleteHandler}/>
          </div>
        
      </center>
    </div>
    </div>
    </div> 
  )
}

export default App