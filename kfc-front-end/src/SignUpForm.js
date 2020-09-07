import React from "react";

const defaultState = {
  name: "",
<<<<<<< HEAD
  birthdate: ""
=======
  birthdate: "",
  isClicked: true
>>>>>>> 2d74e0e2564b8bcda6393eb932cbcaadcae78df8
}

class SignUpForm extends React.Component {
  state = defaultState;

  handleChange = (event) => {
      console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    // FETCH TO WHERE WE ARE SAVING THE USER INPUT??
    fetch("http://localhost3000/events", {
=======
    fetch("http://localhost3000/users", {
>>>>>>> 2d74e0e2564b8bcda6393eb932cbcaadcae78df8
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((r) => r.json())
      .then((newEvent) => {
        this.props.onFormChange(newEvent);
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
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Sign-Up Form</legend>

            <input
              className="uk-input"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input 
              type="date"
              name="date"
              value={this.state.date}
              placeholder="Date of birth mm/dd/yyyy"
              onChange={this.handleChange}
              required
            />
            <input type="submit" value="Submit" />
          </fieldset>
        </form> :
        ""}
      </>
    );
  }
}

export default SignUpForm;
