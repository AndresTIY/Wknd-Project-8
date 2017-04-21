import React from "react";

class MdInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-area">
        <h3>Create a Note with Markdown!</h3>
        <textarea
          value={this.props.textvalue}
          onChange={this.props.onChange}
          rows="30"
          cols="50"
        />
      </div>
    );
  }
}

export default MdInput;
