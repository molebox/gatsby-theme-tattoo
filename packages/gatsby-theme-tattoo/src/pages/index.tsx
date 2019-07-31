import * as React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";
import styled from "@emotion/styled";
import { useSiteMetadata } from "./../utils/hooks";

const home = ["H", "O", "M", "E"];

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 5em;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: 2px;
  color: #570b12;

  display: flex;
  justify-content: center;

  @media (max-width: 920px) {
    font-size: 3em;
  }

  @media (max-width: 1024px) {
    font-size: 2.5em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

export const SubTitle = styled.h4`
  font-family: Oswald;
  font-size: 2em;
  font-weight: 300;
  line-height: 110%;
  letter-spacing: 2px;

  margin: 0px 350px 0px 350px;
  padding: 10px;

  @media (max-width: 920px) {
    font-size: 2em;
    margin: 0px 50px 0px 50px;
  }

  @media (max-width: 1024px) {
    font-size: 2.5em;
    margin: 0px 50px 0px 50px;
  }
`;

export const Index = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Layout>
      <Sidebar letters={home} />
      <Main>
        <Content>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </Content>
      </Main>
    </Layout>
  );
};
export default Index;
