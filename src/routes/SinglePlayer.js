import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { API } from 'aws-amplify';
import { useParams } from 'react-router-dom';

function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetchPlayer();
  }, []);

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
      {player && (
        <div>
            <Card border="secondary">
                <Card.Body>
                  <Card.Title className="text-center">{player.name}</Card.Title>
                  <Card.Text>
                    <Col className='text-center'>
                      <Image src="/mosman_logo.png" roundedCircle />
                    </Col>
                    <Row>
                    <Col>Position: {player.position}</Col>
                    <Col>Games: {player.games}</Col>
                    <Col>Games: {player.games}</Col>
                  </Row>
                  <Row>
                    <Col>Goals: {player.goals}</Col>
                    <Col>Clean Sheets: {player.cleansheets}</Col>
                  </Row>
                  </Card.Text>
                </Card.Body>
            </Card>
        </div>
      )}
    </div>
  );
}

export default PlayerDetails;
