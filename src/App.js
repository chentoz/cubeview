import React, { Component } from "react";
import ReactDOM from "react-dom";

import Container3d from "react-container-3d";
import CubeView from "react-cubeview";
import "react-cubeview/css/react-cubeview.css";
import * as THREE from "three";
import "./App.css"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateAngles = this.updateAngles.bind(this);
    this.getMainCanvas = this.getMainCanvas.bind(this);
  }
  //will return the main container (canvas)
  getMainCanvas() {
    var mainCanvas = ReactDOM.findDOMNode(this.c3d);
    return mainCanvas;
  }

  //will update the camera angles/position from the orbitcontrols on the c3d
  updateAngles(phi, theta) {
    console.log("c3d", c3d);
    this.c3d.setAngles(phi, theta);
  }

  //called when the scene is created
  Setup(scene, camera, renderer) {
    //add cool 3d objects here ~ remember to import THREE
    var geometry = new THREE.SphereGeometry(1);
    var material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true
    });

    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  }

  //called every frame
  Update(scene, camera, renderer) {
    //animate things
  }

  render() {
    return (
      <div className="canvas">
        <div className="canvas-3d" />
        <div className="cube-view">
          <CubeView
            aspect={1}
            hoverColor={0x0088ff}
            cubeSize={2}
            zoom={6}
            antialias={false}
            onUpdateAngles={this.updateAngles}
            relatedCanvas={this.getMainCanvas}
          />
        </div>
      </div>
    );
  }
}
