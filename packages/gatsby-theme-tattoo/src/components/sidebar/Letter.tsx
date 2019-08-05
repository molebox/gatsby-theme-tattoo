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
      font-size: 3.5em;
      line-height: 100%;
      margin-top: 0.2em;
      margin-bottom: 0.2em;
      padding: 0.1em;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #570b12;
      height: 100%;
      flex-grow: 1;
      font-family: Montserrat;

      -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1200ms
        both;
      animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1200ms both;

      @-webkit-keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @media (max-width: 920px) {
        font-size: 2em;
      }
    `}
  >
    {children}
  </div>
);

export default Letter;
