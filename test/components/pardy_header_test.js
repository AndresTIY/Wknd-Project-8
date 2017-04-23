import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";
import { connect } from "react-redux";
import { Provider } from "react-redux";

import HeaderView from "../../app/scripts/components/pardy_header.js";

describe("HeaderView Component", () => {
  it("Should be connected to the store", () => {
    let component = shallow(<Provider><HeaderView /></Provider>);
    expect(component.text()).toContain("<Connect(HeaderView) />");
  });
});
