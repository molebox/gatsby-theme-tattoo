import * as React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { cards } from "./index";

const gallery = ["G", "A", "L", "L", "E", "R", "Y"];

export const Gallery = () => (
  <Layout>
    <Sidebar letters={gallery} />
    <Main>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        {cards}
      </div>
    </Main>
  </Layout>
);

export default Gallery;
