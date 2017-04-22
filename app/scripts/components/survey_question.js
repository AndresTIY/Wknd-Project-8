import React from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store.js";
import container from "../containers/all.js";
import { connect } from "react-redux";

class Questions extends React.Component {
  render() {
    return (
      <Router>
        <div className="questions">
          <Route path="/question/1" component={Question1} />
          <Route path="/question/2" component={Question2} />
          <Route path="/question/3" component={Question3} />
          <Route path="/question/4" component={Question4} />
          <Route path="/question/5" component={Question5} />
          <Route path="/question/6" component={Question6} />
          <Route path="/question/7" component={Question7} />
          <Route path="/question/8" component={Question8} />
          <Route path="/question/9" component={Question9} />
          <Route path="/question/10" component={Question10} />
        </div>
      </Router>
    );
  }
}

export default Questions;

class Question1 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>How old are you?</p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/2">Next Question</Link>
      </div>
    );
  }
}

class Question2 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>What are you doing tonight?</p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/1">Previous Question</Link>
        <Link to="/question/3">Next Question</Link>
      </div>
    );
  }
}
class Question3 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>How many cups of water have you had today?</p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/2">Previous Question</Link>
        <Link to="/question/4">Next Question</Link>
      </div>
    );
  }
}
class Question4 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>How many cats do you currently own??</p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/3">Previous Question</Link>
        <Link to="/question/5">Next Question</Link>
      </div>
    );
  }
}
class Question5 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>Who is your Overwatch Main?</p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/4">Previous Question</Link>
        <Link to="/question/6">Next Question</Link>
      </div>
    );
  }
}
class Question6 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>In how many language can you do the FizzBuzz {`function`} in?</p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/5">Previous Question</Link>
        <Link to="/question/7">Next Question</Link>
      </div>
    );
  }
}
class Question7 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>
          If money and health was not an issue, what kind of Taco Bell item would you order?
        </p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/6">Previous Question</Link>
        <Link to="/question/8">Next Question</Link>
      </div>
    );
  }
}
class Question8 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>
          Why is Google Fiber available in the majority of the 78704 area but not mine?
        </p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/7">Previous Question</Link>
        <Link to="/question/9">Next Question</Link>
      </div>
    );
  }
}
class Question9 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>How much cheese is too much?</p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/8">Previous Question</Link>
        <Link to="/question/10">Next Question</Link>
      </div>
    );
  }
}
class Question10 extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.refs.answer.value);
    store.dispatch({ type: "SAVE_ANSWER", answer: this.refs.answer.value });
  }
  render() {
    return (
      <div>
        <p>What is your Social Security Number? You can trust me</p>
        <input ref="answer" placeholder="type in your answer" type="text" />
        <button onClick={this.buttonClick}>Submit Answer</button>
        <Link to="/question/9">Previous Question</Link>
      </div>
    );
  }
}
