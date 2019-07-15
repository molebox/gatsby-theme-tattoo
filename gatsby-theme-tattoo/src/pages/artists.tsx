import * as React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";

const artists = ["A", "R", "T", "I", "S", "T", "S"];

export const Artists = () => (
  <Layout>
    <Sidebar letters={artists} />
    <Main>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <h1>Artists Page</h1>
      </div>
    </Main>
  </Layout>
);

export default Artists;
