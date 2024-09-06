import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Page404 from "./Page404";
import Dashboard from "./Dashboard";

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/help">Help</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <Link to="/dashboard/shubham">Shubham's Dashboard</Link>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Page404/>}/>
        <Route path="dashboard/:name" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
