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
import theme from "../data/theme";

const data = [
  <Circle color={theme.grey} key="1" marginl="20px" source={menu} />,
  <Circle color={theme.red} key="2" marginl="35px" source={sales} />,
  <Circle color={theme.blue} key="3" marginl="35px" source={sport} />,
  <Circle color={theme.purple} key="4" marginl="35px" source={world} />,
  <Circle color={theme.yellow} key="5" marginl="35px" source={testtube} />,
  <Circle color={theme.pink} key="6" marginl="35px" source={code} />
];

class Menu extends Component {
  render() {
    return (
      <Wrapper>
        <ScrollMenu data={data} />
      </Wrapper>
    );
  }
}

export default Menu;

export const Wrapper = styled.div`
  padding-top: 20px;
`;
