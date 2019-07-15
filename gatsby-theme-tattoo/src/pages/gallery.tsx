import * as React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";

const gallery = ["G", "A", "L", "L", "E", "R", "Y"];

export const Gallery = () => (
  <Layout>
    <Sidebar letters={gallery} />
    <Main>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <h1>Styles Page</h1>
      </div>
    </Main>
  </Layout>
);

export default Gallery;
