import React, { useState } from "react";

import { connect } from "react-redux";

import {
  saveComment,
  fetchComments,
} from "../../redux/comment/comment.actions";

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    saveComment(comment);

    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button>submit</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={fetchComments}>
        fetch Comments
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveComment: (value) => dispatch(saveComment(value)),
  fetchComments: () => dispatch(fetchComments()),
});

export default connect(null, mapDispatchToProps)(CommentBox);
