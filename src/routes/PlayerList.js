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
      <div key={position} className={`container`}>
        <h2>{position}</h2>
        <div className="row">
          {filteredData.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
            <div className="card">
            <div className="card-header">
                <div className="header-left">{item.name}</div>
                <div className="header-right"># {item.id}</div>
              </div>
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <div className="attribute-group">
                    <p className="attribute">Games: {item.games}</p>
                    <p className="attribute">Goals: {item.goals}</p>
                    <p className="attribute">Assists: {item.goals}</p>
                    <p className="attribute">Clean Sheets: {item.cleansheets}</p>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
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
