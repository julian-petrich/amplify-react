import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { API } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import "../App.css";
import { Container } from 'react-bootstrap';


function SingleResult() {
  const { id } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchResult();
  },[] );

  async function fetchResult() {
    try {
      //TODO: Find a better solution here
      const data = await API.get('myapi', `/results/${id}`);
      //console.log(data);
      setResult(data.result); // Assuming the response directly contains the result data
      console.log("REsult", result.Date.Year);
    } catch (error) {
      console.error('Error fetching result:', error);
    }
  }

  return (
    
    <div className="center">
      <NavBar />
      <Container>
      {result && ( 
            <div>{result.Date.Year}</div>
      )} 
       </Container>
    </div>
 
  );
}

export default SingleResult;
