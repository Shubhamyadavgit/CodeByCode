import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [tnc, setTnc] = useState(false);

  function clearValue(e) {
    e.preventDefault();
    setName("");
    setInterest("");
    setTnc(false);
  }
  function getFormData(e) {
    console.log(name, tnc, interest);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={getFormData}>
        <input
          type="text"
          name=""
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <select
          value={interest}
          onChange={(e) => {
            setInterest(e.target.value);
          }}
        >
          <option>Select Option</option>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
        </select>{" "}
        <br />
        <br />
        <input
          type="checkbox"
          checked={tnc}
          onChange={(e) => {
            setTnc(e.target.checked);
          }}
        />
        <span>Accept term's and conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button onClick={clearValue}>Clear</button>
      </form>
    </div>
  );
};

export default Form;
