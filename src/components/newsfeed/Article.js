import React, { Component } from "react";
import styled from "styled-components";
import { H3, Sideinf } from "../headings/headings";

class Article extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <TextWrapper>
            <H3>{this.props.heading}</H3>
            <Discription>
              {this.props.date}
            </Discription>
          </TextWrapper>
          <Image><img
            src={this.props.image}
          /></Image>
        </Wrapper>
        <FlexWrapper>
          <Underline />
        </FlexWrapper>
      </div>
    );
  }
}

export default Article;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const TextWrapper = styled.div`
  width: 70%;
`;

export const Image = styled.div`
  width: 75px;
  height: 75px;
  border: 2px solid ${props => props.theme.grey};
  border-radius: 10px;
  overflow: hidden;
`;

export const Underline = styled.div`
  width: 90%;
  height: 1px;
  background-color: #f1f1f1;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Discription = styled(Sideinf)`
  font-size: 13px;
  padding-top: 5px;
`;

export const FlexStop = styled.div``;
