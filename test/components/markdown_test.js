import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import Markdown from "../../app/scripts/components/mardown.js";

describe("Markdown Component", () => {
  it("Should render 3 components", () => {
    let component = shallow(<Markdown />);
    expect(component.html()).toContain("<MdInput");
  });

  it("Should have a link to the about page", () => {
    /* If we are testing a component that uses Link or NavLink or anything else related to react-router
    * Then we will need to wrap the component we are testing in a memory router first.
    * This is useful, because we can also start the router at whatever URL we are testing for that component
    * For example:
        <MemoryRouter initialEntries={['/users/2']}>
          <User />
        </MemoryRouter>
    */

    let component = shallow(<MemoryRouter><Contact /></MemoryRouter>);
    expect(component.html()).toContain('<a href="/about">Learn About Us</a>');
  });
});
