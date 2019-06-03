import React, { Component } from "react";
import * as THREE from "three";
import OBJLoader from "three-obj-loader";

OBJLoader(THREE);
window.THREE = THREE;

function degtorad(deg) {
  return deg * (Math.PI / 180);
}

class ThreeView extends Component {
  constructor(props) {
    super(props);
    this.rotation = 0;
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(width, height);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    hemiLight.position.set(0, 500, 0);
    this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(-1, 0.75, 1);
    dirLight.position.multiplyScalar(50);
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
    const { color = "#4BB7FF", src } = this.props;
    this.material = new THREE.MeshPhongMaterial({
      color: parseInt(color.replace("#", ""), 16),
      polygonOffset: true,
      polygonOffsetFactor: 1, // positive value pushes polygon further away
      polygonOffsetUnits: 1,
      opacity: 0.3,
      transparent: true
    });
    this.wireMat = new THREE.LineBasicMaterial({
      color: parseInt(color.replace("#", ""), 16),
      linewidth: 4,
      visible: true,
      opacity: 0.7
    });
    this.objLoader.load(src, obj => {
      obj.scale.set(0.3, 0.3, 0.3);

      obj.children.forEach(child => {
        // mesh
        this.material = child.material = this.material;

        // wireframe
        const geo = new THREE.EdgesGeometry(child.geometry); // or WireframeGeometry
        const wireframeMesh = new THREE.LineSegments(geo, this.wireMat);
        wireframeMesh.scale.set(0.3, 0.3, 0.3);
        this.objectGroup.add(wireframeMesh);
      });
      this.objectGroup.add(obj);
    });
    this.objectGroup.position.set(0, 0.4, 0);
    document
      .getElementById("thrustersMount")
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
    const rotationAmount = 1000 / 60 / 60;
    this.rotation += rotationAmount;
    this.objectGroup.rotation.setFromVector3(rot);
    this.renderer.render(this.scene, this.camera);
    this.frame = requestAnimationFrame(this.animate);
  };
  render() {
    return <div id="thrustersMount" />;
  }
}
export default ThreeView;
