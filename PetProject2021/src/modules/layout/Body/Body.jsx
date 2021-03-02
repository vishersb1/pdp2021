/* eslint-disable */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, addSubscriber } from "../../../redux/actions";
import validateEmail from "./helpers/validate-email";

const Body = ({ children, classes }) => {
  const [mailValue, setMailValue] = useState("");
  const [validationError, setErrorVisability] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(false);

  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.app.isModal);
  const subscribe = () => {
    const checkEmail = validateEmail(mailValue);
    if (checkEmail) {
      setSubscribeStatus(true);
      setMailValue("");
      dispatch(addSubscriber({ email: mailValue }));
      setTimeout(function () {
        setSubscribeStatus(false);
        dispatch(closeModal());
      }, 3000);
    } else {
      setErrorVisability(true);
    }
  };

  return (
    <div className={classes.body}>
      {isModal ? (
        <div className={classes.modal}>
          <p>Please enter your email:</p>
          <input
            type="text"
            size="25"
            className={classes.modalInput}
            value={mailValue}
            onChange={(e) => {
              setMailValue(e.target.value);
              setErrorVisability(false);
            }}
          ></input>
          <button className={classes.modalButton} onClick={subscribe}>
            SUBSCRIBE
          </button>
          {validationError ? (
            <p className={classes.subscribeError}>Email not valid!</p>
          ) : null}
          {subscribeStatus ? (
            <p className={classes.subscribeSuccess}>successfuly subscribed!</p>
          ) : null}
        </div>
      ) : null}
      <div className={classes.secret}></div>
      {children}
    </div>
  );
};

export default Body;
