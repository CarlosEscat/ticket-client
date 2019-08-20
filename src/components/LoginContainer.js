import React from "react";
import { login, newName } from "../actions";
import { connect } from "react-redux";
import "./SignUp.css";

class DisplayLogin extends React.Component {
  state = {
    name: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const { name, password } = this.state;
    this.props.newName(name);
    console.log("Name: ", name, " Password: ", password);
    this.props.login(name, password);

    this.setState({ name: "", password: "" });
  };

  onChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>Log In with name and password</h2>

        <div className="signup">
          <form onSubmit={this.onSubmit}>
            <p>Name:</p>
            <input
              type="text"
              value={this.state.name}
              placeholder="name"
              name="name"
              onChange={this.onChange}
            />
            <p>Password:</p>
            <input
              type="password"
              value={this.state.password}
              placeholder="password"
              name="password"
              onChange={this.onChange}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login,
  newName
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayLogin);
