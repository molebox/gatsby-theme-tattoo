import * as React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";
import styled from "@emotion/styled";
import Card from "./../components/Card";

const home = ["H", "O", "M", "E"];

export const cards = [
  <Card>Card One</Card>,
  <Card>Card Two</Card>,
  <Card>Card Three</Card>
];

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 6em;
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
  // align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

const SubTitle = styled.h4`
  font-family: Oswald;
  font-size: 3em;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 2px;

  margin: 0px 150px 0px 150px;
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

export const Index = () => (
  <Layout>
    <Sidebar letters={home} />
    <Main>
      <Content>
        <Title>Spicy Tattoos</Title>
        <SubTitle>
          Spicy jalapeno bacon ipsum dolor amet tri-tip cupidatat officia
          meatball hamburger flank ribeye pork chop tenderloin. Pariatur
          turducken shank filet mignon, sunt veniam beef ribs qui adipisicing
          nostrud alcatra laboris reprehenderit leberkas andouille. Shank flank
          in chicken shoulder, minim ex qui. Laborum brisket reprehenderit jerky
          ipsum.
        </SubTitle>
      </Content>
    </Main>
  </Layout>
);

export default Index;
