import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  /*Definiendo parametros para el formulario*/
  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();

  state = {
    user: {},
  };

  recibirFormulario = (event) => {
    event.preventDefault();

    let genero = "Hombre";

    console.log(this.generoHombreRef);
    if (this.generoHombreRef.current.checked) {
      genero = this.generoHombreRef.current.value;
    } else if (this.generoMujerRef.current.checked) {
      genero = this.generoMujerRef.current.value;
    } else {
      genero = this.generoOtroRef.current.value;
    }

    let user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({
      user: user,
    });

    console.log(user);
  };

  render() {
    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            <h1 className="subheader">Formulario </h1>

            {/*Mostrar datos del formulario*/}
            {this.state.user.nombre && (
              <div id="user-data">
                <p>
                  Nombre: <strong>{this.state.user.nombre} </strong>
                  Apellidos: <strong>{this.state.user.apellidos} </strong>
                  Biografia: <strong>{this.state.user.bio} </strong>
                  Genero: <strong>{this.state.user.genero} </strong>
                </p>
              </div>
            )}

            {/*Crear un formulario*/}
            <form
              className="mid-form"
              onSubmit={this.recibirFormulario}
              onChange={this.recibirFormulario}
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef} />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>
              <div className="form-group radibuttons">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  ref={this.generoHombreRef}
                />{" "}
                Hombre
                <input
                  type="radio"
                  name="genero"
                  value="mujer"
                  ref={this.generoMujerRef}
                />{" "}
                Mujer
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  ref={this.generoOtroRef}
                />{" "}
                Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar blog="false" />
        </div>
      </div>
    );
  }
}

export default Formulario;
