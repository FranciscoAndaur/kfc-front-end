import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/Main/MainContainer";
import UserContainer from "./Components/LeftContainer/UserContainer";
import SignUpForm from './SignUpForm'


class App extends React.Component {
  // SET INITIAL STATE
  state = {
    birthdate: "",
    name: "",
    users: [],
  }
// CALLBACK FUNCTION TO FETCH API
  handleClickForApi() {
   fetch("https://en.wikipedia.org/w/api.php?format=json&callback=API_REQUEST_DONE&action=query&prop=extracts&indexpageids&titles=1994")
    .then(r => r.json())
    .then((eventsArr) => {
      console.log(eventsArr)
    })
  }
 
// FOR FORM CHILD
  handleFormChange = () => {
    this.setState({
      birthday: this.birthday,
      name: this.name
    })
  } 

  render() {
    console.log("FROM APP",this.state)
  return (
    <div className="App">
      <Header />
      <div className="uk-flex uk-flex-left">
        <div className="uk-card uk-card-default uk-card-body">
          <UserContainer />
        </div>

        <div className=" uk-card uk-card-default uk-card-body uk-margin-left ">
          <MainContainer />
          <SignUpForm onFormChange={this.handleFormChange} handleClickForApi={this.handleClickForApi}/>
        </div>
      </div>
    </div>
  )
  };
}

export default App;
