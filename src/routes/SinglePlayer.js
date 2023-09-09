import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { API } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import "../App.css";
import { Container } from 'react-bootstrap';


function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetchPlayer();
  }, );

  async function fetchPlayer() {
    try {
      //TODO: Find a better solution here
      const data = await API.get('myapi', `/greeting/${id}`);
      console.log(data.players[id-1]);
      setPlayer(data.players[id-1]); // Assuming the response directly contains the player data
    } catch (error) {
      console.error('Error fetching player:', error);
    }
  }

  return (
    
    <div className="center">
      <NavBar />
      <Container>
      {player && (
            <Card border="secondary" style={{ width: '80%' }}>
                <Card.Body>
                  <Card.Title className="text-center">{player.name}</Card.Title>
                  <Image src={player.image} alt="No Image" fluid rounded id="player-image" variant="center" />
                  <Card.Text>
                    <Col className='text-center'>
                    </Col>
                    <Row>
                    <Col><p> Position: {player.position}</p></Col>
                    <Col><p> Games: {player.games}</p></Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>Goals: {player.goals}</Col>
                    <Col>Clean Sheets: {player.cleansheets}</Col>
                  </Row>
                  </Card.Text>
                </Card.Body>
            </Card>
      )}
       </Container>
    </div>
 
  );
}

export default PlayerDetails;
