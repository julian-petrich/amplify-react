import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './routes/NavBar';
import PlayerList from './routes/PlayerList';


function App () {
    return(
    <div className='center'>
      <NavBar/>
      <h1>Mosman FC</h1>
      <div className="image-container">
          <img src="/mosman_team.jpeg" alt="Mosman Team" />
      </div>
      <PlayerList/>
   </div>
  );
}

export default App;
