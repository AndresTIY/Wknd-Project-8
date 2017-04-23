import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import MainView from "../../app/scripts/components/pardy_main.js";

describe("Contact Component", () => {
  it("Should contain HeaderView component", () => {
    let component = shallow(<MainView />);
    expect(component.html()).toContain("<HeaderView />");
  });
  it("Should contain CatView component", () => {
    let component = shallow(<MainView />);
    expect(component.html()).toContain("<CatView />");
  });
});
