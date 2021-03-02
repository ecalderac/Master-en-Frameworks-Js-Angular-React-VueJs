import React, { Component } from "react";
import MiComponente from "../components/MiComponente";
import Peliculas from "../components/Peliculas";

class SeccionPruebas extends Component {
  contador = 0;

  /*constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }*/
  state = {
    contador: 0,
  };

  HolaMundo(nombre, edad) {
    let presentacion = (
      <div>
        <h2> Hola, soy {nombre} </h2> <h3> Tengo {edad} años </h3>{" "}
      </div>
    );
    return presentacion;
  }

  /*sumar() {
    //this.contador = this.contador + 1;
    this.setState({
      contador: this.state.contador + 1,
    });
  }*/

  /*restar() {
    //this.contador = this.contador - 1;
    this.setState({
      contador: this.state.contador - 1,
    });
  }*/

  //Metodos con funciones de flecha
  sumar = (e) => {
    //this.contador = this.contador + 1;
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    //this.contador = this.contador - 1;
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    let nombre = "Eduardo Caldera";
    return (
      <section id="content">
        <h2 className="subheader">Ultimos articulos</h2>
        <p> BIENVENIDO A REACT EDUARDO!!. </p>

        <h2 className="subheader">Funciones y JSX Basico</h2>
        {this.HolaMundo(nombre, 25)}

        <h2 className="subheader">Componentes</h2>
        <section className="componentes">
          <MiComponente />
        </section>

        <h2 className="subheader">Estado</h2>
        <p>Contador: {this.state.contador}</p>
        <p>
          <input type="button" value="Sumar" onClick={this.sumar} />
          <input type="button" value="Restar" onClick={this.restar} />
        </p>
      </section>
    );
  }
}

export default SeccionPruebas;
