import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

interface Props {
  url: string;
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Img)`
  width: 4em;
  height: 4em;

  /*   @media (max-width: 920px) {
    height: 20em;
    margin: 0 2em 5em 2em;
  } */
`;

const Link = styled.a`
  width: 4em;
  height: 4em;
  margin: 1em 1em 0 0;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;

  &:hover {
    width: 4.5em;
    height: 4.5em;
    border-bottom: solid 0.2em #9e4049;
  }
`;

const SocialLink = ({ url }: Props) => {
  const social = useStaticQuery(query);
  return (
    <ImageContainer>
      <Link href={url} target="_blank" rel="noreferrer">
        <Image fluid={social.facebook.childImageSharp.fluid} />
      </Link>
      <Link href={url} target="_blank" rel="noreferrer">
        <Image fluid={social.instagram.childImageSharp.fluid} />
      </Link>
      <Link href={url} target="_blank" rel="noreferrer">
        <Image fluid={social.twitter.childImageSharp.fluid} />
      </Link>
    </ImageContainer>
  );
};

export default SocialLink;

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    facebook: file(relativePath: { eq: "facebook.png" }) {
      ...squareImage
    }
    instagram: file(relativePath: { eq: "instagram.png" }) {
      ...squareImage
    }
    twitter: file(relativePath: { eq: "twitter.png" }) {
      ...squareImage
    }
  }
`;
