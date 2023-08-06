import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './routes/NavBar';


class App extends Component {
  render() {
    return(
    <div className='center'>
      <NavBar/>
      <h1>Mosman FC</h1>
      <div className="image-container">
          <img src="/mosman_team.jpeg" alt="Mosman Team" />
      </div>
    <div className='table-container-wrapper'>
      <div className='table-container'>
        <h2>Goalkeeper</h2>
        <Table >
            <thead>
                <tr>
                <th>Name</th>
                  <th>Games</th>
                  <th>Goals</th>
                  {/* Add more headers for other properties if needed */}
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Batman</td>
                  <td>123</td>
                  <td>2</td>
                    {/* Add more cells for other properties if needed */}
                </tr>
            </tbody>
          </Table>
        </div>
      <div className='table-container'>
        <h2>Defender</h2>
        <Table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Games</th>
                  <th>Goals</th>
                  {/* Add more headers for other properties if needed */}
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Superman</td>
                  <td>1</td>
                  <td>23</td>
                    {/* Add more cells for other properties if needed */}
                </tr>
                <tr>
                  <td>Superwoman</td>
                  <td>112</td>
                  <td>23</td>
                    {/* Add more cells for other properties if needed */}
                </tr>
            </tbody>
          </Table>
        </div>
        <div className='table-container'>
        <h2>Midfielder</h2>
        <Table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Games</th>
                  <th>Goals</th>
                  {/* Add more headers for other properties if needed */}
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Ironman</td>
                  <td>1</td>
                  <td>23</td>
                    {/* Add more cells for other properties if needed */}
                </tr>
            </tbody>
          </Table>
        </div>
        <div className='table-container'>
        <h2>Striker</h2>
        <Table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Games</th>
                  <th>Goals</th>
                  {/* Add more headers for other properties if needed */}
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Catwoman</td>
                  <td>1</td>
                  <td>23</td>
                    {/* Add more cells for other properties if needed */}
                </tr>
            </tbody>
          </Table>
        </div>
    </div>
    </div>
  )};
}

export default App;
