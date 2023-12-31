import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import NavBar from '../navbar/NavBar';

function Results() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchResults();
    },[] );

    async function fetchResults(){
        try {
            const data = await API.get('myapi', '/results')
            setResults(data.results)
            console.log("Data", data.results)
        } catch (error){
            console.error('Error fetching results:', error)
        }
    }

    const groupedData = {};

    results.forEach((result) => {
        const dateKey = `${result.date.Day.N}.${result.date.Month.N}.${result.date.Year.N}`;
        if (!groupedData[dateKey]) {
        groupedData[dateKey] = [];
        }
        groupedData[dateKey].push(result);
    });

    return (
      <div className="center">
        <NavBar />
        <div className='container'>
        {Object.keys(results).length === 0 ? (
          <p>Loading...</p>
        ) : (
          Object.keys(groupedData).map((dateKey, index) => (
            <div key={index}>
            <h1>{dateKey}</h1>
            <div className="table-responsive" >
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Home</th>
                    <th scope="col">Away</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedData[dateKey].map((result, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{result["home team"]["name"]}</td>
                      <td>{result["away team"]["name"]}</td>
                      <td>
                        <a href={`/results/${result["id"]}`} style={{ textDecoration: 'none'}}>
                          {result["home team"]["Goals"]["N"]}-{result["away team"]["Goals"]["N"]}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          ))
        
        )}
        </div>
        </div>
    );
}    

  
  

export default Results;