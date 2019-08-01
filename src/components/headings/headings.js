import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  color: ${props => props.theme.nightblue};
`;
export const H2 = styled.h2`
  font-size: 25px;
  font-weight: medium;
  line-height: 1.41;
  color: ${props => props.theme.nightblue};
`;
export const H3 = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.3;
  color: ${props => props.theme.nightblue};
`;
export const H4 = styled.h3`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.3;
  color: ${props => props.theme.nightblue};
`;

export const Quote = styled.p`
  font-size: 20px;
  font-weight: italic lighter;
  line-height: 1.24;
  color: ${props => props.theme.quote};
`;

export const Sideinf = styled.p`
  font-size: 15px;
  font-weight: lighter;
  line-height: 0.4;
  color: ${props => props.theme.side};
`;
export const para = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.24;
  color: ${props => props.theme.side};
`;
