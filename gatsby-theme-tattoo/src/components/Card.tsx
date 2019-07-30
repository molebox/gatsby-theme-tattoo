/** @jsx jsx */
import { jsx, css } from "@emotion/core";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => (
  <div
    css={css`
      box-shadow: 7px 5px 8px 2px hsla(0, 0%, 0%, 0.27);
      margin: 20px;
      padding: 20px;
      height: 300px;
      width: 300px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      font-family: Montserrat;
    `}
  >
    {children}
  </div>
);

export default Card;
