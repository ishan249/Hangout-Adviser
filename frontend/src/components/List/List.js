import React from "react";
import axios from "axios";
import "./List.css";
export const List = () => {
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
    <div className="mainList">
      <div className="font-AlbertSans searchBox">
        <div className="p-4 font-AlbertSans searchHeading font-bold text-xl">
          Hangout Advisor
        </div>
        <form action="">
          <div className="m-4 Address-Input">
            <label htmlFor="Address">Address</label>
            <br />
            <input type="text" className="addressInput" />
          </div>
          <div className="m-4 place-selection">
            <label for="typeofplace">Place </label>
            <br />
            <select className="placeSelection" name="place" id="place">
              <option value="cafe" selected>
                Cafe
              </option>
              <option value="hotel">Hotel</option>
              <option value="hangout">Hangout/Fun</option>
            </select>
          </div>
          <br />
          <button className="searchBtn" onClick={handleSubmit}>
            Find
          </button>
        </form>
      </div>
    </div>
  );
};

export default List;
