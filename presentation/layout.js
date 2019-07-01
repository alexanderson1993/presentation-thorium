import React, { Fragment } from "react";
export const AlertContext = React.createContext({ alertColor: "5" });
import "./index.css";

const Layout = ({ children }) => {
  const { alertColor } = React.useContext(AlertContext);
  return (
    <div className={`layout-glass alert-color-${alertColor}`}>
      <div className="frame-text">
        <h1 className="simulator-name">USS Voyager</h1>
        <h2 className="station-name">Avocode</h2>
        {/* <h2 className="station-name">React Rally</h2> */}
        <h2 className="login-name">@ralex1993</h2>
      </div>
      <div className="card-frame">
        <div className="simName-graphic" />
        <div className="stationName-graphic" />
        <div className="widgets-graphic" />
        <div className="username-graphic" />

        <video
          id="frame-bg"
          muted
          autoPlay
          loop
          src={require(`../assets/blue.mp4`)}
        />
      </div>
      <div className="card-area">{children}</div>
    </div>
  );
};

export default ({ children }) => {
  const [alertColor, setAlertColor] = React.useState("5");
  return (
    <AlertContext.Provider value={{ alertColor, setAlertColor }}>
      <Layout>{children}</Layout>
    </AlertContext.Provider>
  );
};
