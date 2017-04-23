import React from "react";
import CatView from "./pardy_categories.js";
import HeaderView from "./pardy_header.js";
import { connect } from "react-redux";
import container from "../containers/all.js";

const MainView = React.createClass({
  render: function() {
    return (
      <div className="main-card">
        <HeaderView />
        <div className="categories-card">
          <CatView />
        </div>
      </div>
    );
  }
});

export default connect(container.allState)(MainView);
