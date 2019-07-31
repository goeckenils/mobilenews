import React, { Component } from "react";
import { H2, H3, Sideinf } from "../headings/headings";
import styled from "styled-components/macro";

class Heading extends Component {
  render() {
    const category = "Latest News";
    return (
      <div>
        <Wrapper>
          <H2>{category}</H2>
          <Sideinf>Top stories at the Moment</Sideinf>
        </Wrapper>
      </div>
    );
  }
}

export default Heading;

export const Wrapper = styled.div`
  padding: 10px 20px;
`;
