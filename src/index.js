import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import ReactDOM from 'react-dom';
import App from './App';
import {StateContextProvider} from "./components/ContextProvider"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateContextProvider>
          <App />
      </StateContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
