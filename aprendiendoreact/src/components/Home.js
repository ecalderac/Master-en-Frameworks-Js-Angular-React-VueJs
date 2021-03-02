import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Home extends Component {
  render() {
    let buttonString = "Ir al blog";
    return (
      <div id="home">
        <Slider
          title="Bienvenido al curso de React"
          btn={buttonString}
          size="slider-big"
        />
        <div className="center"></div>
        <div id="content">
          <h1 className="subheader">Ultimos articulos </h1>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default Home;
