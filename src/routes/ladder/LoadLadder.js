import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import "../../App.css";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoadLadder() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetchTeams();
    },[] );

        async function fetchTeams(){
            try {
                const data = await API.get('myapi', '/teams')
                setTeams(data.teams)
            } catch (error){
                console.error('Error fetching teams:', error)
            }
        }
    
        return(
        <div className="table-responsive">
            <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col"></th>
                    <th scope="col">Team</th>
                    <th scope="col">Games</th>
                    <th scope="col">W-D-L</th>
                    <th scope="col">Goals</th>
                    <th scope="col">Diff</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody>
            {teams.map((team, index) => (
                <tr key={index}>
                    <td>{index+1}.</td>
                    <td><Image src="/mosman_logo.png" alt="No Image" className='image-container' id='logo'/></td>                <td>{team.name}</td>
                    <td>{team.games}</td>
                    <td>{team.wins}-{team.draws}-{team.losses}</td>
                    <td>{team.goals}:{team.goalsagainst}</td>
                    <td>{team.goaldiff}</td>
                    <td>{team.points}</td>
                </tr>
            ))}
            </tbody>
            </table>
            </div>
    )
}

export default LoadLadder;