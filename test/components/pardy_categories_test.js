import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import CatView from "../../app/scripts/components/pardy_categories.js";

const htmlToExpect = "<ValuesView category={datum.title} datum={datum} />";

describe("CatView Component", () => {
  it("Should contain ValuesView component", () => {
    let component = shallow(<CatView />);
    expect(component.find("ValuesView")).to.have.length(1);
  });
});
