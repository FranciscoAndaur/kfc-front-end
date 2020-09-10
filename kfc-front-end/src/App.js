import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/Main/MainContainer";
import UserContainer from "./Components/LeftContainer/UserContainer";
import SignUpForm from './SignUpForm'


class App extends React.Component {
  state = {
    renderedEventsCard: false,
    clickedInCard:  false,
    eventsfromBACKEND : []
  }
  //Clicked for Card.js
  handleClick = (birthdate) => {
    this.setState(prevState => {
      return {
      clickedInCard: !prevState.clickedInCard
      }
    })
    this.fetchContents(birthdate)
    
  }

  fetchContents = (birthdate) => {
    fetch("http://localhost:3000/getbirthdatecontent", {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({birthdate: birthdate})
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          eventsfromBACKEND: result
        })
      })
  }
  



  displayCard = () => {
    this.setState({
      renderedEventsCard: true
    })
  }
  
  render() {
    console.log('test:', 'color:green;', this.state.clickedInCard)
  return (
    <div className="App">
      <Header />
      <div className="uk-flex uk-flex-left">
        <div className="uk-card uk-card-default uk-card-body">
          <UserContainer handleClick={this.handleClick}/>
        </div>
        <div className=" uk-card uk-card-default uk-card-body uk-margin-left ">
          <MainContainer displayCard ={this.displayCard} eventsfromBACKEND={this.state.eventsfromBACKEND}/>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
  };
}

export default App;
