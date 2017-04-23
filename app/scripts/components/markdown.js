import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
//md
import marked from "marked";
import MdInput from "./md_input.js";
import MdOutput from "./md_output.js";
import MdButton from "./md_button.js";
import mdSaveNote from "../actions/md_save_note.js";

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveNote = this.retrieveNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  retrieveNote(e) {
    var textAreaNote = e.target.value;
    this.props.dispatch({ type: "SENT_TEXT", text: textAreaNote });
  }
  saveNote() {
    if (this.props.text.length < 50) {
      alert("note must be at least 50 characters");
    } else {
      this.props.dispatch(mdSaveNote(this.props.text));
    }
  }

  render() {
    return (
      <main className="markdown-main">
        <h2 onClick={() => this.props.dispatch({ type: "CLEAR_CONFIRM" })}>
          {this.props.confirmationMsg}
        </h2>
        <MdInput
          ref="textarea"
          textvalue={this.props.text}
          onChange={this.retrieveNote}
        />
        <MdOutput note={marked(this.props.text)} />
        <MdButton onChange={this.saveNote} />
      </main>
    );
  }
}

export default connect(container.allState)(Markdown);
