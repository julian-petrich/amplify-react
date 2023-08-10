import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import SinglePlayer from "./routes/SinglePlayer";
import { Amplify } from 'aws-amplify';
import config from './aws-exports'

Amplify.configure(config);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "player/:id",
    element: <SinglePlayer />,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
