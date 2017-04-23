import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import SurveyRoot from "../../app/scripts/components/survey_root.js";

describe("Survey Root Component", () => {
  it("Should contain Survey component", () => {
    let component = shallow(<SurveyRoot />);
    expect(component.html()).toContain("<Survey />");
  });
});
