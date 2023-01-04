import React from "react";

function Places(props) {
  return (
    <div className="Card">
      <div className="font-bold text-xl">{props.title}</div>
      <hr />
      <p className="text-gray-700 text-md pt-2">{props.address}</p>
      <div className="flex">
        <p className="tags">{props.type}</p>
        <p className="tags">{props.hours}</p>
      </div>
    </div>
  );
}

export default Places;
