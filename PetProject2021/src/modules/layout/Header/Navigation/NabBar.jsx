import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ classes }) => {
  return (
    <div className={classes.NavBarWrapper}>
      <ul className={classes.list}>
        <Link className={classes.link} to={`/content/tags/tech`}>
          <li className={classes.listItem}>Technologies</li>
        </Link>
        <Link className={classes.link} to={`/content/tags/smartphones`}>
          <li className={classes.listItem}>Smartphones</li>
        </Link>
        <Link className={classes.link} to={`/content/tags/PC`}>
          <li className={classes.listItem}>PC</li>
        </Link>
        <Link className={classes.link} to={`/content/tags/Tabs`}>
          <li className={classes.listItem}>Tabs</li>
        </Link>
        <Link className={classes.link} to={`/content/tags/Gadgets`}>
          <li className={classes.listItem}>Gadgets</li>
        </Link>
      </ul>
    </div>
  );
};
export default NavBar;
