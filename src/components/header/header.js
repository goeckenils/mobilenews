import React, { Component } from "react";
import styled from "styled-components/macro";
import { H1, Sideinf } from "../headings/headings";
import Searchbar from "./searchbar";
import moment from "moment";
import Menu from "../header/menu";

export class header extends Component {
  render() {
    return (
      <Anchor>
        <Background />
        <Wrapper>
          <Distance>
            <Information>
              <H1>News Today</H1>
              <Sideinf>{moment(new Date()).format("l")}</Sideinf>
            </Information>
          </Distance>
        </Wrapper>
        <Wrapper>
          <Distance>
            <Searchbar />
          </Distance>
        </Wrapper>
        <Menu />
      </Anchor>
    );
  }
}

export default header;

export const Background = styled.div`
  width: 100%;
  height: 207px;
  left: 0;
  right: 0;

  background-color: ${props => props.theme.bg};
  border-radius: 0 0 10px 10px;
  position: absolute;
`;

export const Anchor = styled.div`
  position: relative;
  z-index: 1;
`;
export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 20px;
`;

export const Information = styled.div`
  position: relative;
  z-index: 1;
`;

export const Distance = styled.div`
  padding-top: 20px;
`;
export const DistanceL = styled.div`
  padding-top: 40px;
`;
