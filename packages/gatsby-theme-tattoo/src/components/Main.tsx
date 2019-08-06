/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";
import Footer from "./Footer";
import Nav from "./navigation/Navbar";

const Container = styled.div`
  grid-area: main;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr;
  grid-template-areas:
    "content"
    "footer";

  height: 100%;
  overflow: hidden;
`;

const Content = styled.main`
  grid-area: content;
`;

const MainWrap = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const PageWrap = styled.div`
  overflow: auto;
`;

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <MainWrap>
      <Container sx={{ backgroundColor: "background" }}>
        <Nav pageWrapId={"PageWrap"} outerContainerId={"MainWrap"} />
        <PageWrap>
          <Content>{children}</Content>
          <Footer />
        </PageWrap>
      </Container>
    </MainWrap>
  );
};

export default Main;
