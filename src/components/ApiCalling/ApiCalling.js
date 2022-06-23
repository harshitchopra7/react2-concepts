import React from 'react'

function ApiCalling() {
    // https://jsonplaceholder.typicode.com/todos/

    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Api failed, please check the api details entered are correct or not"))

    // 200 
    // 404 - Not found
    // 500 - Internal server error

  return (
    <div>
        Hello
    </div>
  )
}

export default ApiCalling