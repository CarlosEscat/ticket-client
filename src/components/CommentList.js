import React from "react";

export default function CommentList(props) {
  const comments = props.comments;
  //console.log(tickets);
  var style = {
    fontWeight: "bold",
    background: "white",
    color: "black"
  };
  return (
    <div>
      {comments &&
        comments.map(comment => (
          <p key={comment.id}>
            <label style={style}> {comment.name}: </label>
            <br />
            <label style={style}>{comment.text} </label>
          </p>
        ))}
      {!comments && <p>No Comments...</p>}
    </div>
  );
}
