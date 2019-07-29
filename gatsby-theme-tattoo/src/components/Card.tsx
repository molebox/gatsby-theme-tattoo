/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => (
  <div
    css={css`
      box-shadow: 15px 11px 12px 13px hsla(0, 0%, 0%, 0.1);
      margin: 20px;
      padding: 20px;
      height: 300px;
      width: 300px;
    `}
  >
    {children}
  </div>
);

export default Card;
