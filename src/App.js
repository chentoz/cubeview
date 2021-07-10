import React, { Component } from "react"
import ReactDOM from "react-dom"
//import Container3d from "react-container-3d"
import CubeView from "react-cubeview"
import "react-cubeview/css/react-cubeview.css"
import * as THREE from "three"
import "./App.css"

export default class App extends Component {
    constructor(props) {
        super(props)

        this.updateAngles = this.updateAngles.bind(this)
        this.getMainCanvas = this.getMainCanvas.bind(this)
        this.getDomContainer = this.getDomContainer.bind(this)
        this.getDomCube = this.getDomCube.bind(this)
    }

    container

    cube

    updateAngles = (phi, theta) => {
        console.log("update angles : " + phi + " " + theta)
        //this.c3d.setAngles(phi, theta)
    }

    //3D ui controllers
    getDomContainer = () => {
        //return ReactDOM.findDOMNode(container)
    }

    getDomCube() {
        console.log("getdomcube")
        //return ReactDOM.findDOMNode(cube)
    }

    //will return the main container (canvas)
    getMainCanvas() {
        console.log("get main canvas")
        var mainCanvas = ReactDOM.findDOMNode(this.c3d)
        return mainCanvas
    }

    //will update the camera angles/position from the orbitcontrols on the c3d

    //called when the scene is created
    Setup(scene, camera, renderer) {
        console.log("Setup")
        //add cool 3d objects here ~ remember to import THREE
        var geometry = new THREE.SphereGeometry(1)
        var material = new THREE.MeshBasicMaterial({
            color: 0x000000,
            wireframe: true
        })

        var mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
    }

    //called every frame
    Update(scene, camera, renderer) {
        console.log("Update")
        //animate things
    }

    render() {
        return (
            <div className="canvas" id="c3d">
                <div className="canvas-3d" />
                <div className="cube-view">
                    <CubeView
                        id="test"
                        aspect={1}
                        hoverColor={0x0088ff}
                        cubeSize={2}
                        zoom={6}
                        antialias={true}
                        onUpdateAngles={this.updateAngles}
                        relatedCanvas={this.getMainCanvas}
                        DEBUG={true}
                    />
                </div>
            </div>
        )
    }
}
