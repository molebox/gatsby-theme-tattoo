/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { Link } from "gatsby";

const artists = ["A", "R", "T", "I", "S", "T", "S"];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.1em;
  margin: 0 auto;
`;

const Box = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  background: #fff;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #fff;
    transition: 0.5s;
    z-index: -1;
  }

  &:hover:before {
    transform: rotate(20deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }

  &:hover:after {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }

  & .imgBx {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    background: #222;
    transition: 0.5s;
    z-index: 1;
  }

  &:hover .imgBx {
    bottom: 80px;
  }

  & .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .details {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 60px;
    text-align: center;
    font-family: Montserrat;
  }

  & .details h2 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 1.5em;
    letter-spacing: 2px;
    color: #777;
    text-transform: uppercase;
  }

  // & .details h2 span {
  // font-weight: 700;
  // font-size: .8em;
  // color: #9B414A;
  // display: block;
  // margin-top: 5px;
  //  }
`;

// credit to Manoj Silag for the code pen => https://codepen.io/manojsilag/pen/YBOOmB
export const Artists = () => (
  <Layout>
    <Sidebar letters={artists} />
    <Main>
      <Container>
        <Box>
          <div className="imgBx">image here</div>
          <div className="details">
            <Link to="/artistInfo">Artist One</Link>
          </div>
        </Box>
        <Box>
          <div className="imgBx">image here</div>
          <div className="details">
            <h2>Artist Two</h2>
          </div>
        </Box>
        <Box>
          <div className="imgBx">image here</div>
          <div className="details">
            <h2>Artist Three</h2>
          </div>
        </Box>
        <Box>
          <div className="imgBx">image here</div>
          <div className="details">
            <h2>Artist Four</h2>
          </div>
        </Box>
      </Container>
    </Main>
  </Layout>
);

export default Artists;
