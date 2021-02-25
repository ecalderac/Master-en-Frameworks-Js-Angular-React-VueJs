import React from "react";

import "./assets/css/App.css";

//importar componentes
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="center">
        <SeccionPruebas />
        <Sidebar />
        <div className="clearfix"></div>
      </div>
      {/*EN DIV CENTER*/}
      <Footer />
    </div>
  );
}

export default App;
