import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import "../App.css";

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

    async function fetchPlayers(){
        try {
            const data = await API.get('myapi', '/greeting')
            console.log(data)
            setPlayers(data.players)
        } catch (error){
            console.error('Error fetching players:', error)
        }
    }

function renderTable(position) {
    const filteredData = players.filter((player) => player.position === position);

    return (
      <div key={position} className={`table-container`}>
        <h2>{position}</h2>
        {filteredData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Games</th>
                <th>Goals</th>
                <th>Clean Sheets</th>
                {/* Add more headers for other properties if needed */}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                
                <tr key={index}>
                  
                  <td><a href={`/player/${item.id}`}>{item.name}</a></td>
                  <td>{item.games}</td>
                  <td>{item.goals}</td>
                  <td>{item.cleansheets}</td>
                  {/* Add more cells for other properties if needed */}
                
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data found for {position}.</p>
        )}
      </div>
    );
  }


  return (
    <div className="table-container-wrapper">
            {renderTable('Goalkeeper')}
            {renderTable('Defender')}
            {renderTable('Midfielder')}
            {renderTable('Forward')}
    </div>
  );
}

export default PlayerList;
