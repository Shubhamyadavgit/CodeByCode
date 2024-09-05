import React, { useState } from "react";

const MainComponent = () => {
  const [name, setName] = useState("Shubham yadav");
  const changeName = () => {
    alert("Name Changed");
    setName((prevName) =>
      prevName == "Shubham yadav" ? "Sv" : "Shubham yadav"
    );
  };
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default MainComponent;
