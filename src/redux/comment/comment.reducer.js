import { commentTypes } from "./comment.types";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case commentTypes.SAVE_COMMENT:
      return [...state, action.payload];
    case commentTypes.FETCH_COMMENTS:
      const comments = action.payload.data.map(({ name }) => name);
      return [...state, ...comments];
    default:
      return state;
  }
};
export default commentReducer;
