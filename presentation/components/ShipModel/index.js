import React, { Component } from "react";
import ThreeView from "./three-view";
import "./style.css";

class ShipModel extends Component {
  state = {};
  render() {
    return (
      <div className={`ship-model-container`}>
        <div className="three-container">
          <ThreeView src={require("../../../assets/mesh.obj")} />
        </div>
      </div>
    );
  }
}
export default ShipModel;
