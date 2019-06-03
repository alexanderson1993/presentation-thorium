import React, { Fragment } from "react";
import "./index.css";
function videoColor(al) {
  if (al === "1") {
    return "red";
  }
  return "blue";
}
export default ({ alertlevel = "5", children }) => {
  const video = videoColor(alertlevel);
  return (
    <div className="layout-glass">
      <div className="frame-text">
        <h1 className="simulator-name">USS Voyager</h1>
        <h2 className="station-name">React Rally</h2>
        <h2 className="login-name">@ralex1993</h2>
      </div>
      <div className="card-frame">
        <Fragment>
          <link rel="preload" href={require("../assets/blue.mp4")} as="video" />
          <link rel="preload" href={require("../assets/red.mp4")} as="video" />
        </Fragment>

        <div className="simName-graphic" />
        <div className="stationName-graphic" />
        <div className="widgets-graphic" />
        <div className="username-graphic" />
        <div className="color-image" />

        <video
          id="frame-bg"
          muted
          autoPlay
          loop
          src={require(`../assets/${video}.mp4`)}
        />
      </div>
      <div className="card-area">{children}</div>
    </div>
  );
};
