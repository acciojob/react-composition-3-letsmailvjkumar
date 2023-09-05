import React, { Component } from "react";

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipVisible: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isTooltipVisible: true });
  };

  handleMouseLeave = () => {
    this.setState({ isTooltipVisible: false });
  };

  render() {
    const { text, children } = this.props;
    const { isTooltipVisible } = this.state;

    return (
      <div
        className="tooltip"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
        {isTooltipVisible && <span className="tooltiptext">{text}</span>}
      </div>
    );
  }
}

export default Tooltip;
