import React, { Component } from "react";
import * as THREE from "three";
import "./style.css";
window.THREE = THREE;

function degtorad(deg) {
  return deg * (Math.PI / 180);
}

class ThreeView extends Component {
  constructor(props) {
    super(props);
    this.rotation = 0;
    this.cloudRotation = 0;
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(width, height);

    // const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    // hemiLight.position.set(0, 500, 0);
    // this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(2, 3, 3);
    //dirLight.position.multiplyScalar(50);
    dirLight.name = "dirlight";
    this.scene.add(dirLight);

    this.camera.position.y = 1;
    this.camera.position.z = 3;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.objectGroup = new THREE.Group();

    this.scene.add(this.objectGroup);
    this.objLoader = new window.THREE.OBJLoader();
  }
  componentDidMount() {
    this.planetTex = new THREE.TextureLoader().load(
      require("../../../assets/Alpine.jpg")
    );
    this.cloudsTex = new THREE.TextureLoader().load(
      require("../../../assets/Clouds3.png")
    );

    this.material = new THREE.MeshLambertMaterial({
      color: null,
      map: this.planetTex,
      opacity: 1,
      transparent: true
    });
    this.geometry = new THREE.SphereGeometry(1, 32, 32);
    this.planet = new THREE.Mesh(this.geometry, this.material);
    this.planet.scale.set(1.18, 1.18, 1.18);
    this.objectGroup.add(this.planet);

    this.cloudMaterial = new THREE.MeshLambertMaterial({
      color: null,
      map: this.cloudsTex,
      transparent: true,
      opacity: 0.7
    });
    this.clouds = new THREE.Mesh(this.geometry, this.cloudMaterial);
    this.clouds.scale.set(1.2, 1.2, 1.2);
    this.objectGroup.add(this.clouds);
    this.clouds.visible = true;

    document
      .getElementById("planet-mount")
      .appendChild(this.renderer.domElement);
    this.animating = true;
    this.animate();
  }

  componentWillUnmount() {
    this.animating = false;
    cancelAnimationFrame(this.frame);
  }
  animate = () => {
    if (!this.animating) return;

    const rot = new THREE.Euler(
      degtorad(0),
      degtorad(this.rotation * -1),
      degtorad(0)
    );
    const cloudRot = new THREE.Euler(
      degtorad(0),
      degtorad(this.cloudRotation * -1),
      degtorad(0)
    );
    this.rotation += 0.05;
    this.cloudRotation += 0.03;
    this.objectGroup.rotation.setFromVector3(rot);
    this.clouds.rotation.setFromVector3(cloudRot);
    this.renderer.render(this.scene, this.camera);
    this.frame = requestAnimationFrame(this.animate);
  };
  render() {
    return (
      <div className="planetary-scan">
        <div id="planet-mount" />
        <h1>Scanning for Locations...</h1>
      </div>
    );
  }
}
export default ThreeView;
