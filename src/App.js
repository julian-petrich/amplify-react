import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './routes/navbar/NavBar';
import CarouselImages from './routes/Carousel';

function App () {  
  return(    
    <div className="center">
      <NavBar/>
        <div className="image-container">
          <CarouselImages/>
        </div>
   </div>
  );
}

export default App;
