/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";

const Navbar = () => (
  <div>
    <Link to="/artists">ARTISTS</Link>
    <Link to="/styles">STYLES</Link>
    <Link to="/gallery">GALLERY</Link>
  </div>
);

export default Navbar;
