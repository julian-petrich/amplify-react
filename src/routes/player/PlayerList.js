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
  }, []);

  async function fetchPlayers() {
    try {
      const data = await API.get('myapi', '/players');
      setPlayers(data.players);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  }

  const createSortState = () => ({
    column: 'Number',
    asc: true,
  });

  const [sortOrder, setSortOrder] = useState(createSortState());

  const handleSort = () => {
    setSortOrder((prev) => ({
      column: 'Number',
      asc: prev.column === 'Number' ? !prev.asc : true,
    }));
  };

  const getSortedData = (data) => {
    const { column, asc } = sortOrder;
    return [...data].sort((a, b) => {
      const valueA = a.General[column]?.N || '';
      const valueB = b.General[column]?.N || '';
      return asc
        ? valueA.localeCompare(valueB, undefined, { numeric: true })
        : valueB.localeCompare(valueA, undefined, { numeric: true });
    });
  };

  function renderTable(position) {
    const filteredData = players.filter(
      (player) => player.General.Position.S === position
    );
    const sortedData = getSortedData(filteredData);

    return (
      <div>
        <h5 onClick={handleSort}>{position}</h5>
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
              {sortedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.General.Number.N}</td>
                  <td>
                    <a
                      href={`/players/${item["ID"]}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {`${item.General.Firstname.S} ${item.General.Lastname.S}`}
                    </a>
                  </td>
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
    <div className="center">
      <NavBar />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        players && (
          <div className="container">
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
