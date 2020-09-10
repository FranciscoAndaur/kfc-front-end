import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/Main/MainContainer";
import UserContainer from "./Components/LeftContainer/UserContainer";
import SignUpForm from './SignUpForm'


class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <Header />
      <div className="uk-flex uk-flex-left">
        <div className="uk-card uk-card-default uk-card-body">
          <UserContainer />
        </div>
        <div className=" uk-card uk-card-default uk-card-body uk-margin-left ">
          <MainContainer />
          <SignUpForm />
        </div>
      </div>
    </div>
  )
  };
}

export default App;
