/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

const Box = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  height: 10em;
  // border-top: solid 3px black;
  background-color: #ecebeb;
`;

interface Props {
  children: React.ReactNode;
}

const Footer = ({ children }: Props) => <Box>{children}</Box>;

export default Footer;
