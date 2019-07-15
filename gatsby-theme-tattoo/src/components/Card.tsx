/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

const shadow = styled("div")({
  boxShadow: "15px 11px 12px 13px hsla(0, 0%, 0%, 0.05)",
  margin: "20px"
});

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => <div css={shadow}>{children}</div>;

export default Card;
