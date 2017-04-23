import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import MdOutput from "../../app/scripts/components/md_output.js";

describe("MdOutput Component", () => {
  it("Should contain the div with class name `md-preview-card`", () => {
    let component = shallow(<MdOutput />);
    expect(component.html()).toContain('<div class="md-preview-card">');
  });
});
