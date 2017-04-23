import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import MdOutput from "../../app/scripts/components/md_output.js";

describe("Contact Component", () => {
  it("Should ask the user to contact us", () => {
    let component = shallow(<MdOutput />);
    expect(component.text()).toContain("dangerouslySetInnerHTML");
  });
});
