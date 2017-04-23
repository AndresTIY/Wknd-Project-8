import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import HeaderView from "../../app/scripts/components/pardy_header.js";

describe("HeaderView Component", () => {
  it("Should contain the grabName function", () => {
    let component = shallow(<HeaderView />);
    expect(component.text()).toContain("this.grabName()");
  });
});
