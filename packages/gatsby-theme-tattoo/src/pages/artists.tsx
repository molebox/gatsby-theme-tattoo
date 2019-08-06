/** @jsx jsx */
import { jsx } from "theme-ui";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import SocialLinks from "./../components/social/ArtistsSocialLinks";

const artists = ["A", "R", "T", "I", "S", "T", "S"];

const Container = styled.div`
  margin: 5em;
  height: 100%;

    /* iphone 5 */
    @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
      margin: .1em;
     }

    /* iphone 6, 6s, 7, 8 */
    @media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) { 
      margin: .5em;
    }

    /* iphone 6+, 6s+, 7+, 8+ */
    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
      margin: .5em;
     }

     /* Galaxy S5 */
     @media only screen and (min-device-width: 360px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) { 
       margin .5em;
     }

    /* iphone X */
    @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) { 
      margin 1em;
    }

    /* iphone XR */
    @media only screen and (min-device-width : 414px) and (max-device-height : 896px) and (-webkit-device-pixel-ratio : 2) { 
      margin 1em;
    }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 1em 0 8em 0;
`;

const Column = styled.div`
  diaplay: flex;
  flex-direction: column;
  flex-basis: 100%;

  @media (min-width: 800px) {
    flex: 1;
  }
`;

const PictureBox = styled.div`
  height: 300px;
  margin: 1em;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;

  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Image = styled(Img)`
  width: 15em;
  height: 15em;
  margin: 0 4em 0 0;
  border-radius: 0.4em;
  box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);

  @media (max-width: 920px) {
    width: 10em;
    height: 10em;
    border-radius: 0.4em;
    box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);
  }

  @media (max-width: 1024px) {
    width: 15em;
    height: 15em;
    border-radius: 0.4em;
    box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);
  }
`;

const BioBox = styled.div`
  height: 300px;
  margin: 1em;
  font-size: 1em;
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-stert;
  align-content: center;
  padding: 1em;
  margin: 2em 0 0 0;

  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 700ms both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 700ms both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Artists = () => {
  const sanity = useStaticQuery(query);
  const edges = sanity.allSanityArtist.edges;
  return (
    <Layout>
      <Sidebar letters={artists} />
      <Main>
        <Container>
          {edges.map(({ node }) => (
            <Row>
              <Column>
                <PictureBox>
                  <ImageContainer>
                    <Image fluid={node.profileImage.asset.fluid} />
                  </ImageContainer>
                </PictureBox>
              </Column>
              <Column>
                <BioBox
                  sx={{
                    color: "primary",
                    fontFamily: "body",
                    lineHeight: "body",
                    letterSpacing: "bio"
                  }}
                >
                  <BioContainer>
                    <h4
                      css={css`
                        border-bottom: solid 1px black;
                        padding: 0.2em;
                      `}
                    >
                      {node.name}
                    </h4>
                    <h3>{node.bio}</h3>
                    <SocialLinks />
                  </BioContainer>
                </BioBox>
              </Column>
            </Row>
          ))}
        </Container>
      </Main>
    </Layout>
  );
};

export default Artists;

export const query = graphql`
  query ArtistQuery {
    allSanityArtist {
      edges {
        node {
          bio
          name
          profileImage {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;
