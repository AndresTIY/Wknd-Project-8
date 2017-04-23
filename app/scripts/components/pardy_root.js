import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import MainView from "./pardy_main.js";
import StartView from "./pardy_start.js";

const PardyRoot = React.createClass({
  render: function() {
    let hideClass = "hide-content";
    let showClass = "show-content";
    if (this.props.startClick) {
      hideClass = "show-content";
      showClass = "hide-content";
    }

    return (
      <section className="pardy-main">
        <div className={showClass}>
          <StartView />
        </div>
        <div className={hideClass}>
          <MainView />
        </div>
      </section>
    );
  }
});

export default connect(container.allState)(PardyRoot);
