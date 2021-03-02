import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    let { peliculas } = this.state;
    let random = Math.floor(Math.random() * 3);
    peliculas[random].titulo = "Batman Begins";

    this.setState({
      peliculas,
    });
  };

  favorita = (pelicula, indice) => {
    console.log("FAVORITA MARCADA");
    console.log(pelicula, indice);
    this.setState({
      favorita: pelicula,
    });
  };

  componentWillMount() {
    this.setState({
      peliculas: [
        {
          titulo: "Batman vs Superman",
          image:
            "https://i1.wp.com/www.vinilonegro.com/wp-content/uploads/2016/03/Batman-v-Superman-3-e1459165974655.jpg?fit=600%2C400&ssl=1",
        },
        {
          titulo: "Rapidos y Furiosos",
          image:
            "https://imagenes.milenio.com/LWt50qd87RCEopP4XV-H3PdB6Zk=/958x596/smart/https://www.milenio.com/uploads/media/2019/07/23/rapidos-y-furiosos-sera-estrenada.jpg",
        },
        {
          titulo: "Avengers",
          image:
            "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-08-04-21-13/marvels-avengers-avance-1596571996180.jpg/EG11/resize/1200x-1/marvels-avengers-avance-1596571996180.jpg",
        },
      ],
      nombre: "Eduardo Caldera",
      favorita: {},
    });
  }

  render() {
    let pStyle = {
      background: "green",
      color: "white",
      padding: "10px",
    };

    let favorita;
    if (this.state.favorita.titulo) {
      favorita = (
        <p className="favorita" style={pStyle}>
          <strong>La pelicula favorita es: </strong>
          <span>{this.state.favorita.titulo}</span>
        </p>
      );
    } else {
      favorita = <p>NO HAY PELICULA FAVORITA</p>;
    }

    return (
      <React.Fragment>
        <Slider title="Peliculas" size="slider-small" />

        <div className="center">
          <div id="content" className="peliculas">
            <h2 className="subheader">Listado de Peliculas</h2>
            <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
            <p>
              <button onClick={this.cambiarTitulo}>
                Cambiar titulo de batman
              </button>
            </p>
            {/* Condicion para mostrar cierto contenido */}
            {/*this.state.favorita.titulo ? (
          <p className="favorita" style={pStyle}>
            <strong>La pelicula favorita es: </strong>
            <span>{this.state.favorita.titulo}</span>
          </p>
        ) : (
          <p>NO HAY PELICULA FAVORITA</p>
        )}*/}
            {favorita}

            {/**Crear componente de peliculas*/}
            <div id="articles" className="peliculas">
              {this.state.peliculas.map((pelicula, i) => {
                return (
                  <Pelicula
                    key={i}
                    pelicula={pelicula}
                    indice={i}
                    marcarFavorita={this.favorita}
                  />
                );
              })}
            </div>
          </div>
          <Sidebar blog="false" />
        </div>
      </React.Fragment>
    );
  }
}

export default Peliculas;
