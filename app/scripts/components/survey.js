import React from "react";
import { Link, Redirect } from "react-router-dom";

class Survey extends React.Component {
  render() {
    return (
      <main>
        <h3>Welcome to my Survey!</h3>
        <p>On this page you will find 10 questions. Please answer each one.</p>
        <div className="start"><Link to="/question/1">Start!</Link></div>
        <ul>
          <li><Link to="/question/1">Question 1 Link</Link></li>
          <li><Link to="/question/2">Question 2 Link</Link></li>
          <li><Link to="/question/3">Question 3 Link</Link></li>
          <li><Link to="/question/4">Question 4 Link</Link></li>
          <li><Link to="/question/5">Question 5 Link</Link></li>
          <li><Link to="/question/6">Question 6 Link</Link></li>
          <li><Link to="/question/7">Question 7 Link</Link></li>
          <li><Link to="/question/8">Question 8 Link</Link></li>
          <li><Link to="/question/9">Question 9 Link</Link></li>
          <li><Link to="/question/10">Question 10 Link</Link></li>

        </ul>
      </main>
    );
  }
}

export default Survey;
