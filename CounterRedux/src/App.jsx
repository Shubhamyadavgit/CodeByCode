import Counter from './component/Counter'
import './App.css'
import {useDispatch} from 'react-redux';
import {increment,decrement} from './redux/slices/counterSlice'
import DisplayCount from './component/displayCount';
function App() {
  const dispatch = useDispatch();
  return (
    <>
    <div className="App">
    <Counter />
    <button onClick={()=> dispatch(increment())}>Increment</button>
    <button onClick={()=> dispatch(decrement())}>Decrement</button>
    <br /><br />
    <DisplayCount />
    </div>
    </>
  )
}

export default App
