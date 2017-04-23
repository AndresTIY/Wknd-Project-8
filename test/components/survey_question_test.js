import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import Questions from "../../app/scripts/components/survey_question.js";

describe("Questions Component", () => {
  it("Should have a route path to component Question1", () => {
    let component = shallow(<MemoryRouter><Questions /></MemoryRouter>);
    expect(component.html()).toContain(
      '<Route path="/question/1" component={Question1} />'
    );
  });
});
