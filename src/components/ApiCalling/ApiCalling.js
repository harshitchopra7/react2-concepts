import React, { useState, useEffect } from "react";
import "./ApiCalling.css";

function ApiCalling() {
  const [apiData, setApiData] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  // https://jsonplaceholder.typicode.com/todos/
  // https://fakestoreapi.com/products

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="apicalling_container">
      {/* <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Surname</label>
      <input value={surname} onChange={(e) => setSurname(e.target.value)} /> */}
      {apiData.map((value, key) => (
        <div>
          <p>id:  {value.id}</p>
          <p>Title: {value.title}</p>
          <p>Body: {value.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ApiCalling;
