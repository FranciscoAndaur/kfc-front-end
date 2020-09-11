import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/Main/MainContainer";
import UserContainer from "./Components/LeftContainer/UserContainer";
import SignUpForm from './SignUpForm'

class App extends React.Component {
  state = {
    renderedEventsCard: false,
    clickedInCard: false,
    eventsfromBACKEND: [],
    showSignUpForm: true,
    users: []
  }
// GET USERS
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
<<<<<<< HEAD
      .then(r => r.json())
      .then(eventsArr => {
        eventsArr.filter(evt => {
          if (parseInt(evt.conceptionDate) === parseInt(birthdate)) {
            allEvents.push(evt.content)
          }
        })
        this.setState({
          eventsfromBACKEND: allEvents
        }, () => console.log(this.state.eventsfromBACKEND))
      })
=======
    .then(r => r.json())
    .then(eventsArr => { eventsArr.filter(evt => {
      if (parseInt(evt.conceptionDate) === parseInt(birthdate)){
        allEvents.push(evt.content)
      }})
      this.setState({
        eventsfromBACKEND: allEvents
    }, () => console.log(this.state.eventsfromBACKEND))
  })
>>>>>>> 290e976b1e5e62336499b90ae8c56e60046a6c72
  }

  displayCard = () => {
    this.setState({
      renderedEventsCard: true
    })
  }

  handleShowSignUpFormClick = () => {
    this.setState({
<<<<<<< HEAD

      showSignUpForm: true
    })
=======
      showSignUpForm: true})
>>>>>>> 290e976b1e5e62336499b90ae8c56e60046a6c72
  }
  handleDelete = (name) => {
    let filteredArray = this.state.users.filter((userObject) => {
      return userObject.name !== name
    })
    this.setState({
      users: filteredArray
    })
  }

  render() {

    return (
      <div className="App">
        <Header />
        <div className="uk-flex uk-flex-left">
          <div className="uk-card uk-card-default uk-card-body">
            <UserContainer
              handleDelete={this.handleDelete}
              handleClick={this.handleClick}
              users={this.state.users}
            />
          </div>
          <div className=" uk-card uk-card-default uk-card-body uk-margin-left ">
            {this.state.showSignUpForm ? <SignUpForm
              addUserToUserCont={this.addUserToUserCont}
            /> : <div onClick={this.handleShowSignUpFormClick} className="uk-card-badge uk-label-danger">SignUp Form</div>}
            <MainContainer
              displayCard={this.displayCard}
              eventsfromBACKEND={this.state.eventsfromBACKEND} />
          </div>
        </div>
      </div>
    )
  };
}

export default App;