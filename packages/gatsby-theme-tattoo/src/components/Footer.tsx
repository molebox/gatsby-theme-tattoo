/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import SocialLinks from "./SiteSocialLinks";

const Box = styled.footer`
  grid-area: footer;
  height: 7em;
  background-color: #ecebeb;
`;

const Footer = () => (
  <Box>
    <SocialLinks />
  </Box>
);

export default Footer;
