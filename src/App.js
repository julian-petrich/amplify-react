import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './routes/navbar/NavBar';
import PlayerList from './routes/player/PlayerList';
import CarouselImages from './routes/Carousel';

function App () {  
  return(    
    <div className="center">
      <NavBar/>
        <h1>Mosman FC</h1>
        <div className="image-container">
          <CarouselImages/>
        </div>
   </div>
  );
}

export default App;
