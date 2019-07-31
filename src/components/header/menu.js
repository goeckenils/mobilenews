import React, { Component } from "react";
import styled from "styled-components/macro";
import Circle from "./circle";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { ReactComponent as menu } from "../../icons/menu.svg";
import { ReactComponent as sales } from "../../icons/sales.svg";
import { ReactComponent as sport } from "../../icons/sport.svg";
import { ReactComponent as world } from "../../icons/world.svg";
import { ReactComponent as testtube } from "../../icons/testtube.svg";
import { ReactComponent as code } from "../../icons/code.svg";
import { StickyContainer, Sticky } from "react-sticky";
import theme from "../data/theme";

const data = [
  <Circle
    color={theme.grey}
    key="1"
    shadow="-webkit-box-shadow: 0px 4px 6px 0px rgba(187,206,221,0.5);
    -moz-box-shadow: 0px 4px 6px 0px rgba(187,206,221,0.5);
    box-shadow: 0px 4px 6px 0px rgba(187,206,221,0.5);"
    source={menu}
  />,
  <Circle
    color={theme.red}
    key="2"
    shadow="-webkit-box-shadow: 0px 4px 6px 0px rgba(255,111,111,0.5);
  -moz-box-shadow: 0px 4px 6px 0px rgba(255,111,111,0.5);
  box-shadow: 0px 4px 6px 0px rgba(255,111,111,0.5);"
    source={sales}
  />,
  <Circle
    color={theme.blue}
    key="3"
    shadow="-webkit-box-shadow: 0px 4px 6px 0px rgba(134,148,255,0.5);
  -moz-box-shadow: 0px 4px 6px 0px rgba(134,148,255,0.5);
  box-shadow: 0px 4px 6px 0px rgba(134,148,255,0.5);
  "
    source={sport}
  />,
  <Circle
    color={theme.purple}
    key="4"
    shadow="-webkit-box-shadow: 0px 4px 6px 0px rgba(177,98,255,0.5);
  -moz-box-shadow: 0px 4px 6px 0px rgba(177,98,255,0.5);
  box-shadow: 0px 4px 6px 0px rgba(177,98,255,0.5);"
    source={world}
  />,
  <Circle
    color={theme.yellow}
    key="5"
    shadow="-webkit-box-shadow: 0px 4px 6px 0px rgba(255,215,82,0.5);
  -moz-box-shadow: 0px 4px 6px 0px rgba(255,215,82,0.5);
  box-shadow: 0px 4px 6px 0px rgba(255,215,82,0.5);"
    source={testtube}
  />,
  <Circle
    color={theme.pink}
    key="6"
    shadow="-webkit-box-shadow: 0px 4px 6px 0px rgba(255,101,214,0.5);
  -moz-box-shadow: 0px 4px 6px 0px rgba(255,101,214,0.5);
  box-shadow: 0px 4px 6px 0px rgba(255,101,214,0.5);"
    source={code}
  />
];

class Menu extends Component {
  render() {
    return (
      <Wrapper>
        <Sticky topOffset={140}>
          {({ style }) => (
            <div style={style}>
              <ScrollMenu translate={20} data={data} />
            </div>
          )}
        </Sticky>
      </Wrapper>
    );
  }
}

export default Menu;

export const Wrapper = styled.div`
  padding-top: 20px;
`;
