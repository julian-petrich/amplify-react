import React from 'react';
import NavBar from '../navbar/NavBar';
import LoadLadder from './LoadLadder';
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Ladder() {

    return(
    <div className="center">
        <NavBar />
        <div className='container'>
        {/* <h1>AL03 - Finals</h1>
        <div className="table-container">
            <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Home</th>
                    <th scope="col">Away</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{color: "#8CC152"}}>Mosman A</td>
                    <td>Manly Vale A</td>
                    <td>2-0</td>
                </tr>
                </tbody>
                </table>
        </div>
        <h1>AL03 - Semi Finals</h1>
        <div className="table-container">
            <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Home</th>
                    <th scope="col">Away</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{color: "#8CC152"}} >Mosman A</td>
                    <td>Manly Vale B</td>
                    <td>2-0</td>
                </tr>
                <tr>
                    <td>Seaforth</td>
                    <td style={{color: "#8CC152"}}>Manly Vale A</td>
                    <td>2-3</td>
                </tr>
                </tbody>
                </table>
        </div> */}
        <h1>AL03 - Ladder</h1>
        <LoadLadder/>
        </div>
        </div>
    )
}

export default Ladder;