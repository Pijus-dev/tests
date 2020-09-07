import commentReducer from "./comment.reducer";
import { commentTypes } from "./comment.types";
import { saveComment } from "./comment.actions";

it("handles actions of save comment", () => {
  const action = {
    type: commentTypes.SAVE_COMMENT,
    payload: "New Comment",
  };
  const newState = commentReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

it("handles action of unknown type", () => {
  const newState = commentReducer([], {});

  expect(newState).toEqual([]);
});

describe("saveComment", () => {
  it("has a correnct type", () => {
    const action = saveComment();

    expect(action.type).toEqual(commentTypes.SAVE_COMMENT);
  });

  it("has a correnct payload", () => {
    const action = saveComment("New Comment");

    expect(action.payload).toEqual("New Comment");
  });
});
