import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import Carousel from 'react-bootstrap/Carousel'

/* halloween themed page made with bootstrap with a carousel, nabvar and halloween images all centered with a black background with halloween ornaments*/
function App() {
  return (
    <>
      <div className='header'>
        <Navbar />
      </div>
      <div className='body'>
        <Carousel>
          <Carousel.Item>
            <img
              src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/05/song-horror-1951607.jpg?itok=3umtQlNm'
              className="d-block w-100"                      
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1616717476558-DN47GCULM2O6AFQNXOME/ghoulish-trailer-for-the-new-horror-movie-separation.jpg'
              className="d-block w-100"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='https://i.pinimg.com/474x/80/c6/81/80c681e17a3a2fe7d5a81c6b7fca52b1.jpg'
              className="d-block w-100"
            />
          </Carousel.Item>
        </Carousel>
      </div>     
    </>
  );
}

export default App;
