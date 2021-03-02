import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Blog extends Component {
  render() {
    let buttonString = "Ir al blog";
    return (
      <div id="blog">
        <Slider title="Blog" size="slider-small" />
        <div className="center"></div>
        <div id="content">
          {/*Listado de articulos que vendran del api rest de node*/}
        </div>
        <Sidebar blog="true" />
      </div>
    );
  }
}

export default Blog;
