import React from "react";
import WebsiteLogo from "../../../shared/images/logo.svg";
import NavBar from "./Navigation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/actions";

const Header = ({ children, classes }) => {
  const dispatch = useDispatch();
  const modalHandler = () => {
    dispatch(openModal());
  };
  return (
    <div className={classes.header}>
      <div className={classes.inviteBlock}>
        <p className={classes.inviteBlockText} onClick={modalHandler}>
          SUBSCRIBE
        </p>
      </div>
      <Link className={classes.addPostButton} to={`/admin`}>
        ADD POST
      </Link>
      <Link to={`/content`}>
        <img
          src={WebsiteLogo}
          alt="Website Logo"
          className={classes.headerLogo}
        />
      </Link>

      <NavBar />
      {children}
    </div>
  );
};

export default Header;
