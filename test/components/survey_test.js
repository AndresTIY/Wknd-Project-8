import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import Survey from "../../app/scripts/components/survey.js";

describe("Survey Component", () => {
  it("Should have a Link To question/1", () => {
    let component = shallow(<MemoryRouter><Survey /></MemoryRouter>);
    expect(component.html()).toContain('<a href="/question/1">Question 1</a>');
  });
});
