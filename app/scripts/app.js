import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Markdown from "./components/markdown.js";
import Survey from "./components/survey.js";
import AppRoot from "./components/app_root.js";
import SurveyRoot from "./components/survey_root.js";
import Questions from "./components/survey_question.js";
import PardyRoot from "./components/pardy_root.js";

const Nav = () => (
  <nav>
    <li><Link to="/markdown">Markdown Showdown</Link></li>
    <li><Link to="/surveyroot">Survey</Link></li>
    <li><Link to="/jeopardy">Jeopardy</Link></li>
  </nav>
);

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={AppRoot} />
          <Route path="/markdown" component={Markdown} />
          <Route path="/surveyroot" component={SurveyRoot} />
          <Route path="/surveystart" component={Survey} />
          <Route path="/question" component={Questions} />
          <Route path="/jeopardy" component={PardyRoot} />

          <Nav />

        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}

// <Route path="/question" component={Questions} />
// <Route path="/results" component={Results} />
