import React from "react";
import { connect } from "react-redux";
import { addEvent } from "../actions";
import "./SignUp.css";

class AddEvent extends React.Component {
  state = {
    name: "",
    description: "",
    logo: "",
    start_date: "",
    end_date: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    const { name, description, logo, start_date, end_date } = this.state;

    this.props.addEvent(name, description, logo, start_date, end_date);

    this.setState({
      name: "",
      description: "",
      logo: "",
      start_date: "",
      end_date: ""
    });
  };

  onChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2> Add new event </h2>

        <div className="signup">
          <form onSubmit={this.onSubmit}>
            <p>Event name:</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder={"Event name"}
              onChange={this.onChange}
            />
            <p>Description:</p>
            <input
              className="description"
              type="textarea"
              name="description"
              value={this.state.description}
              placeholder={"Description"}
              onChange={this.onChange}
            />
            <p>Logo:</p>
            <input
              type="text"
              name="logo"
              value={this.state.logo}
              placeholder={"Event logo url"}
              onChange={this.onChange}
            />
            <p>Start date:</p>
            <input
              type="text"
              name="start_date"
              value={this.state.start_date}
              placeholder={"start date"}
              onChange={this.onChange}
            />
            <p>End date:</p>
            <input
              type="text"
              name="end_date"
              value={this.state.end_date}
              placeholder={"End Date"}
              onChange={this.onChange}
            />
            <br />
            <br />
            <button type="submit"> Add Event </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addEvent
};

export default connect(
  null,
  mapDispatchToProps
)(AddEvent);
