import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <Link to={"dashboard/Ritam"}>Dashboard</Link>
      <br />
      <Link to={"dashboard/Shubham"}>Dashboard 2</Link>
      <Outlet />
    </div>
  );
};

export default About;
