import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!!!",
    iconName: "sun"
  },
  winter: {
    text: "Brr, it is chilly!!!",
    iconName: "snowflake"
  }
};

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
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <h1>
        <i className={`${iconName} icon`} />
        {text}
        <i className={`${iconName} icon`} />
      </h1>
    </div>
  );
};

export default SeasonDisplay;
