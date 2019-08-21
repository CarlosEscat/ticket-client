import React from "react";
import { connect } from "react-redux";
import { updateTicket } from "../actions";
import "./SignUp.css";

class editTicket extends React.Component {
  state = {
    id: "",
    price: "",
    description: "",
    picture: "",
    eventId: "",
    userId: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    const { price, description, picture, eventId, userId } = this.state;
    //const eventId = this.props.match.params.eventId;
    //console.log("eventId test: ", eventId);
    const id = 3;
    this.props.updateTicket(id, {
      price,
      description,
      picture,
      eventId,
      userId
    });

    this.setState({
      id: "",
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
        <h2> Edit Ticket </h2>

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
            <p>Event Id:</p>
            <input
              type="text"
              name="eventId"
              value={this.state.eventId}
              placeholder={"Event Id"}
              onChange={this.onChange}
            />
            <p>User Id:</p>
            <input
              type="text"
              name="userId"
              value={this.state.userId}
              placeholder={"userId"}
              onChange={this.onChange}
            />
            <br />
            <button type="submit"> Update Ticket </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  updateTicket
};

export default connect(
  null,
  mapDispatchToProps
)(editTicket);
