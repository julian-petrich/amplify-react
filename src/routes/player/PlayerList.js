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

  
    function renderTable(position) {
      const filteredData = players.filter((player) => player.General.Position.S === position);
      
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
                <td>{item.ID}</td>
                <td><a href={`/players/${item["ID"]}`} style={{ textDecoration: 'none'}}>{`${item.General.Firstname.S} ${item.General.Lastname.S}`}</a></td>
                <td>{item.Season['2023'].M.Games.N}</td>
                <td>{item.Season['2023'].M.Goals.N}</td>
                <td>{item.Season['2023'].M.Assists.N}</td>
                <td>{item.Season['2023'].M["Clean Sheets"].N}</td>
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
