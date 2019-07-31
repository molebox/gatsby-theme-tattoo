/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Sidebar from "../components/sidebar/Sidebar";
import Layout from "../components/Layout";
import Main from "../components/Main";

const artists = ["A", "R", "T", "I", "S", "T", "S"];

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "profileCard bio";

  height: 300px;
  width: 70%;
`;

const ProfileCard = styled("div")({
  boxShadow: "5px 5px 14px 2px hsla(0, 0%, 0%, 0.27)",
  gridArea: "profileCard",
  borderRadius: "50%",
  height: "200px",
  width: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center"
});

const Bio = styled.div`
  grid-area: bio;
  font-family: Oswald;
  font-size: 1em;
  font-weight: 300;
  line-height: 110%;
  letter-spacing: 2px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-conten: center;
`;

const Gallery = styled.div`
  grid-area: gallery;

  grid-column-start: 1;
  grid-column-end: 2;
`;

const Artist = () => (
  <Center>
    <Container>
      <Center>
        <ProfileCard>
          <div>A picture here</div>
        </ProfileCard>
      </Center>
      <Center>
        <Bio>
          <h3>Name</h3>
          Spicy jalapeno bacon ipsum dolor amet tri-tip cupidatat officia
          meatball hamburger flank ribeye pork chop tenderloin. Pariatur
          turducken shank filet mignon, sunt veniam beef ribs qui adipisicing
          nostrud alcatra laboris reprehenderit leberkas andouille. Shank flank
          in chicken shoulder, minim ex qui. Laborum brisket reprehenderit jerky
          ipsum.
        </Bio>
      </Center>
    </Container>
  </Center>
);

const ArtistsInfo = () => {
  return (
    <Layout>
      <Sidebar letters={artists} />
      <Main>
        <Artist />
      </Main>
    </Layout>
  );
};

export default ArtistsInfo;
