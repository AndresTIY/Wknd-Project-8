import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import ValuesView from "../../app/scripts/components/pardy_values.js";

describe("ValuesView Component", () => {
  it("Should have a map function on datum", () => {
    let component = shallow(<ValuesView />);
    expect(component.text()).toContain(
      "this.props.datum.clues.slice(0, 5).map((data, i) => "
    );
  });
});
