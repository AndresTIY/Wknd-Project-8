import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import StartView from "../../app/scripts/components/pardy_start.js";

describe("Start View component", () => {
  it("Should have an input tag", () => {
    let component = shallow(<StartView />);
    expect(component.html()).toContain(
      '<input type="text" placeholder="what is your name?"/>'
    );
  });
});
