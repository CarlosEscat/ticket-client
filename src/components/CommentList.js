import React from "react";
import "./SignUp.css";

export default function CommentList(props) {
  const comments = props.comments;
  //console.log(tickets);

  return (
    <div>
      {comments &&
        comments.map(comment => (
          <p key={comment.id} className="labelStyle">
            {comment.name}:
            <br />
            {comment.text}
          </p>
        ))}
      {!comments && <p>No Comments...</p>}
    </div>
  );
}
