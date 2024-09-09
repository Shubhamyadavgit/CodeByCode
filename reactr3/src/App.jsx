import { useState } from 'react'
import {NavLink ,BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import  Home from './Components/Home'
import  About from './Components/About'
import  Contact from './Components/Contact'
import  Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  function NavBar(){
    return(
      <>
        <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
        </ul>
        </nav>
      </>
    )
  }

  return (
    <>
    <div className='container'>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
