import React from "react";

// SET INITIAL STATE
const defaultState = {
  name: "",
  birthdate: "",
  isClicked: true,
  birthdateEvents: []
}

class SignUpForm extends React.Component {
  state = defaultState;
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    });
  };

  handleFormChange = (obj) => {
    this.setState({
      birthdate: obj.birthdate,
      name: obj.name
    })
  } 

    // GET YEAR
    getYear = () => {
      return this.state.birthdate.slice(0, 4)
    }
    // GET MONTH
    getMonth = () => {
      return this.state.birthdate.slice(5, 7)
    }
    //GET DAY
    getDay = () => {
      return this.state.birthdate.slice(8, 10)
    }

  // HANDLE API
  handleApi = () => {
    const birthYear = this.getYear()
    const month = this.getMonth()
    const day = this.getDay()
    let apiResponse = [];
      fetch(`https://history.muffinlabs.com/date/${month}/${day}`)
      .then(r => r.json())
      .then(data => { data.data.Events.filter(event => 
        {if (parseInt(event.year) >= birthYear){
          apiResponse.push(event)
        }})
        this.setState({
          birthdateEvents: apiResponse
        }, () => this.saveEvents())
      })
  }

  saveEvents = () => {
let eventsArr = this.state.birthdateEvents.map(obj => 
  ({conceptionDate: this.state.birthdate, content: obj.text, year: obj.year})
  )
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({events: eventsArr})
    })
      .then((r) => r.json())
      .then((newEvtArr) => {
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleApi()
    const userInfo= {name: event.target.name.value, 
                  birthdate: event.target.birthdate.value,
                  bio: event.target.bio.value,
                  imageURL: event.target.imageURL.value}
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo)
    })
      .then((r) => r.json())
      .then((newUser) => {
        this.handleFormChange(newUser);
        this.props.addUserToUserCont(newUser)
      })
      .then(this.setState(prevState => {
        return { isClicked: !prevState.isClicked }
      }
    ))
  };
  

  render() {
    return (
      <>{this.state.isClicked ?
        <form onSubmit={this.handleSubmit}>
          
            <legend className="uk-legend">Sign-Up Form</legend>

            <input
              className="uk-input"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <input
              className="uk-input"
              type="text"
              name="bio"
              placeholder="Bio: Write a little Snippet about yourself"
              value={this.state.bio}
              onChange={this.handleChange}
              required
            />
            <input
              className="uk-input"
              type="text"
              name="imageURL"
              placeholder="Avatar: Must be in form of image URL"
              value={this.state.imageURL}
              onChange={this.handleChange}
              required
            />
            <input 
              className="uk-input"
              type="date"
              name="birthdate"
              value={this.state.birthdate}
              placeholder=""
              onChange={this.handleChange}
              required
            />
            <button type="submit" 
            value="Submit" 
            className="uk-button uk-button-default">Submit</button>
        </form> :
        ""}
      </>
    );
  }
}

export default SignUpForm;