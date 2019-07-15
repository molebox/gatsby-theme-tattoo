import * as React from "react";
import styled from "@emotion/styled";
import Navbar from "./navigation/Navbar";

const Conatiner = styled.div`
  grid-area: main;
  background: tomato;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 3fr;
  grid-template-areas:
    "nav"
    "content";
`;

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => (
  <Conatiner>
    <Navbar />
    {children}
  </Conatiner>
);

export default Main;
