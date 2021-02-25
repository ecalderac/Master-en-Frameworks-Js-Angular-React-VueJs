import React, { Component } from "react";
import MiComponente from "../components/MiComponente";
import Peliculas from "../components/Peliculas";

class SeccionPruebas extends Component {
  HolaMundo(nombre, edad) {
    let presentacion = (
      <div>
        <h2> Hola, soy {nombre} </h2> <h3> Tengo {edad} años </h3>{" "}
      </div>
    );
    return presentacion;
  }

  render() {
    let nombre = "Eduardo Caldera";
    return (
      <section id="content">
        <h2 className="subheader">Ultimos articulos</h2>
        <p> BIENVENIDO A REACT EDUARDO!!. </p>
        {this.HolaMundo(nombre, 25)}

        <section className="componentes">
          <MiComponente />
          <Peliculas />
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;
