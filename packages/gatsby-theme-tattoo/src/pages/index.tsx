/** @jsx jsx */
import { jsx } from "theme-ui";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const home = ["H", "O", "M", "E"];

const Title = styled.h1`
  font-size: 5em;
  display: flex;
  justify-content: center;

  @media (max-width: 920px) {
    font-size: 3em;
  }

  @media (max-width: 1024px) {
    font-size: 1.5em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

const TitleAndLogo = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10em;
  justify-content: center;
  align-items: center @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2em 2em 0 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin: 2em;
    justify-content: center;
    align-items: center;
  }
`;

export const SubTitle = styled.h4`
  font-size: 2em;
  margin: 0 8em 5em 8em;
  padding: 2em;

  @media (max-width: 920px) {
    font-size: 0.7em;
    margin: 0 50px 0px 50px;
  }

  @media (max-width: 1024px) {
    font-size: 1.2em;
    margin: 0 1em 1em 1em;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Img)`
  width: 80%;
  height: 40em;
  margin: 0 2em 3em 2em;
  border: solid 0.1em black;
  border-radius: 0.4em;

  @media (max-width: 920px) {
    height: 20em;
    margin: 0 2em 5em 2em;
  }
`;

const Logo = styled(Img)`
  width: 10em;
  height: 10em;
  margin: 1em 2em 0 0;

  @media (max-width: 768px) {
    width: 70em;
    height: 70em;
    margin: 0 2em 0 0;
  }

  @media (max-width: 920px) {
    width: 7em;
    height: 7em;
    margin: 0 2em 0 0;
  }

  @media (max-width: 1024px) {
    width: 4em;
    height: 4em;
    margin: 0 1em 1em 0;
  }
`;

export const Index = () => {
  const sanity = useStaticQuery(query);
  const edges = sanity.allSanityHomePage.edges;

  return (
    <Layout>
      <Sidebar letters={home} />
      <Main>
        <Content>
          {edges.map(({ node }, index) => (
            <div key={index}>
              <TitleAndLogo>
                <Logo fluid={node.logo.asset.fluid} />
                <Title
                  sx={{
                    color: "primary",
                    fontFamily: "heading",
                    fontWeight: "heading",
                    lineHeight: "body",
                    letterSpacing: "body"
                  }}
                >
                  {node.title}
                </Title>
              </TitleAndLogo>
              <ImageContainer>
                <Image fluid={node.mainImage.asset.fluid} />
              </ImageContainer>
              <SubTitle
                sx={{
                  color: "text",
                  fontFamily: "body",
                  fontWeight: "heading",
                  lineHeight: "body",
                  letterSpacing: "body"
                }}
              >
                {node.description}
              </SubTitle>
            </div>
          ))}
        </Content>
      </Main>
    </Layout>
  );
};
export default Index;

export const query = graphql`
  query HomePageQuery {
    allSanityHomePage {
      edges {
        node {
          description
          title
          slug {
            current
          }
          logo {
            asset {
              fluid {
                src
              }
            }
          }
          mainImage {
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
