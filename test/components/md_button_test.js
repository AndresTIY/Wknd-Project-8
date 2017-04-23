import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import MdButton from "../../app/scripts/components/md_button.js";

describe("MdButton Component", () => {
  it("Should have an onClick event", () => {
    let component = shallow(<MdButton />);
    expect(component.text()).toContain("onClick={this.props.onChange}");
  });
});
