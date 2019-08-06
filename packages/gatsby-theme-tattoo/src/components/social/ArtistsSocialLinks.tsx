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
  margin: 1em;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: solid 0.1em black;
  color: #1c1c1c;

  &:hover {
    border-bottom: solid 0.1em #d46a6a;
  }

  &:active {
    color: #d46a6a;
    border-bottom: solid 3px #d46a6a;
  }
`;

const SocialLinks = () => {
  const social = useStaticQuery(query);
  const facebook = social.allSanityArtist.edges[0].node.facebook;
  const instagram = social.allSanityArtist.edges[0].node.instagram;
  const twitter = social.allSanityArtist.edges[0].node.twitter;
  return (
    <ImageContainer>
      <Link href={facebook} target="_blank" rel="noreferrer">
        <FeatherIcon icon="facebook" size="20" />
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
  query ArtistsSocialMediaQuery {
    allSanityArtist {
      edges {
        node {
          facebook
          instagram
          twitter
        }
      }
    }
  }
`;
