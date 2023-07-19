import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setFirstName(e.target.firstName.value);
    setLastName(e.target.lastName.value);
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label> First Name : </label>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          defaultValue={firstName}
          // onChange={(e) => setFirstName(e.target.value)}
        />{" "}
        <br />
        <br />
        <label> Last Name : </label>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          defaultValue={lastName}
          // onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <button type="submit"> Submit </button>
        {firstName && lastName && (
          <p>{"First Name : " + firstName + " and Last Name : " + lastName}</p>
        )}
      </form>
    </div>
  );
}
