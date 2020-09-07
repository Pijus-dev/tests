import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";

import CommentBox from "./commentBox.jsx";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has textarea and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    wrapped.update();
  });

  it("has a textarea that user can type it", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("textarea is empty after submitting a form", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
