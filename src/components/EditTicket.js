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

    const { price, description, picture } = this.state;
    //const eventId = this.props.match.params.eventId;
    //console.log("eventId test: ", eventId);
    const id = this.props.myticket.id;
    const eventId = this.props.myticket.eventId;
    const userId = this.props.myticket.userId;
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
    const pr = this.props.myticket.price;
    const d = this.props.myticket.description;
    const pic = this.props.myticket.picture;
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
              placeholder={pr}
              onChange={this.onChange}
            />
            <p>Description:</p>
            <input
              type="textarea"
              name="description"
              value={this.state.description}
              placeholder={d}
              onChange={this.onChange}
            />
            <p>Picture:</p>
            <input
              type="text"
              name="picture"
              value={this.state.picture}
              placeholder={pic}
              onChange={this.onChange}
            />
            {/* <p>Event Id:</p>
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
            /> */}
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

function mapStateToProps(state) {
  return {
    tickets: state.ticketList,
    users: state.userlist,
    myticket: state.ticketUsed
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editTicket);
