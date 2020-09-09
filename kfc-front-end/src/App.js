import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/Main/MainContainer";
import UserContainer from "./Components/LeftContainer/UserContainer";
import SignUpForm from './SignUpForm'

// birthdate.slice(0,4)
class App extends React.Component {
  // SET INITIAL STATE
  state = {
    birthdate: "",
    name: "",
    // apiResponse: {}
  }

  // GET YEAR
  getYear = () => {
    return this.state.birthdate.slice(0, 4)
  }

  // HANDLE API
  handleApi = () => {
    // debugger
    const year = this.getYear()
    if (year) {
      fetch(`https://en.wikipedia.org/w/api.php?format=json&callback=API_REQUEST_DONE&action=query&prop=extracts&indexpageids&titles=${year}`)
      .then(r => r.json())
      .then(data => console.log(data))
    }
  }

  componentDidUpdate() {
    this.handleApi()
  }
 
// FOR FORM CHILD
  handleFormChange = (obj) => {
    // console.log("APP", obj)
    this.setState({
      birthdate: obj.birthdate,
      name: obj.name
    })
    // this.handleApi(obj)
  } 
  
  render() {
    // console.log("FROM APP",this.state)
  return (
    <div className="App">
      <Header />
      <div className="uk-flex uk-flex-left">
        <div className="uk-card uk-card-default uk-card-body">
          <UserContainer />
        </div>
        <div className=" uk-card uk-card-default uk-card-body uk-margin-left ">
          <MainContainer />
          <SignUpForm handleFormChange={this.handleFormChange} handleApi={this.handleApi} />
        </div>
      </div>
    </div>
  )
  };
}

export default App;
