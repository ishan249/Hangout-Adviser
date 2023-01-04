import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./Homepage.css";
import Arrowlogo from "../../images/next.png"
import { ReactComponent as Anotherlogo } from "../../images/undraw_friendship_mni7 (2).svg";
function Homepage() {
  const styler = {
    color: "#5B63E6",
  };
  return (
    <div className="main-container flex justify-between flex-wrap-reverse">
      <div className="text-center home-svg text-2xl font-AlbertSans">
        <Anotherlogo className="subHeading" />
      </div>
      <div className="text-left Heading font-AlbertSans">
        <div className="text-left font-bold text-6xl font-AlbertSans">
          Find a Place to
          <div style={styler}>
            <Typewriter
              options={{
                strings: ["Eat.", "Stay.", "Hangout."],
                autoStart: true,
                loop: true,
                delay: 100,
                pauseFor: 70,
              }}
            />
          </div>
        </div>
        <div className="text-left text-xl mt-6 font-AlbertSans">
            Are you trying to find a place which is nearby your location where you can hangout with your friends ? We have got you figured out.
        </div>
       
        <div style={{fontWeight:"bold"}}>
        <Link to={"/dashboard"}>
            <button className="startButton"><span style={{padding:"8px"}}>Get Started</span> <img style={{marginTop:"5px",marginRight:"3px"}} align="right" height="14px" width="16px" src={Arrowlogo} alt="" /> </button>
        </Link>
        </div>

      </div>
    </div>
  );
}

export default Homepage;
