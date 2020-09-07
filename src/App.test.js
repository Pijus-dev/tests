import React from "react";
import { shallow } from "enzyme";

import App from "../src/App";
import CommentBox from "../src/components/commentBox/commentBox";
import CommentList from "../src/components/commentList/commentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("it shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("it shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
