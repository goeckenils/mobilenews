import React, { Component } from "react";
import styled from "styled-components/macro";

class searchbar extends Component {
  render() {
    return (
      <Wrapper>
        <Searchbar />
        <Icon />
      </Wrapper>
    );
  }
}

export default searchbar;

export const Wrapper = styled.div`
  position: relative;
`;

export const Searchbar = styled.input`
  height: 70px;
  width: 100%;
  border-radius: 50px;
  border: none;
  font-size: 25px;
  padding: 20px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.grey};
  transition: all 0.5s ease-in-out;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const Icon = styled.div`
  width: 42px;
  height: 42px;
  position: absolute;
  border-radius: 50px;
  background-color: ${props => props.theme.red};
  right: 20px;
  top: 14px;
`;
