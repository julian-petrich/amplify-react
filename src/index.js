import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import SinglePlayer from "./routes/player/SinglePlayer";
import PlayerList from "./routes/player/PlayerList";
import Ladder from "./routes/ladder/Ladder"
import Results from "./routes/result/Results"
import SingleResult from "./routes/result/SingleResult"
import CreatePlayer from "./routes/player/CreatePlayer"
import { Amplify } from 'aws-amplify';
import config from './aws-exports'

Amplify.configure(config);

const router = createBrowserRouter([
{ path: "/", element: <App />, },
{ path: "/players/", element: <PlayerList />, },
{ path: "/players/:id", element: <SinglePlayer />, },
{ path: "/ladder", element: <Ladder />, },
{ path: '/results/:id', element: <SingleResult /> },
{ path: "/results", element: <Results />, },
{ path: "/createPlayer", element: <CreatePlayer />, },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

