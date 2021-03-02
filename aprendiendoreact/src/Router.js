import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SeccionPruebas from "./components/SeccionPruebas";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        {/*CONFIGURAR RUTAS Y PAGINAS*/}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />

          <Route exact path="/ruta-prueba" component={SeccionPruebas} />
          <Route exact path="/segunda-ruta" component={MiComponente} />
          <Route
            exact
            path="/pagina-1"
            render={() => (
              <React.Fragment>
                <h1>Hola mundo desde la ruta: PAGINA 1</h1>
                <MiComponente saludo="Hola amigo" />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/pruebas/:nombre/:apellidos?"
            render={(props) => {
              let nombre = props.match.params.nombre;
              let apellidos = props.match.params.apellidos;

              return (
                <div id="content">
                  <h1 className="subheader">Pagina de pruebas</h1>
                  <h2>
                    {nombre && !apellidos && (
                      <React.Fragment>{nombre}</React.Fragment>
                    )}
                    {nombre && apellidos && (
                      <React.Fragment>
                        {nombre} {apellidos}
                      </React.Fragment>
                    )}
                  </h2>
                </div>
              );
            }}
          />
          <Route component={Error} />
        </Switch>

        <div className="clearfix"></div>
        {/*EN DIV CENTER*/}
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
