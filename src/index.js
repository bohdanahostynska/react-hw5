import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterApp from "./RouterApp";
import "../src/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContext } from "../src/context/CardsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataContext>
        <RouterApp />
      </DataContext>
    </Router>
  </React.StrictMode>
);
