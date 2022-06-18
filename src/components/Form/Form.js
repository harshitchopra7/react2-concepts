import React, { useState } from "react";
import "./Form.css";

function Form() {
  // Get input from users -
  // 1. First name
  // 2. Surname
  // 3. Their age
  // 4. Their gender
  // 5. Mobile number

  //   Syntax of useState
  // const [variableName, setVariableName] = useState(initialValue)

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  function submitForm() {
    setFirstName("");
    setSurname("");
    setAge("");
    setGender("");
    setMobileNumber("");
  }

  return (
    <div className="form_container">
      <p>First Name: {firstName}</p>
      <p>Surname: {surname}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Mobile Number: {mobileNumber}</p>

      <div className="form_input_container">
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Enter your first name"
        />
      </div>

      <div className="form_input_container">
        <label>Surname</label>
        <input
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          placeholder="Enter your surname"
        />
      </div>
      <div className="form_input_container">
        <label>Age</label>
        <input
          value={age}
          onChange={(event) => setAge(event.target.value)}
          placeholder="Enter your age"
        />
      </div>
      <div className="form_input_container">
        <label>Gender</label>
        <input
          value={gender}
          onChange={(event) => setGender(event.target.value)}
          placeholder="Enter your gender"
        />
      </div>
      <div className="form_input_container">
        <label>Mobile Number</label>
        <input
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
          placeholder="Enter your mobile number"
        />
      </div>
      <button onClick={submitForm} className="form_button">
        Submit
      </button>
    </div>
  );
}

export default Form;
