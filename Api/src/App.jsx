import { useEffect, useState } from "react";
import "./App.css";

function App() {

  //GET API
  const [data, setData] = useState([]);
  useEffect(() => {
   getList();
  }, []);
  console.log(data);
  function getList(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((resp) => {
      setData(resp);
    });
  }

  function deleteUser(id){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'DELETE'
    }).then((res)=>{
      res.json().then((resp)=>{
        console.log(resp);
        getList();
      })
    })
  }

  //POST API
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone,setPhone] = useState("");
  // let api = 'https://jsonplaceholder.typicode.com/posts'
  // // console.log(name,email,phone);
  // function saveUser(){
  //   let data = {name,email,phone}
  //   fetch(api,{
  //     method: 'POST',
  //     headers:{
  //       'Accept':"application/json",
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify(data)
  //   }).then((res)=>{
  //     // console.warn(res);
  //     res.json().then((resp)=>{
  //       console.log(resp);
  //     })
  //   })
  // }

  return (
    <>
      <h1>Todo List</h1>
      <table border={1}>
        <tr>
          <td>Id</td>
          <td>UserId</td>
          <td>Title</td>
          <td>Delete</td>
        </tr>
       {
        data.map((e)=>(
          <tr>
        <td>{e.id}</td>
        <td>{e.userId}</td>
        <td>{e.title}</td>
        <td><button onClick={()=>{deleteUser(e.id)}}>Delete</button></td>
      </tr>
        ))
       }
      </table>

      {/* <h1>Save User Post Api</h1>
      <label htmlFor="name">Name : </label>
      <input type="text" name="name" onChange={(e)=>(setName(e.target.value))}/><br /><br />
      <label htmlFor="email">Email : </label>
      <input type="text" name="email" onChange={(e)=>(setEmail(e.target.value))} /><br /><br />
      <label htmlFor="phone">Contact: </label>
      <input type="text" name="phone" onChange={(e)=>(setPhone(e.target.value))}/><br /><br />
      <button type="button" onClick={saveUser}>Save</button> */}
    </>
  );
}

export default App;
