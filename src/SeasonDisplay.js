import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //ternary: if lat > 0 then return summer otherwise return winter
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  return <div>Season Display {props.lat}</div>;
};

export default SeasonDisplay;
