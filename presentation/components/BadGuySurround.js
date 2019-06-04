import React from "react";
import "./badGuySurround.css";
const BadGuySurround = () => {
  return (
    <div className="bad-guy-surround">
      <img
        src={require("../../assets/Peacekeeper.svg")}
        style={{ width: "5vw" }}
      />
      <div className="bad-guy">
        <img
          src={require("../../assets/badguy.svg")}
          style={{ width: "5vw" }}
        />
      </div>
      <div className="bad-guy">
        <img
          src={require("../../assets/badguy.svg")}
          style={{ width: "5vw" }}
        />
      </div>
      <div className="bad-guy">
        <img
          src={require("../../assets/badguy.svg")}
          style={{ width: "5vw" }}
        />
      </div>
      <div className="bad-guy">
        <img
          src={require("../../assets/badguy.svg")}
          style={{ width: "5vw" }}
        />
      </div>
      <div className="bad-guy">
        <img
          src={require("../../assets/badguy.svg")}
          style={{ width: "5vw" }}
        />
      </div>
      <div className="bad-guy">
        <img
          src={require("../../assets/badguy.svg")}
          style={{ width: "5vw" }}
        />
      </div>
    </div>
  );
};

export default BadGuySurround;
