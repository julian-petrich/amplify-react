import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navbar/NavBar';
import ResultDetails from './ResultDetails';
import { API } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import "../../App.css";
import "./Result.css"

function SingleResult() {
  const { id } = useParams();
  const [result, setResult] = useState(null); // Initialize as null
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchResult();
  }, [id]);

  async function fetchResult() {
    try {
      const data = await API.get('myapi', `/results/${id}`);
      setResult(data.result);
      setIsLoading(false); // Set isLoading to false when the data is loaded
    } catch (error) {
      console.error('Error fetching result:', error);
    }
  }

  return (
    <div className="center">
      <NavBar />
        {isLoading ? (
          // Display a loading message or spinner while data is loading
          <div>Loading...</div>
        ) : (
          result && (
            <div className='container centered-content'>
            <div className='result'>
              <h1>
              <a href="#">{result["Home Team"].name}</a> {result["Home Team"].Goals} : {result["Away Team"].Goals} <a href="#"> {result["Away Team"].name}</a>
              </h1>
              <hr className="divider" />
              <ResultDetails result={result}/>
            </div>
            </div>
          )
        )}
    </div>
  );
}

export default SingleResult;
