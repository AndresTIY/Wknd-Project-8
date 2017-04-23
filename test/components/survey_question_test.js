import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import Questions from "../../app/scripts/components/survey_question.js";

describe("Questions Component", () => {
  it("Should have route paths", () => {
    let component = shallow(<MemoryRouter><Questions /></MemoryRouter>);
    expect(component.text()).toContain("<Router />");
  });
});
