import React, { Component } from "react";

class MiComponente extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["Tomate", "Queso", "Jamon"],
      calorias: 400,
    };
    return (
      <div className="miComponente">
        <h1> {"Receta: " + receta.nombre} </h1>
        <h2> {"Calorias: " + receta.calorias} </h2>
        <ol>
          {receta.ingredientes.map((ingrediente, i) => {
            //console.log(ingrediente);
            return <li key={i}>{ingrediente}</li>;
          })}
        </ol>
        {this.props.saludo && (
          <React.Fragment>
            <h1>Desde una prop: </h1>
            <h3>{this.props.saludo}</h3>
          </React.Fragment>
        )}
      </div>
      /*
      <React.Fragment>
        <h1> Hola, soy el componente llamado: MiComponente </h1>
        <h2> Estoy probando el compoente </h2>
      </React.Fragment>*/
    );
  }
}

export default MiComponente;
