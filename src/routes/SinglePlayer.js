import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { API } from 'aws-amplify';
import { useParams } from 'react-router-dom';

function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetchPlayer();
  }, []);

  async function fetchPlayer() {
    try {
      const data = await API.get('myapi', `/greeting/${id}`);
      console.log(data);
      setPlayer(data); // Assuming the response directly contains the player data
    } catch (error) {
      console.error('Error fetching player:', error);
    }
  }

  return (
    <div className="center">
      <NavBar />
      {player && (
        <div>
          <h2>{player.name}</h2>
          <div className="table-container-wrapper">
            <p>Position: {player.position}</p>
            <p>Games: {player.games}</p>
            <p>Goals: {player.goals}</p>
            {/* Render other player details if needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerDetails;
