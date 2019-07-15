import * as React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  grid-area: section;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));

  grid-template-areas:
    "letter letter"
    "letter letter"
    "letter letter";

  @media (max-width: 620px) {
    grid-template-areas:
      "letter"
      "letter"
      "letter";
  }
`;

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => <Container>{children}</Container>;

export default Section;
