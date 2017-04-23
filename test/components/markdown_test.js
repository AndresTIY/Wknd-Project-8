import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import Markdown from "../../app/scripts/components/mardown.js";

describe("Markdown Component", () => {
  it("Should render 3 components", () => {
    let component = shallow(<Markdown />);
    expect(component.html()).toContain("<MdInput />");
    expect(component.html()).toContain("<MdOutput />");
    expect(component.html()).toContain("<MdButton />");
  });
});
