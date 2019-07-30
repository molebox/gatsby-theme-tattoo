import * as React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { Grid } from "@horacioh/gatsby-theme-instagram";

const gallery = ["G", "A", "L", "L", "E", "R", "Y"];

export const Gallery = () => (
  <Layout>
    <Sidebar letters={gallery} />
    <Main>
      <div
        style={{
          margin: "0 20px 0 20px",
          padding: "0 20px 0 20px"
        }}
      >
        <Grid />
      </div>
    </Main>
  </Layout>
);

export default Gallery;
