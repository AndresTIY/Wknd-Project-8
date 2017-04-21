import React from "react";

class MdButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn-action">
        <button onClick={this.props.onChange}>Save Your Note!</button>
      </div>
    );
  }
}

export default MdButton;
