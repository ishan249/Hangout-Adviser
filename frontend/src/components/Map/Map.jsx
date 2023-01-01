import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@material-ui/core";
function Map() {
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = {lat:0, lng:0};
  return (<div>
   List of places

  </div>);
}

export default Map;
