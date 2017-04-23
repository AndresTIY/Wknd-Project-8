import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import MdOutput from "../../app/scripts/components/md_output.js";

describe("MdOutput Component", () => {
  it("Should contain the dangerouslySetInnerHTML", () => {
    let component = shallow(<MdOutput />);
    expect(component.text()).toContain("dangerouslySetInnerHTML");
  });
});
