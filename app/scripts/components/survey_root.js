import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import Survey from "./survey.js";

class SurveyRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="survey-base">
        <Survey />
      </section>
    );
  }
}

export default connect(container.allState)(SurveyRoot);
