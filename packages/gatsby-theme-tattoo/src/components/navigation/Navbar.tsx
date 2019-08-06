import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Styles = styled.div`
  .bm-item {
    font-family: Montserrat;
    letter-spacing: 3px;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 5vh;
    color: #d1d1d1;
    transition: color 0.2s;
    outline: 0;
    font-size: 1em;
  }

  .bm-item:focus,
  .bm-burger-button:focus,
  .bm-burger-bars:focus,
  .bm-cross-button:focus,
  .bm-cross:focus {
    outline: 0;
    border: 0;
  }

  .bm-item:active,
  .bm-burger-button:active,
  .bm-burger-bars:active,
  .bm-cross-button:active,
  .bm-cross:active {
    outline: 0;
    border: 0;
  }

  .bm-item:hover {
    color: #ecebeb;
  }
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 20px;
    right: 2vw;
    top: 2vh;
    outline: 0;
  }

  .bm-burger-bars {
    background: #570b12;
    outline: 0;
  }
  .bm-cross-button {
    height: 30px;
    width: 15px;
    outline: 0;
  }
  .bm-cross {
    background: #bdc3c7;
    outline: 0;
  }
  .bm-menu {
    background: rgba(0, 0, 0, 1.3);
    padding: 3.5em 2.5em 0;
    font-size: 2em;
  }
  .bm-morph-shape {
    fill: #1c1c1c;
  }
  .bm-item-list {
    color: #b8b7ad;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 0.5em;

    .bm-burger-button {
      width: 20px;
      height: 10px;
      right: 5vw;
      top: 3vh;
    }
  }
`;

export default (props: any) => {
  return (
    <Styles>
      <Menu {...props} right>
        <Link className="menu-item" to="/">
          HOME
        </Link>
        <Link className="menu-item" to="/artists">
          ARTISTS
        </Link>
        {/* <Link className="menu-item" to="/styles">
          STYLES
        </Link> */}
        <Link className="menu-item" to="/gallery">
          GALLERY
        </Link>
      </Menu>
    </Styles>
  );
};
