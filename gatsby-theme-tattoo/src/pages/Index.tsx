import * as React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Card from "../components/Card";

const home = ["T", "A", "T", "T", "O", "O"];

export const cards = [
  <Card>
    <h3>Card One</h3>
  </Card>,
  <Card>
    <h3>Card Two</h3>
  </Card>,
  <Card>
    <h3>Card Three</h3>
  </Card>,
  <Card>
    <h3>Card Four</h3>
  </Card>
];

export const Index = () => (
  <Layout>
    <Sidebar letters={home} />
    <Main>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        {cards}
      </div>
    </Main>
  </Layout>
);

export default Index;
