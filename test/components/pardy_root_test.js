import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import PardyRoot from "../../app/scripts/components/pardy_root.js";

describe("Pardy Root Component", () => {
  it("Should have the StartView component", () => {
    let component = shallow(<PardyRoot />);
    expect(component.html()).toContain("<StartView />");
  });
  it("Should have the Main View component", () => {
    let component = shallow(<PardyRoot />);
    expect(component.html()).toContain("<MainView />");
  });
});
