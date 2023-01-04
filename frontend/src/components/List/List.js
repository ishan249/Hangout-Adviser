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
    setLoading(true);
    e.preventDefault();
    var userdata = {
      addressName: address,
      placeName: place,
    };
    console.log(userdata);
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
        setLoading(false);
        if (res.data.error) {
          setError(res.data.error);
          setData([]);
        } else {
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
          <form onSubmit={handleSubmit} action="">
            <div className="m-4 Address-Input">
              <label htmlFor="Address">Address</label>
              <br />
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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-[#5B63E6]">
          <div className="flex font-AlbertSans flex-wrap justify-center outcome-area">
            {!outcomeData ||
              (outcomeData.length === 0 && !error ? (
                <h2 className="text-white text-xl mt-6">
                  Nothing to see here yet
                </h2>
              ) : null)}
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
