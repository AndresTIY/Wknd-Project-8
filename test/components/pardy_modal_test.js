import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import ModalView from "../../app/scripts/components/pardy_modal.js";

describe("ModalView Component", () => {
  it("Should have a button that submits", () => {
    let component = shallow(<ModalView />);
    expect(component.html()).toContain(
      "<button onClick={this.submit}>Submit</button>"
    );
  });
  it("Should have a button that passes", () => {
    let component = shallow(<ModalView />);
    expect(component.html()).toContain(
      "<button onClick={this.pass}>Pass</button>"
    );
  });
});
