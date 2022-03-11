import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import Carousel from 'react-bootstrap/Carousel'

/* halloween themed page made with bootstrap with a carousel, nabvar and halloween images all centered with a black background with halloween ornaments*/
function App() {
  return (
    <> <Navbar />
      <div id="presentacion" className="container-fluid"></div>
      <div id="cards" className="container-fluid"></div>
      <div id="comentarios"></div>
      <div id="footer"></div>

    </>
  );
}

export default App;
