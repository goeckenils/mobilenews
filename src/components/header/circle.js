import styled from "styled-components";
import React, { Component } from "react";

class Circle extends Component {
  render() {
    const Source = this.props.source;
    return (
      <CircleBg color={this.props.color} marginl={this.props.marginl}>
        <Source width={this.props.width} height={this.props.height} />
      </CircleBg>
    );
  }
}

Circle.defaultProps = {
  width: "11.3px",
  height: "11.3px"
};

export const CircleBg = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  box-shadow: ${props => props.shadow};
  margin-left: ${props => props.marginl};
`;

export default Circle;
