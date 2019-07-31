import styled from "styled-components/macro";
import React, { Component } from "react";

class Circle extends Component {
  render() {
    const Source = this.props.source;
    return (
      <CircleBg
        color={this.props.color}
        marginl={this.props.marginl}
        shadow={this.props.shadow}
      >
        <Source width={this.props.width} height={this.props.height} />
      </CircleBg>
    );
  }
}

Circle.defaultProps = {
  width: "23px",
  height: "23px"
};

export const CircleBg = styled.div`
  height: 47px;
  width: 47px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  box-shadow: ${props => props.shadow};
  margin-left: ${props => props.marginl};
  outline: none;

  &:focus {
    outline: none;
  }
`;

export default Circle;
