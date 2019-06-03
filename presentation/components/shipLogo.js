import React from "react";
import "./shipLogo.css";

export default () => {
  return (
    <div className="ShipLogo">
      <img
        alt="Ship Logo"
        role="presentation"
        className="logo img-fluid"
        src={require("../../assets/logo.png")}
      />
      <div className="shadow" />
    </div>
  );
};
