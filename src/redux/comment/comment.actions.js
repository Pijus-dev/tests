import { commentTypes } from "./comment.types";

import axios from "axios";

export const saveComment = (comment) => {
  return {
    type: commentTypes.SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = async () => {
  const response = await axios.get(
    "http://jsonplaceholder.typicode.com/comments"
  );

  return {
    type: commentTypes.FETCH_COMMENTS,
    payload: response,
  };
};
