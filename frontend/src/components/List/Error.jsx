import React from "react";

function Error() {
  return (
    <div className="Card">
      <div className="font-bold text-xl">Something went wrong !!</div>
      <hr />
      <p className="text-gray-700 text-md pt-2">
        Please try again with different location
      </p>
    </div>
  );
}

export default Error;
