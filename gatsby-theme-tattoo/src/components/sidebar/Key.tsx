import * as React from "react";
import styled from "@emotion/styled";

const Conatiner = styled.div`
  grid-area: key;
`;

interface Props {
  children: React.ReactNode;
}

const Key = ({ children }: Props) => <Conatiner>{children}</Conatiner>;

export default Key;
