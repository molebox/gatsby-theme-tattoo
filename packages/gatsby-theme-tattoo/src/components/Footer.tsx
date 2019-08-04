/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useStaticQuery } from "gatsby";
import SocialLink from "./SocialLink";
import { graphql } from "gatsby";

const Box = styled.footer`
  grid-area: footer;
  height: 7em;
  background-color: #ecebeb;
`;

const Footer = () => {
  const sanity = useStaticQuery(query);
  const edges = sanity.allSanityHomePage.edges;
  return (
    <Box>
      {edges.map(({ node }: any) => (
        <SocialLink url={node.url} />
      ))}
    </Box>
  );
};

export default Footer;

export const query = graphql`
  query SocialMediaQuery {
    allSanityHomePage {
      edges {
        node {
          instagram
          facebook
          twitter
        }
      }
    }
  }
`;
