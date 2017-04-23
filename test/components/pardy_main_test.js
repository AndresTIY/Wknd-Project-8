import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import MainView from "../../app/scripts/components/pardy_main.js";

describe("MainView Component", () => {
  it("Should contain HeaderView component", () => {
    let component = shallow(<Provider><MainView /></Provider>);
    expect(component.html()).toContain("<HeaderView />");
  });
  it("Should contain CatView component", () => {
    let component = shallow(<Provider><MainView /></Provider>);
    expect(component.html()).toContain("<CatView />");
  });
});
