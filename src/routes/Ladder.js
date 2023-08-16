import NavBar from './NavBar';
import "../App.css";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ladder() {
    return(
    <div className="center">
        <NavBar />
        <div class="table-responsive-xl">
            <table class="table table-hover">
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
                <tr>
                    <td>1.</td>
                    <td></td>
                    <td>Seaforth</td>
                    <td>18</td>
                    <td>13-2-3</td>
                    <td>53:22</td>
                    <td>31</td>
                    <td>41</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td><Image src="/mosman_logo.png" alt="No Image" className='image-container' id='logo'/></td>
                    <td>Mosman A</td>
                    <td>18</td>
                    <td>12-3-3</td>
                    <td>43:24</td>
                    <td>19</td>
                    <td>39</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td></td>
                    <td>Manly Vale B</td>
                    <td>18</td>
                    <td>10-3-5</td>
                    <td>33:15</td>
                    <td>18</td>
                    <td>33</td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td></td>
                    <td>Manly Vale A</td>
                    <td>18</td>
                    <td>9-4-5</td>
                    <td>44:28</td>
                    <td>16</td>
                    <td>31</td>
                </tr>
                <tr>
                    <td>5.</td>
                    <td></td>
                    <td>Harbord</td>
                    <td>18</td>
                    <td>8-6-4</td>
                    <td>52:36</td>
                    <td>16</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>6.</td>
                    <td></td>
                    <td>Collaroy Cromer Strikers</td>
                    <td>18</td>
                    <td>6-5-7</td>
                    <td>34:33</td>
                    <td>1</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>7.</td>
                    <td></td>
                    <td>Mosman B</td>
                    <td>18</td>
                    <td>5-5-8</td>
                    <td>28:40</td>
                    <td>-12</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>8.</td>
                    <td></td>
                    <td>Pittwater</td>
                    <td>18</td>
                    <td>5-0-13</td>
                    <td>25:50</td>
                    <td>-25</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>9.</td>
                    <td></td>
                    <td>Mosman C</td>
                    <td>18</td>
                    <td>2-5-11</td>
                    <td>26:54</td>
                    <td>-28</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>10.</td>
                    <td></td>
                    <td>Naarabeen</td>
                    <td>18</td>
                    <td>2-3-13</td>
                    <td>27:60</td>
                    <td>-33</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>11.</td>
                    <td></td>
                    <td>Naarabeen</td>
                    <td>18</td>
                    <td>2-3-13</td>
                    <td>27:60</td>
                    <td>-33</td>
                    <td>9</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
    )
}

export default Ladder;