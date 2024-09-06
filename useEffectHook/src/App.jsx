import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect hook");
  });

  return (
    <>
      <h1>Use Effect Hook = {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Update</button>
    </>
  );
}

export default App;
