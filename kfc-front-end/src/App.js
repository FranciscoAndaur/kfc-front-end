import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/Main/MainContainer";
import UserContainer from "./Components/LeftContainer/UserContainer";
import SignUpForm from './SignUpForm'

class App extends React.Component {
  state = {
    birthdate: "",
    name: "",
    users: [],
  }

  handleFormChange = () => {
    this.setState({
      birthday: this.birthday,
      name: this.name
    })
  } 

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
          <SignUpForm onFormChange={this.handleFormChange} />
        </div>
      </div>
    </div>
  )
  };
}

export default App;
