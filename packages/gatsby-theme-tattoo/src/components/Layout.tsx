import * as React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  grid-template-areas: "sidebar main";
  height: 100vh;
  overflow: hidden;
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <Container>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
    {children}
  </Container>
);

export default Layout;
