import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';



ReactDOM.render((
  <Router>
    <Route path="/App" component={App} />
  </Router>),
  document.getElementById('root')
);

