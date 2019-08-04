import * as React from "react";
import styled from "@emotion/styled";
// import Navbar from "./navigation/Navbar";
// import Footer from "./Footer";
import Nav from "./navigation/Navbar";

const Container = styled.div`
  grid-area: main;
  background: white;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr;
  grid-template-areas: "content";

  height: 100vh;
`;

const Content = styled.main`
  grid-area: content;
`;

const MainWrap = styled.div`
  height: 100vh;
  overflow: auto;
`;
const PageWrap = styled.div`
  overflow: auto;
`;

interface Props {
  children: React.ReactNode;
}

const navWidth = () => `

`;

const Main = ({ children }: Props) => (
  <MainWrap>
    <Container>
      <Nav pageWrapId={"PageWrap"} outerContainerId={"MainWrap"} />
      <PageWrap>
        <Content>{children}</Content>
      </PageWrap>
      {/* <Footer>
          <Text>Created with Gatsby & Sanity.io</Text>
        </Footer> */}
    </Container>
  </MainWrap>
);

export default Main;
