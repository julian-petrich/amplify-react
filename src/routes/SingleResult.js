import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { API } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import "../App.css";
import { Container } from 'react-bootstrap';

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
      <Container>
        {isLoading ? (
          // Display a loading message or spinner while data is loading
          <div>Loading...</div>
        ) : (
          result && (
            <div>
              <div>Round: {result.Round}</div>
              <div>ID: {result.ID}</div>
              <div>Away Team: {result["Away Team"].name}</div>
              <div>Away Team ID: {result["Away Team"].ID}</div>
              <div>Away Team Goals: {result["Away Team"].Goals}</div>
              <div>Home Team: {result["Home Team"].name}</div>
              <div>Home Team ID: {result["Home Team"].ID}</div>
              <div>Home Team Goals: {result["Home Team"].Goals}</div>
              <div>Date: {result.Date.Year}/{result.Date.Month}/{result.Date.Day}</div>
            </div>
          )
        )}
      </Container>
    </div>
  );
}

export default SingleResult;
