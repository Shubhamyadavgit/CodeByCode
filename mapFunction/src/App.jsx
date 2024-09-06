import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const students = [
    { name: "John", age: 20, contact: 895 },
    { name: "Jane", age: 22, contact: 656 },
    { name: "Bob", age: 21, contact: 688 },
  ];

  return (
    <>
      <div>
        <h1>Student List</h1>
        <table bgcolor="green" border={2}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Contact</td>
            </tr>
          </thead>
          <tbody>
            {students.map((e, index) => (
              <tr key={index}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
