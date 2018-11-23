import React from "react";

class Button extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log('cliekc');
  };

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }
}
export default Button;
