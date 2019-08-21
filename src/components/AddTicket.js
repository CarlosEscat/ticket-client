import React from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions";
import "./SignUp.css";

class addTicket extends React.Component {
  state = {
    price: "",
    description: "",
    picture: "",
    eventId: "",
    userId: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    const { price, description, picture, userId } = this.state;
    const eventId = this.props.match.params.eventId;
    //console.log("eventId test: ", eventId);
    this.props.createTicket(price, description, picture, eventId, userId);

    this.setState({
      price: "",
      description: "",
      picture: "",
      eventId: "",
      userId: ""
    });
  };

  onChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2> Add New Ticket </h2>

        <div className="signup">
          <form onSubmit={this.onSubmit}>
            <p>Ticket price:</p>
            <input
              type="text"
              name="price"
              value={this.state.price}
              placeholder={"Price"}
              onChange={this.onChange}
            />
            <p>Description:</p>
            <input
              type="textarea"
              name="description"
              value={this.state.description}
              placeholder={"Description"}
              onChange={this.onChange}
            />
            <p>Picture:</p>
            <input
              type="text"
              name="picture"
              value={this.state.picture}
              placeholder={"Ticket picture url"}
              onChange={this.onChange}
            />
            {/* <p>Event Id:</p>
            <input
              type="text"
              name="eventId"
              value={this.state.eventId}
              placeholder={"Event Id"}
              onChange={this.onChange}
            /> */}
            <p>User Id:</p>
            <input
              type="text"
              name="userId"
              value={this.state.userId}
              placeholder={"userId"}
              onChange={this.onChange}
            />
            <br />
            <button type="submit"> Add Ticket </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  createTicket
};

export default connect(
  null,
  mapDispatchToProps
)(addTicket);
