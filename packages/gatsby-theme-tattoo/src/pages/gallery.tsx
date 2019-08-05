import * as React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { Grid } from "@horacioh/gatsby-theme-instagram";
import styled from "@emotion/styled";

const gallery = ["G", "A", "L", "L", "E", "R", "Y"];

const Container = styled.div`
  margin: 5em 2em 2em 2em;
`;

export const Gallery = () => (
  <Layout>
    <Sidebar letters={gallery} />
    <Main>
      <Container>
        <Grid />
      </Container>
    </Main>
  </Layout>
);

export default Gallery;
