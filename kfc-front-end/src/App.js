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
    eventsfromBACKEND : [],
    showSignUpForm: true,
    users: []
  }


  componentDidMount() {
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then((userData) => {
        this.setState({
        users: userData
        })
    })
}  

  //Clicked for Card.js
  handleClick = (birthdate) => {
    this.setState(prevState => {
      return {
        eventsfromBACKEND: [],
        clickedInCard: !prevState.clickedInCard,
        showSignUpForm: false
      }
    })
    this.fetchContents(birthdate)   
  } 

  addUserToUserCont = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }

  fetchContents = (birthdate) => {
    let allEvents = [];
    fetch("http://localhost:3000/events")
    .then(r => r.json())
    .then(eventsArr => { eventsArr.filter(evt => {
      if (parseInt(evt.conceptionDate) === parseInt(birthdate)){
        allEvents.push(evt.content)
      }})
      this.setState({
        eventsfromBACKEND: allEvents
    }, () =>   console.log(this.state.eventsfromBACKEND))
  })
  }

  displayCard = () => {
    this.setState({
      renderedEventsCard: true
    })
  }

  handleShowSignUpFormClick = () => {

    this.setState({
      
      showSignUpForm: true})
  }
  
  render() {
    console.log('test:', 'color:green;', this.state.clickedInCard)
  return (
    <div className="App">
      <Header />
      <div className="uk-flex uk-flex-left">
        <div className="uk-card uk-card-default uk-card-body">
          <UserContainer handleClick={this.handleClick}
          users={this.state.users}
          />
        </div>
        <div className=" uk-card uk-card-default uk-card-body uk-margin-left ">
        {this.state.showSignUpForm ? <SignUpForm 
         addUserToUserCont={this.addUserToUserCont}
         /> : <button onClick={this.handleShowSignUpFormClick}>Show SignUp Form</button> }
          <MainContainer displayCard ={this.displayCard} eventsfromBACKEND={this.state.eventsfromBACKEND}/>
        </div>
      </div>
    </div>
  )
  };
}

export default App;
