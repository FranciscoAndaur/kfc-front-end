import React from "react";

const defaultState = {
  name: "",
  birthdate: ""
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
    // FETCH TO WHERE WE ARE SAVING THE USER INPUT??
    fetch("http://localhost3000/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((r) => r.json())
      .then((newEvent) => {
        this.props.onFormChange(newEvent);
      });
  };

  render() {
    return (
      <>
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
            <imput type="submit" value="Submit" />
          </fieldset>
        </form>
      </>
    );
  }
}

export default SignUpForm;
