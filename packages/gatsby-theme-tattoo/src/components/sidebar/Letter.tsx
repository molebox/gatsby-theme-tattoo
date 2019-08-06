/** @jsx jsx */
import { jsx } from "theme-ui";
import { css } from "@emotion/core";

interface Props {
  children: string;
}

const Letter = ({ children }: Props) => (
  <div
    sx={{
      color: "primary",
      fontFamily: "heading",
      fontWeight: "body",
      lineHeight: "body"
    }}
    css={css`
      grid-area: letter;
      font-size: 3.5em;
      margin-top: 0.2em;
      margin-bottom: 0.2em;
      padding: 0.1em;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex-grow: 1;

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
