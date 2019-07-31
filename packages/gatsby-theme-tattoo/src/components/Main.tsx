import * as React from "react";
import styled from "@emotion/styled";
import Navbar from "./navigation/Navbar";
import Footer from "./Footer";

const Container = styled.div`
  grid-area: main;
  background: white;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 3fr;
  grid-template-areas:
    "nav"
    "content";

  height: 100%;
`;

const Content = styled.main`
  grid-area: content;
  // height: 100vh;
`;

const Text = styled.h1`
  font-family: Montserrat;
  font-size: 1.5em;
  font-weight: 300;
  line-height: 110%;
  letter-spacing: 2px;
  color: #570b12;
  margin-top: auto;
  display: flex;
  justify-content: center;
`;

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => (
  <Container>
    <Navbar />
    <Content>{children}</Content>
    {/* <Footer>
      <Text>Created with Gatsby & Sanity.io</Text>
    </Footer> */}
  </Container>
);

export default Main;
