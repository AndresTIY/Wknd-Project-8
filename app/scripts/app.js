import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Markdown from "./components/markdown.js";
import AppRoot from "./components/app_root.js";

const Nav = () => (
  <nav>
    <li><Link to="/markdown">Markdown Showdown</Link></li>
    <li><Link to="/survey">Survey</Link></li>
    <li><Link to="/jeopardy">Jeopardy</Link></li>
  </nav>
);

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route path="/" component={AppRoot} />
          <Route path="/markdown" component={Markdown} />

        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
