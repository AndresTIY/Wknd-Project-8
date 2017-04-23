import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import Markdown from "../../app/scripts/components/markdown.js";

describe("Markdown Component", () => {
  it("Should render 3 components", () => {
    let component = shallow(<Markdown />);
    expect(component.text()).toContain("<MdInput ");
    expect(component.text()).toContain("<MdOutput ");
    expect(component.text()).toContain("<MdButton ");
  });
});
