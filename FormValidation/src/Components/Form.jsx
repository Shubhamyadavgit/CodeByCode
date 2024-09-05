import React, { useState } from 'react'
import "../Components/Form.css"
const Form = () => {
    const[userId,setUserId] = useState("")
    const[password,setPassword] = useState("")
    const[error,setError] = useState(false)
    const[passErr,setPassErr] = useState(false)
    const handleForm = (e)=>{
        e.preventDefault();
       if(error || passErr){
        alert("Please type the correct values")
       }else{
        alert("Login Successfull")
        console.log(userId);
        console.log(password);
       }
    }
    
    const passwordHandler = (e)=>{
        let pass = e.target.value
        if(pass.length < 8){
            setPassErr(true) // Invalid password
        }else{
            setPassErr(false) // Valid  password
            setPassword(pass)
        }
    }

    const userHandler = (e)=>{
        let email = e.target.value
        if (!email.includes('@') || email.charAt(0) === '@' || email.charAt(email.length - 1) === '@' || email.indexOf('.') === -1) {
            setError(true); // Invalid email
          } else {
            setError(false); // Valid email
            setUserId(email)
          }
        };
  return (
    <div>
        <form onSubmit={handleForm}>
        <h1>Login Form</h1>
        <section>
            <label htmlFor="email">Name:</label>
            <input type="email" name="" id="name"  placeholder="Enter your email" onChange={userHandler}/>{error?<span>Invalid Input</span>:""}
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password"  placeholder="Enter your password" onChange={passwordHandler}/>{passErr?<span>invalid password</span>:"" }
            <button  type="submit">Submit</button>
            </section>
        </form>
    </div>
  )
}

export default Form