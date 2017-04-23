import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import CatView from "../../app/scripts/components/pardy_categories.js";

const htmlToExpect = "<ValuesView category={datum.title} datum={datum} />";

describe("Contact Component", () => {
  it("Should ask the user to contact us", () => {
    let component = shallow(<CatView />);
    expect(component.html()).toContain(htmlToExpect);
  });
});
