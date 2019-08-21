import React from "react";
import { connect } from "react-redux";
import { loadComments } from "../actions";
import CommentList from "./CommentList";

class CommentListContainer extends React.Component {
  state = {
    name: "",
    text: ""
  };
  render() {
    const ticketId = this.props.tickets.id;

    this.props.loadComments(ticketId);

    //console.log(this.props.tickets.id);
    return (
      <div>
        <p>Comment List:</p>
        <CommentList comments={this.props.comments} />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = { loadComments };

function mapStateToProps(state) {
  return {
    comments: state.commentList
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);
