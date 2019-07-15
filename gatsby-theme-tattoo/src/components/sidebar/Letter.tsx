/** @jsx jsx */

import { jsx, css } from "@emotion/core";

interface Props {
  children: string;
}

const Letter = ({ children }: Props) => (
  <div
    css={css`
      grid-area: letter;
      font-weight: bold;
      font-size: 9em;
      line-height: 100%;
      margin: 20px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      height: 100%;
      flex-grow: 1;

      @media (max-width: 920px) {
        font-size: 3em;
      }
    `}
  >
    {children}
  </div>
);

export default Letter;
