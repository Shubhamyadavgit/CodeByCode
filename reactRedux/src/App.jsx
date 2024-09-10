import { useState } from 'react'
import './App.css'
import HomeContainer from './container/HomeContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomeContainer />
    </>
  )
}

export default App
