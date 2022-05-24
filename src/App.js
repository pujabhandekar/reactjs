
import { increment,decrement } from './redux/reducer'
import {useSelector,useDispatch} from 'react-redux'

function App(){
  const count=useSelector((state)=>state.counter1.value)
  const dispatch=useDispatch()
return(
  <div className='App'>
    <h1>redux toolkit</h1>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <span>{count}</span>
    <button onClick={()=>dispatch(decrement())}>decrement</button>

  </div>
)
}

export default App