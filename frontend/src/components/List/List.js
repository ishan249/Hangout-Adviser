import React from 'react'
import axios from "axios";

export const List = () => {
  const api_key = process.env.REACT_APP_PLACE
  console.log(api_key);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "GET",
      url: `http://localhost:5000/`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "x-requested-with": "XMLHttpRequest",
        
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <div>
      <form action="">
        Calling api
        <button
          style={{ margin: "20px", border: "2px black solid" }}
          onClick={handleSubmit}
        >
          Click
        </button>
      </form>
    </div>
  )
}

export default List;

