import styled from "styled-components/macro";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Circle extends Component {
  render() {
    const Source = this.props.source;
    return (
      <Link to={this.props.link}>
        <CircleBg
          color={this.props.color}
          marginl={this.props.marginl}
          shadow={this.props.shadow}
        >
          <Source width={this.props.width} height={this.props.height} />
        </CircleBg>
      </Link>
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
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
`;

export default Circle;
