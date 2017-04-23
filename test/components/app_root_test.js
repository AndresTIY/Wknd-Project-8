import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import AppRoot from "../../app/scripts/components/app_root.js";

describe("AppRoot Component", () => {
  it("Should contain h1 tag with a title", () => {
    let component = shallow(<AppRoot />);
    expect(component.text()).toContain("Check Out My Projects!");
  });
});
