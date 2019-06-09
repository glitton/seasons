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
  const seasonText =
    season === "winter" ? "Brr, it is chilly!!!" : "Let's hit the beach!!!";
  const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div>
      <h1>
        <i className={`${icon} icon`} />
        {seasonText}
        <i className={`${icon} icon`} />
      </h1>
    </div>
  );
};

export default SeasonDisplay;
