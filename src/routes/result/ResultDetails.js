import React, { useState, useEffect } from 'react';
import LoadLadder from "../ladder/LoadLadder"
import { API } from 'aws-amplify';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ResultDetails({ result }) {
  //const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('Events');
  const [resultEvents, setResultEvents] = useState(null); // Initialize as null
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  useEffect(() => {
    fetchResult();
  }, [result.DetailID]);

  async function fetchResult() {
    try {
      const data = await API.get('myapi', `/resultevent/${result.DetailID}`);
      setResultEvents(data.result);
      setIsLoading(false); // Set isLoading to false when the data is loaded
    } catch (error) {
      console.error('Error fetching result:', error);
    }
  }

  return (
    <div>
      <div className="tab-list">
        <button
          className={`tab-button ${selectedTab === 'Events' ? 'active' : ''}`}
          onClick={() => handleTabClick('Events')}
        >
          Events
        </button>
        <button
          className={`tab-button ${selectedTab === 'Lineup' ? 'active' : ''}`}
          onClick={() => handleTabClick('Lineup')}
        >
          Lineup
        </button>
        <button
          className={`tab-button ${selectedTab === 'Ladder' ? 'active' : ''}`}
          onClick={() => handleTabClick('Ladder')}
        >
          Ladder
        </button>
      </div>

      <div className="tab-content">
      {selectedTab === 'Events' && (
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            resultEvents && (
              <div>
              <Row>
                <Col sm={12} md={6} className="centered-column">{resultEvents["Goals"]["Goal_1"]["Minute"]}'</Col>
                <Col md={6} className="right-column">Goal for Mosman</Col>
              </Row>
              <Row> 
                  <Col sm={12} md={6} className="centered-column"></Col>
                  <Col md={6} className="right-column"> </Col>
              </Row>
              </div>
            )
          )}
        </div>
      )}

        {selectedTab === 'Lineup' && (
          <div>
            The Lineup for each team will be shown here
          </div>
        )}
        {selectedTab === 'Ladder' && (
          <div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <LoadLadder/>
            )
          }
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultDetails;
