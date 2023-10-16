import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import "../../App.css";
import "./Player.css"
import NavBar from '../navbar/NavBar'; 

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPlayers();
  },[] );

    async function fetchPlayers(){
        try {
            const data = await API.get('myapi', '/players')
            setPlayers(data.players)
            setIsLoading(false);
        } catch (error){
            console.error('Error fetching players:', error)
        }
    }

    if (isLoading) {
      return <div>Loading...</div>;
      }

  
    function renderTable(position) {
      const filteredData = players.filter((player) => player.position === position);
      
      return (  
        <div>
          <h5>{position}</h5>
          <div className="table-player">
          <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Games</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Clean Sheets</th>
                </tr>
            </thead>
            <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.number}</td>
                <td><a href={`/player/${item["id"]}`} style={{ textDecoration: 'none'}}>klasjdakjsdklasjdakjsdklasjdakjsdklasjdakjsdklasjdakjsdklasjdakjsdklasjdakjsd</a></td>
                <td>{item.games}</td>
                <td>{item.goals}</td>
                <td>{item.assists}</td>
                <td>{item.cleansheets}</td>
              </tr>
            ))}
            </tbody>
            </table>
            </div>
            </div>
      );
    }
  
    return (
      <div className='center'>
      <NavBar/>
      {isLoading ? (
          // Display a loading message or spinner while data is loading
          <div>Loading...</div>
        ) : (
          players && (
       <div className='container'>
                {renderTable('Goalkeeper')}
                {renderTable('Defender')}
                {renderTable('Midfielder')}
                {renderTable('Forward')}
        </div>
          )
        )}
        </div>
    );
  }

export default PlayerList;
