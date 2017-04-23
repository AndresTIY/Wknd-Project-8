import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import MdInput from "../../app/scripts/components/md_input.js";

const textArea = "<textarea ";

describe("MdInput Component", () => {
  it("Should have a text area for input", () => {
    let component = shallow(<MdInput />);
    expect(component.html()).toContain(textArea);
  });
});
