import React from "react";
import "./LoadingSpinner.css";
import quotes from "../quotes/quotes";
export default function LoadingSpinner() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
  return (
    <>
    <div className="flex justify-center">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    <div className="text-center text-white text-lg font-AlbertSans">
    <div>{quotes[randomIndex].quote}</div>
    <div className="mt-2">   -{quotes[randomIndex].author}</div>
    </div>
    </>

  );
}