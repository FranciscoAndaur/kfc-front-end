import React from "react";

const defaultState = {
  name: "",
  birthdate: "",
  isClicked: true
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
    fetch("http://localhost3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((r) => r.json())
      .then((userInfo) => {
        this.props.onFormChange(userInfo);
      })
      .then(this.setState(prevState => {
        return { isClicked: !prevState.isClicked }
      }
    ))
  };
  ///TODO KAREM FIX THIS SHIT ^^^^^^^

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
