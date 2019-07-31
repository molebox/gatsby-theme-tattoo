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

      -webkit-animation: roll-in-top 0.6s ease-out 300ms both;
      animation: roll-in-top 0.6s ease-out 300ms both;

      @-webkit-keyframes roll-in-top {
        0% {
          -webkit-transform: translateY(-800px) rotate(-540deg);
          transform: translateY(-800px) rotate(-540deg);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateY(0) rotate(0deg);
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
      }
      @keyframes roll-in-top {
        0% {
          -webkit-transform: translateY(-800px) rotate(-540deg);
          transform: translateY(-800px) rotate(-540deg);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateY(0) rotate(0deg);
          transform: translateY(0) rotate(0deg);
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
