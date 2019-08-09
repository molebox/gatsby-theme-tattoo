import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import FeatherIcon from "feather-icons-react";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  margin: 2em;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: solid 0.2em black;
  color: #1c1c1c;

  &:hover {
    border-bottom: solid 3px #d46a6a;
  }

  &:active {
    color: #d46a6a;
    border-bottom: solid 3px #d46a6a;
  }
`;

const SocialLinks = () => {
  const social = useStaticQuery(query);
  const facebook = social.allSanityHomePage.edges[0].node.facebook;
  const instagram = social.allSanityHomePage.edges[0].node.instagram;
  const twitter = social.allSanityHomePage.edges[0].node.twitter;
  return (
    <ImageContainer>
      <Link href={facebook} target="_blank" rel="noreferrer">
        <FeatherIcon icon="facebook" size="20"/>
      </Link>
      <Link href={instagram} target="_blank" rel="noreferrer">
        <FeatherIcon icon="instagram" size="20" />
      </Link>
      <Link href={twitter} target="_blank" rel="noreferrer">
        <FeatherIcon icon="twitter" size="20" />
      </Link>
    </ImageContainer>
  );
};

export default SocialLinks;

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

// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       fluid(maxWidth: 200, maxHeight: 200) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `;

// export const query = graphql`
//   query {
//     facebook: file(relativePath: { eq: "facebook.png" }) {
//       ...squareImage
//     }
//     instagram: file(relativePath: { eq: "instagram.png" }) {
//       ...squareImage
//     }
//     twitter: file(relativePath: { eq: "twitter.png" }) {
//       ...squareImage
//     }
//   }
// `;
