import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import Results from "../../app/scripts/components/survey_results.js";

describe("Results Component", () => {
  it("Should not having anything related to Results yet", () => {
    let component = shallow(<Results />);
    expect(component.text()).toContain("About Navigation");
  });
});
