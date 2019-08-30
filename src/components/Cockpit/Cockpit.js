import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  let pClasses = [];
  let bClass = "";

  if (props.showPersons) {
    bClass = classes.Red;
  }

  if (props.personsLength <= 2) pClasses.push(classes.red);
  if (props.personsLength <= 1) pClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>Simple React App!</h1>
      <p className={pClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={bClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(Cockpit);
