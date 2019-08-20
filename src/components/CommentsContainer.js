import React from "react";
import { connect } from "react-redux";
import { addComment } from "../actions";

class CommentsContainer extends React.Component {
  state = {
    name: "",
    text: "",
    ticketId: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    const { name, text, ticketId } = this.state;

    this.props.addComment(name, text, ticketId);

    this.setState({
      name: "",
      text: "",
      ticketId: ""
    });
  };

  onChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2> Add new comment </h2>

        <div>
          <form onSubmit={this.onSubmit}>
            <p>User name:</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder={"Event name"}
              onChange={this.onChange}
            />
            <p>Comment:</p>
            <input
              type="textarea"
              name="text"
              value={this.state.text}
              placeholder={"Comment"}
              onChange={this.onChange}
            />
            <p>Ticket Id:</p>
            <input
              type="text"
              name="ticketId"
              value={this.state.ticketId}
              placeholder={"Ticket Id"}
              onChange={this.onChange}
            />
            <br />
            <button type="submit"> Add Comment </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addComment
};

export default connect(
  null,
  mapDispatchToProps
)(CommentsContainer);
