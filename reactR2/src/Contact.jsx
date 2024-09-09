import React from 'react'
import {Outlet,NavLink} from 'react-router-dom';
const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>
        <NavLink to ={"email"}>Email</NavLink>
        <br />
        <NavLink  to ={"phone"}>Phone</NavLink>
        <Outlet />
    </div>
  )
}

export default Contact