import React from "react";
import axios from "axios";
import "./List.css";
import Places from "./Places";
import Error from "./Error";
import LoadingSpinner from "../Loadingspinner/LoadingSpinner";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export const List = () => {
  const [address, setAddress] = useState("");
  const [place, setPlace] = useState("cafe");
  const [loading, setLoading] = useState(false);
  const [outcomeData, setData] = useState([]);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {

    setLoading(true);//loading true when button clicks and sends a request 
    e.preventDefault();
    var userdata = {
      addressName: address,
      placeName: place,
    };
    axios({
      method: "POST",
      url: `http://localhost:5000/`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "x-requested-with": "XMLHttpRequest",
      },
      data: userdata,
    })
      .then((res) => {
        setLoading(false);//loading false and render data when response is there
        if (res.data.error) {
          //if response from backend is having error then set error value
          setError(res.data.error);
          setData([]);
        } else {
          //if response from backend is not having error then set places data
          setData(res.data.local_results.places);
          setError("");
        }
      })
      .catch((e) => {
        alert(e);
      });
  };
  const handleChange = (event) => {
    setPlace(event.target.value);
  };
  return (
    <>
      <div className="mainList">
        <div className="font-AlbertSans searchBox">
          <div className="px-4 py-3 font-AlbertSans searchHeading font-bold text-xl">
            Hangout Advisor
          </div>
          {/* form to take address and type of place */}

          <form onSubmit={handleSubmit} action="">
            <div className="m-4 Address-Input">
              <label htmlFor="Address">Address</label>
              <br />
              {/* text input field for address */}
              <input
                type="text"
                className="addressInput"
                value={address}
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g Ahmedabad, Gujarat"
              />
            </div>
            <div className="m-4 place-selection">
              <label for="typeofplace">Type of Place </label>
              <br />
              {/* dropdown menu for type of place */}
              <select
                value={place}
                onChange={handleChange}
                className="placeSelection"
                name="place"
                id="place"
              >
                <option value="cafe" selected>
                  Cafe
                </option>
                <option value="restaurant">Restaurant</option>
                <option value="pizza">Pizzeria</option>
                <option value="dosa/idli">South Indian</option>
              </select>
            </div>
            <button className="searchBtn">Find</button>
          </form>
        </div>
      </div>
      <div className="font-AlbertSans mainPlaceDetails">
        <div className="placeDetails text-white text-3xl text-center">
          Places You can Visit
        </div>
      </div>

      {/* conditional rendering, if loading then load loading spinner otherwise load response */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-[#5B63E6]">
          <div className="flex font-AlbertSans flex-wrap justify-center outcome-area">
            {/* conditional rendering, if no data then load this otherwise load data */}
            {!outcomeData ||
              (outcomeData.length === 0 && !error ? (
                <h2 className="text-white text-xl mt-6">
                  Nothing to see here yet
                </h2>
              ) : null)}
              {/* If error in response then load Error component else Places component */}
            {error ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white mainCard"
              >
                <Error />
              </motion.div>
            ) : (
              outcomeData.map((places) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white mainCard"
                >
                  <Places
                    title={places.title}
                    address={places.address}
                    type={places.type}
                    hours={places.hours}
                  />
                </motion.div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default List;
