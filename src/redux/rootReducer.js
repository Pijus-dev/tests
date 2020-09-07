import { combineReducers } from "redux";
import commentReducer from "../redux/comment/comment.reducer";

const rootReducer = combineReducers({
  comments: commentReducer,
});
export default rootReducer;
