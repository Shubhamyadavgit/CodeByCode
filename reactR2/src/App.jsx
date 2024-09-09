import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes,NavLink } from "react-router-dom";
import Contact from "./Contact";
import Email from "./Email";
import Phone from "./Phone";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  function Navbar() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/email" element={<Email />} />
          <Route path="/contact/phone" element={<Phone />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
