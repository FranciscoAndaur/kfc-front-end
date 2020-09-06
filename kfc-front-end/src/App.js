import React from 'react';

import './App.css';
import Header from './Components/Header/Header'
import MainContainer from './Components/Main/MainContainer'
import UserContainer from './Components/LeftContainer/UserContainer'

function App() {
  return (
    <div className="app">
      
      <Header />
      <MainContainer />
      <UserContainer />
      
    </div>
  );
}

export default App;
