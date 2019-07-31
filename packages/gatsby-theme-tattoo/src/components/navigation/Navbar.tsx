/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Nav = styled.nav`

  grid-area: nav;
  

  & ul {
    list-style: none;
    background-color: #ecebeb;
    text-align: center;
    padding: 0;
    margin: 0;
    height: 50px;
  }

  & li {
    font-size: 1.2em;
    line-height: 40px;
    align-self: center;
  }

  & a {
    font-family: Montserrat;
    text-decoration: none;
    color: black;
    display: block;
    transition: .3s background-color;
    letter-spacing: 2px;
  }

  & a:hover {
    background-color: #E5A0A7;
  }
   
  & a.active {
    background-color: #fff;
    color: #444;
    cursor: default;
  }


  @media (min-width: 600px) {

    & li {
      width: 150px;
      border-bottom: none;
      height: 50px;
      line-height: 50px;
      font-size: 1.4em;

      display: inline-block;
      margin-right: -4px;
    }
`;

const Navbar = () => (
  <Nav>
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/artists">ARTISTS</Link>
      </li>
      <li>
        <Link to="/styles">STYLES</Link>
      </li>
      <li>
        <Link to="/gallery">GALLERY</Link>
      </li>
    </ul>
  </Nav>
);

export default Navbar;
