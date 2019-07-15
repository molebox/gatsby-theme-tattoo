import * as React from "react";
import styled from "@emotion/styled";
import Section from "./Section";
import Key from "./Key";
import Letter from "./Letter";

const Container = styled.div`
  grid-area: sidebar;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "section section section"
    "key key key";
`;

interface Props {
  letters: Array<string>;
}

const Sidebar = ({ letters }: Props) => (
  <Container>
    <Section>
      {letters.map(letter => (
        <div>
          <Letter>{letter}</Letter>
        </div>
      ))}
    </Section>
    <Key>
      <ul>
        <li>this</li>
        <li>is</li>
        <li>a</li>
        <li>list</li>
      </ul>
    </Key>
  </Container>
);

export default Sidebar;
