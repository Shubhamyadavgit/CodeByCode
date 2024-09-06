import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Practice.css'

function App() {
  const [user, setUser] = useState("")
  const [password,setPassword] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    console.log({"Email": user,"Password": password});
    if(user === "shubhamyadav2000y@gmail.com" || password === 123456){
      alert("Login Successfull")
    }else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
     <div class="login-container">
    <div class="login-form">
      <h2>Welcome Back</h2>
      <p>Please login to your account</p>
      <form onSubmit={handleSubmit}>
        <div class="input-group">
          <input type="email" placeholder="Email" required onChange={(e)=>setUser(e.target.value)}/>
        </div>
        <div class="input-group">
          <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div class="input-group">
          <button class="btn-login">Login</button>
        </div>
        <p class="forgot-password"><a href="#">Forgot your password?</a></p>
      </form>
    </div>
  </div>
    </>
  )
}

export default App
