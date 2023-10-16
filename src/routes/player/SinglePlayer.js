import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navbar/NavBar';
import { API } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import "../../App.css";
import "./Player.css"


function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [seasons, setSeasons] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    fetchPlayer();
  },[] );

  async function fetchPlayer() {
    try {
      //TODO: Find a better solution here
      const data = await API.get('myapi', `/players/${id}`);
      setPlayer(data.player);// Assuming the response directly contains the player data

      const seasons = Object.keys(data.player.Season);
      setSeasons(seasons);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching player:', error);
    }
  }

  return (
    <div className="center">
      <NavBar />
      {isLoading ? (
          <div>Loading...</div>
        ) : ( 
          player && ( 
            <div className='container'>
              <h5>{player["General"]["Firstname"]} {player["General"]["Lastname"]} (#{player["General"]["Number"]})</h5>
              <div className='container-player-general'>
              <div className="column">
                  <img src="/julian.png" alt="Image" />
                </div>
              <div className="column">
                <p>Position: {player["General"]["Position"]}</p>
                <p>Birthday: {player["General"]["Birthday"]}</p>
                <p>Height: {player["General"]["Height"]} cm</p>
                <p>Weight: {player["General"]["Weight"]} kg</p>
                </div>
              </div>
                  <div className='table-player player-single'>
                  <table className='table table-hover'>
                    <thead>
                      <tr>    
                        <th>Season</th>
                        <th>Games</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Yellow Cards</th>
                        <th>Red Cards</th>
                        <th>MOTM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seasons
                        .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
                        .map((seasonYear) => (
                          <tr key={seasonYear}>
                            <td>{seasonYear}</td>
                            <td>{player.Season[seasonYear]["Games"]}</td>
                            <td>{player.Season[seasonYear]["Goals"]}</td>
                            <td>{player.Season[seasonYear]["Assists"]}</td>
                            <td>{player.Season[seasonYear]["Yellow Cards"]}</td>
                            <td>{player.Season[seasonYear]["Red Cards"]}</td>
                            <td>{player.Season[seasonYear]["Man of the Match"]}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
              </div>
              </div>
        )
        )}
    </div>
 
  );
}

export default PlayerDetails;
