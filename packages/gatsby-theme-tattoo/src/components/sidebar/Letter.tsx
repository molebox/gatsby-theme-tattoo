/** @jsx jsx */

import { jsx, css } from "@emotion/core";

interface Props {
  children: string;
}

const Letter = ({ children }: Props) => (
  <div
    css={css`
      grid-area: letter;
      font-weight: 300;
      font-size: 7em;
      line-height: 100%;
      margin: 0 2px 0 2px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #570b12;
      height: 100%;
      flex-grow: 1;
      font-family: Montserrat;

      @media (max-width: 920px) {
        font-size: 3em;
      }
    `}
  >
    {children}
  </div>
);

export default Letter;
