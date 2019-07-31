import * as React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: section;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));

  grid-template-areas:
    "."
    "letter"
    ".";

  // @media (max-width: 620px) {
  //   grid-template-areas:
  //     "letter"
  //     "letter"
  //     "letter";
  // }

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  // height: 100vh;
`;

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => <Container>{children}</Container>;

export default Section;
