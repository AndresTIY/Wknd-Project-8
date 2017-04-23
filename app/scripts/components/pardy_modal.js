import React from "react";
import allState from "../containers/all.js";
import store from "../store.js";
import { connect } from "react-redux";
import container from "../containers/all.js";
import ValuesView from "./pardy_values.js";

const ModalView = React.createClass({
  pass: function() {
    console.log("pass clicked");
    store.dispatch({ type: "MODAL_TOGGLE" });
  },
  submit: function() {
    console.log("submit clicked");
    store.dispatch({ type: "MODAL_TOGGLE" });
  },

  render: function() {
    let question = this.props.question;
    let category = this.props.category;
    let answer = this.props.answer;
    let val = this.props.value;

    return (
      <div>
        <div key={this.props.key} className="modal">
          <p className="modal-cat">{category}</p>
          <p>{question}</p>
          <input type="text" placeholder="type in your answer" />
          <button onClick={this.submit}>Submit</button>
          <button onClick={this.pass}>Pass</button>

        </div>
      </div>
    );
  }
});

export default connect(container.allState)(ModalView);
