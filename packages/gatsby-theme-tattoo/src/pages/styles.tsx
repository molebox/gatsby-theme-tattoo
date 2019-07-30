import * as React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";

const artists = ["S", "T", "Y", "L", "E", "S"];

export const Styles = () => (
  <Layout>
    <Sidebar letters={artists} />
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

export default Styles;
